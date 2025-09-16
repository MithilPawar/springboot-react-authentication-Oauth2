import { useState } from "react";
import { loginUser } from "../API/auth.js";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        console.log(form);
      const res = await loginUser(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-300 via-purple-200 to-pink-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md transition-transform hover:scale-[1.02]"
        aria-label="Login Form"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Welcome Back</h2>

        {error && <p className="text-red-600 mb-4 text-center font-medium">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-4 w-full mb-5 text-lg placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
          autoComplete="username"
          autoFocus
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-4 w-full mb-6 text-lg placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
          autoComplete="current-password"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-xl w-full font-bold shadow-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-6 text-center text-gray-600 font-medium">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-700 underline hover:text-blue-900">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
