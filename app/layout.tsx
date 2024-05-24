import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerAuthSession } from "@/auth";
import Navbar from "@/components/Navbars/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image to Prompt: Turn Images into Text Description with AI",
  description: "Leverage AI to effortlessly convert your images into detailed and descriptive text prompts with our powerful Image to Prompt tool.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getServerAuthSession();
  const session = {
    user: null
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={session?.user} />
        {children}
        {process.env.NODE_ENV !== "development" ? (
          <>
            <GoogleAnalytics />
          </>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
