import React from "react";
import "./globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen justify-center w-full-items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
