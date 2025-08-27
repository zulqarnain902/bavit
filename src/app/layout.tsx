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
      <body>
        <Header onToggleSidebar={handleToggleSidebar} onExpand={handleExpand} />
        <main className="pt-16 px-4">{children}</main>
      </body>
    </html>
  );
}
