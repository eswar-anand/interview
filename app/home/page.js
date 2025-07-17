"use client";
import ProtectedRoute from "../components/ProtectedRoute";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div style={{ padding: "2rem" }}>
        <h2>Welcome to the Home Page!</h2>
        <p>This page is protected. You're logged in.</p>
      </div>
    </ProtectedRoute>
  );
}
