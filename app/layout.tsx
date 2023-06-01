import "./globals.css";
import { Raleway } from "next/font/google";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Alisa Vorotyntseva",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
