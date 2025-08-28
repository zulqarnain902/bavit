"use client";

import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const handleToggleSidebar = () => {
    console.log("Sidebar toggled");
  };

  const handleExpand = () => {
    console.log("Expand button clicked");
  };

  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <Header onToggleSidebar={handleToggleSidebar} onExpand={handleExpand} />
        <main className="pt-16 px-4 flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
