import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hand Talk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
