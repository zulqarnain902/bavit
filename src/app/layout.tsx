import "./globals.css";
import Header from "@/components/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16 px-4">{children}</main>
      </body>
    </html>
  );
}
