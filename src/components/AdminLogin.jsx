import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  // ✅ Store credentials securely in environment variables
  const ADMIN_ID = import.meta.env.VITE_ADMIN_ID || "admin";
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "securepassword";

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (adminId === ADMIN_ID && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdminAuthenticated", "true"); // Save login state
      navigate("/admin"); // ✅ Redirect to Admin Page
    } else {
      setError("Invalid Admin ID or Password!"); // ✅ Show proper error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <label className="block mb-2">
          Admin ID:
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            required
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mt-1"
            autoComplete="off" // ✅ Prevent auto-fill for security
            required
          />
        </label>
        {error && <p className="text-red-500">{error}</p>} {/* ✅ Show error message */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}