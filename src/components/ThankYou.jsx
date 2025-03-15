import { Link } from "react-router-dom";

export function ThankYou() { // ✅ Named Export
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-700">Your submission has been received. We will get back to you soon!</p>
      <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
}