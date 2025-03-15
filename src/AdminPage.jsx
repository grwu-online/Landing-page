import { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  // Protect Admin Page: Redirect to login if not authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin-login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "submissions"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchSubmissions();
  }, []);

  // Handle Edit Click
  const handleEdit = (submission) => {
    setEditingId(submission.id);
    setEditedData({ name: submission.name, email: submission.email });
  };

  // Handle Update
  const handleUpdate = async (id) => {
    try {
      const submissionDoc = doc(db, "submissions", id);
      await updateDoc(submissionDoc, { name: editedData.name, email: editedData.email });

      setSubmissions(submissions.map((s) => (s.id === id ? { ...s, ...editedData } : s)));
      setEditingId(null);
    } catch (error) {
      console.error("Error updating submission:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "submissions", id));
      setSubmissions(submissions.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting submission:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Panel</h1>
      <button
        onClick={() => {
          localStorage.removeItem("isAdminAuthenticated"); // Logout
          navigate("/admin-login");
        }}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Logout
      </button>
      <div className="bg-white shadow-md rounded p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-2">Submissions</h2>
        {submissions.length === 0 ? (
          <p>No submissions yet.</p>
        ) : (
          <ul className="space-y-2">
            {submissions.map((submission) => (
              <li key={submission.id} className="p-2 border rounded bg-gray-50">
                {editingId === submission.id ? (
                  <>
                    <input
                      type="text"
                      value={editedData.name}
                      onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                      className="border p-1 rounded"
                    />
                    <input
                      type="email"
                      value={editedData.email}
                      onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                      className="border p-1 rounded ml-2"
                    />
                    <button
                      onClick={() => handleUpdate(submission.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <strong>Name:</strong> {submission.name} <br />
                    <strong>Email:</strong> {submission.email} <br />
                    <strong>Timestamp:</strong>{" "}
                    {new Date(submission.timestamp.seconds * 1000).toLocaleString()}
                    <button
                      onClick={() => handleEdit(submission)}
                      className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(submission.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}