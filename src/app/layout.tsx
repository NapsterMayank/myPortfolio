import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Real Beluga | Sarcastic Portfolio",
  description: "I build things. Sometimes they work. Mostly I pay GCP bills.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="antialiased bg-black text-white selection:bg-purple-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
