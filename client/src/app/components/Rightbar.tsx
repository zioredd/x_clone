import React from "react";

export default function Rightbar() {
  return (
    <aside className="hidden lg:block bg-black text-white px-6 py-6 border-l border-gray-800 overflow-y-auto">
      {/* Search */}
      <div className="mb-6">
        <input
          className="w-full bg-gray-900 text-white rounded-full px-4 py-2 outline-none placeholder-gray-500"
          placeholder="Search"
        />
      </div>
      {/* What's happening */}
      <div className="bg-gray-900 rounded-2xl mb-6">
        <div className="font-bold text-xl px-4 py-3">What's happening</div>
        <div className="px-4 py-2 hover:bg-gray-800 rounded-xl cursor-pointer">
          <div className="text-xs text-gray-400">Technology · Trending</div>
          <div className="font-semibold">#AROttoEarn</div>
          <div className="text-xs text-gray-400">1,233 posts</div>
        </div>
        <div className="px-4 py-2 hover:bg-gray-800 rounded-xl cursor-pointer">
          <div className="text-xs text-gray-400">Trending in Ethiopia</div>
          <div className="font-semibold">TPLF</div>
          <div className="text-xs text-gray-400">1,100 posts</div>
        </div>
        <div className="px-4 py-2 hover:bg-gray-800 rounded-xl cursor-pointer">
          <div className="text-xs text-gray-400">Trending in Ethiopia</div>
          <div className="font-semibold">Nile</div>
          <div className="text-xs text-gray-400">3,671 posts</div>
        </div>
        <div className="px-4 py-2 hover:bg-gray-800 rounded-xl cursor-pointer">
          <div className="text-xs text-gray-400">Politics · Trending</div>
          <div className="font-semibold">Egypt</div>
          <div className="text-xs text-gray-400">43.2K posts</div>
        </div>
        <div className="px-4 py-3 text-blue-500 cursor-pointer font-semibold hover:underline">Show more</div>
      </div>
      {/* Who to follow */}
      <div className="bg-gray-900 rounded-2xl">
        <div className="font-bold text-xl px-4 py-3">Who to follow</div>
        <div className="px-4 py-2 flex items-center gap-3 hover:bg-gray-800 rounded-xl cursor-pointer">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg">b</div>
          <div className="flex-1">
            <div className="font-semibold leading-tight">billboard</div>
            <div className="text-gray-400 text-sm">@billboard</div>
          </div>
          <button className="bg-white text-black font-bold px-4 py-1 rounded-full">Follow</button>
        </div>
        <div className="px-4 py-2 flex items-center gap-3 hover:bg-gray-800 rounded-xl cursor-pointer">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg">W</div>
          <div className="flex-1">
            <div className="font-semibold leading-tight">The Weeknd News</div>
            <div className="text-gray-400 text-sm">@NewsWeekend</div>
          </div>
          <button className="bg-white text-black font-bold px-4 py-1 rounded-full">Follow</button>
        </div>
        <div className="px-4 py-2 flex items-center gap-3 hover:bg-gray-800 rounded-xl cursor-pointer">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg">B</div>
          <div className="flex-1">
            <div className="font-semibold leading-tight">B H</div>
            <div className="text-gray-400 text-sm">@MeleseZenawi_</div>
          </div>
          <button className="bg-white text-black font-bold px-4 py-1 rounded-full">Follow</button>
        </div>
        <div className="px-4 py-3 text-blue-500 cursor-pointer font-semibold hover:underline">Show more</div>
      </div>
    </aside>
  );
}
