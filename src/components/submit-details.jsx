import { useState } from "react";
import { db, collection, addDoc } from "../../firebase-config";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function SubmitDetails() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "submissions"), {
        name,
        email,
        timestamp: new Date(),
      });

      // Redirect to Thank You page after successful submission
      navigate("/thank-you");
    } catch (error) {
      console.error("🔥 Error submitting details:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Book a Call</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 w-full max-w-md">
        <label className="block mb-2">
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mt-1" required />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mt-1" required />
        </label>
        <button type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}
