import React from "react";

export default function Feed() {
  return (
    <main className="flex-1 max-w-2xl mx-auto pt-2 pb-8 md:px-0">
      {/* Post input */}
      <div className="bg-black border-b border-gray-800 p-4 flex gap-3">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg">Z</div>
        <input
          className="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-500"
          placeholder="What’s happening?"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition">Post</button>
      </div>
      {/* Tweet post */}
      <div className="border-b border-gray-800 p-4 flex gap-3">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg">E</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Elon Musk</span>
            <span className="text-gray-400">@elonmusk · Jul 30</span>
          </div>
          <div className="text-white">facts</div>
          <div className="mt-2 border border-gray-700 rounded-xl overflow-hidden">
            <div className="bg-gray-900 p-4 flex gap-4 items-center">
              <div className="w-20 h-24 bg-gray-700 rounded-lg flex-shrink-0"></div>
              <div>
                <div className="font-bold text-white text-xl">TESLA OPTIMUS HAS GREAT JEANS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add more tweet posts here as needed */}
    </main>
  );
}
