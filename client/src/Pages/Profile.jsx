import { useEffect, useState } from "react";
import { getUserProfile } from "../API/auth.js";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();
        setProfile(res);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []); // ✅ Added empty dependency array to run only once

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full mt-20">
        <p className="text-gray-600 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        My Profile
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Username:</span>
          <span className="text-gray-900">{profile.username}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="text-gray-900">{profile.email}</span>
        </div>
      </div>
    </div>
  );
}
