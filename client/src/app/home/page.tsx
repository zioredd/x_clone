import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full relative px-[7em]">
      {/* Main content */}
      <div
        className="flex justify-center"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="grid grid-cols-12 w-full max-w-[1400px] mx-auto">
          {/* Sidebar: col-span-2 on md+, hidden on mobile */}
          <div className="hidden md:block col-span-2">
            <Sidebar />
          </div>
          {/* Feed: always centered col-span-12 on mobile, col-span-7 on desktop */}
          <div className="col-span-12 md:col-span-6 flex justify-center md:pl-10">
            <div className="w-full px-0">
              <Feed />
            </div>
          </div>
          {/* Rightbar: col-span-3 on lg+, hidden on smaller screens */}
          <div className="hidden lg:block col-span-4">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
