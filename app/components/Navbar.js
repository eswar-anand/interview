"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="navbar">
      <Link href="/" className="brand">Interv2</Link>
      <div className="nav-links">
        {session ? (
          <>
            <Link href="/home">Home</Link>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn("github", {
            callbackUrl: "/home",
            authorizationParams: { prompt: "consent" }
          })}>Login</button>
        )}
      </div>
    </nav>
  );
}
