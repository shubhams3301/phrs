import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // Define your custom credentials here
        email: { label: "email", type: "text" },
        password: { label: "password", type: "text" },
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }
          console.log(user);
          return Promise.resolve(user)
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session(session, user) {
      console.log("session",user);
      // Customize the session object here by adding additional fields
      session.user.id = user.id; // Add the user's ID
      session.user.role = user.role; // Add the user's name
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
