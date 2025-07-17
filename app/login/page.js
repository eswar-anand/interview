"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login Page</h2>
      <button onClick={() => signIn("github", {
        callbackUrl: "/home",
        authorizationParams: { prompt: "consent" }
      })}>
        Sign in with GitHub
      </button>
    </div>
  );
}
