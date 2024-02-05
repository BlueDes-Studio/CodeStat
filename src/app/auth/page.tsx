"use client";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  return (
    <>
      <div>
        <button onClick={() => signIn("email")}>signin</button>
      </div>
    </>
  );
}
