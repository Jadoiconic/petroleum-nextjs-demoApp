"use client"
import ButtonComponent from "@/components/button/ButtonComponent";
import UserInput from "@/components/inputcomp/UserInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white border rounded shadow md:w-1/3 py-4 px-8">
        <h1 className="text-3xl font-bold text-center">
          Engine Petroleum Station
        </h1>
        <form onSubmit={handleSubmit}>
          <UserInput
            label="Email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <UserInput
            label="Password"
            placeholder="Pass@word123!"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <ButtonComponent label="Sign In" handleClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
