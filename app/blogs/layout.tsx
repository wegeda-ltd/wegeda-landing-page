import type { Metadata } from "next";
import "react-quill/dist/quill.snow.css";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Wegeda - Blog",
  description: "Find rooms and verified roommates across Nigeria.",
  openGraph: {
    type: "website",
    url: "https://wegeda.app",
    title: "Wegeda",
    description: "Find rooms and verified roommates across Nigeria.",
    siteName: "Wegeda",
    images: [
      { url: "https://wegeda.app/icons/logo.png", secureUrl: "https://wegeda.app/icons/logo.png" },
    ],
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
      <body>{children}</body>
    </html>
  );
}