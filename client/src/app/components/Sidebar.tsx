import React from "react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaList, FaBookmark, FaUsers, FaUser, FaEllipsisH } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col justify-between h-screen w-20 md:w-64 bg-black text-white px-2 py-4 border-r border-gray-800">
      {/* Top navigation */}
      <div>
        <div className="mb-8 flex items-center justify-center md:justify-start px-2">
          <span className="text-3xl font-bold">X</span>
        </div>
        <nav className="space-y-2">
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaHome className="text-2xl mr-4" />
            <span className="hidden md:inline">Home</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaHashtag className="text-2xl mr-4" />
            <span className="hidden md:inline">Explore</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaBell className="text-2xl mr-4" />
            <span className="hidden md:inline">Notifications</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaEnvelope className="text-2xl mr-4" />
            <span className="hidden md:inline">Messages</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaList className="text-2xl mr-4" />
            <span className="hidden md:inline">Lists</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaBookmark className="text-2xl mr-4" />
            <span className="hidden md:inline">Bookmarks</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaUsers className="text-2xl mr-4" />
            <span className="hidden md:inline">Communities</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaUser className="text-2xl mr-4" />
            <span className="hidden md:inline">Profile</span>
          </button>
          <button className="flex items-center px-4 py-2 rounded-full hover:bg-gray-900 w-full transition">
            <FaEllipsisH className="text-2xl mr-4" />
            <span className="hidden md:inline">More</span>
          </button>
        </nav>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full hidden md:block transition">
          Post
        </button>
      </div>
      {/* User profile */}
      <div className="flex items-center gap-2 px-2 py-2 rounded-full hover:bg-gray-900 cursor-pointer transition">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg">
          Z
        </div>
        <div className="hidden md:block">
          <div className="font-semibold">Zior Ezodin</div>
          <div className="text-gray-400 text-sm">@Ziorized</div>
        </div>
      </div>
    </aside>
  );
}
