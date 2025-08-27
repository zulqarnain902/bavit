import React from "react";
import Image from "next/image";
import { Bell, Calendar, Maximize2, Menu } from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
  onExpand: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onExpand }) => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          {/* Toggle Sidebar */}
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={24} className="text-gray-700" />
          </button>

          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Calendar size={22} className="text-gray-700" />
          </button>
          <button
            onClick={onExpand}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Maximize2 size={22} className="text-gray-700" />
          </button>
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell size={22} className="text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/user.png"
              alt="User"
              width={35}
              height={35}
              className="rounded-full"
            />
            <div className="flex flex-col leading-4">
              <span className="text-sm font-semibold text-gray-800">SUPER</span>
              <span className="text-xs text-gray-500">ADMIN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
