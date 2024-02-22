import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const quicksand = Quicksand({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: "Wegeda",
  description: "Find rooms and verified roommates across Nigeria.",
  openGraph: {
    type: "website",
    url: "https://wegeda.app",
    title: "Wegeda",
    description: "Find rooms and verified roommates across Nigeria.",
    siteName: "Wegeda",
    images: [{
      url: "https://wegeda.app/icons/logo.png",
    }],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ToastContainer
        hideProgressBar={true}
        autoClose={2000}

      />
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
