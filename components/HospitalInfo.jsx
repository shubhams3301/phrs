"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function HospitalInfo() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        
        <div>
          Id: <span className="font-bold">{session?.user?.id}</span>
        </div>
        <div>
          Contact: <span className="font-bold">{session?.user?.contact}</span>
        </div>
        <div>
          Role: <span className="font-bold">{session?.user?.role}</span>
        </div>
        <div>
          Address: <span className="font-bold">{session?.user?.address}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
