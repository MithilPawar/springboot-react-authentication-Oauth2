import { useState } from "react";
import { registerUser } from "../API/auth.js";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validate = () => {
    if (!form.username.trim() || !form.email.trim() || !form.password.trim()) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email.");
      return false;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-300 via-blue-200 to-purple-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        aria-label="Register Form"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Create Account</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-300 transition"
            autoComplete="username"
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-300 transition"
            autoComplete="email"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-300 transition"
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-2 top-9 text-xs text-blue-600"
            onClick={() => setShowPassword(v => !v)}
            tabIndex={-1}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-full py-2 rounded-lg shadow-lg mt-4 font-semibold transition hover:scale-105 hover:from-green-600 hover:to-blue-600 disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <p className="mt-4 text-xs text-center text-gray-500">
          Already have an account?
          <span
            className="ml-2 text-blue-700 underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
