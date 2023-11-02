import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import Homebody from "@/components/Homebody";
import DonorDetailForm from "@/components/DonorDetailForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      <Navbar />
      <Homebody />
      <DonorDetailForm />
    </main>
  );
}