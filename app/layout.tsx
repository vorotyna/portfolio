import "./globals.css";
import { Raleway } from "next/font/google";

// Font which is applied to all children
const inter = Raleway({ subsets: ["latin"] });

// Metadata is crucial for search engine optimization (SEO) as it helps search engines understand and categorize the content of a webpage
export const metadata = {
  title: "Alisa Vorotyntseva",
  description: "Personal portfolio website",
};

// Takes in a children prop and returns them in the body tag of the page HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Typing for the 'children' prop
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
