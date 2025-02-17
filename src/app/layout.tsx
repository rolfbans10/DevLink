import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "DevLink - My Portfolio",
  description: "Showcasing my projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
