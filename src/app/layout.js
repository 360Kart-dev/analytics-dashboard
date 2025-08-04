import { Geist, Geist_Mono } from "next/font/google";
import AuthWrapper from "@/components/AuthWrapper";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Analytics Dashboard",
  description: "360Kart's Analytics Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthWrapper>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </div>
        </AuthWrapper>
      </body>
    </html>
  );
}
