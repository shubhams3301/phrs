"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !id || !contact || !role || !address || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/userregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          id,
          contact,
          role,
          address,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (

    <div className="grid place-items-center h-screen">
       <Navbar /><br />
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
        <h1 className="text-xl font-bold my-4">Hospital and Lab Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="License/Registrartion Id"
          />
          <input
            onChange={(e) => setContact(e.target.value)}
            type="text"
            placeholder="Contact Number"
          />
          <input
            onChange={(e) => setRole(e.target.value)}
            type="text"
            placeholder="Role"
          />
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="text-gray-800  font-medium text-lg drop-shadow-2xl bg-gradient-to-r from-cyan-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 text-white font-bold cursor-pointer px-6 py-2">
            Sign-Up
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
