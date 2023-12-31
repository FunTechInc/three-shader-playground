import "the-new-css-reset/css/reset.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
   title: "three-playground",
   description: "three-playground",
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

export { metadata };
