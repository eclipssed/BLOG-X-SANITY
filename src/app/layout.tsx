import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mama-magic-hub.vercel.app/"),
  title: { default: "MamaMagicHub", template: `%s | MamaMagicHub` },
  description: "Unlock a treasure trove of expert advice, insightful tips",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ["my-email", "my-link"],
    // },
  },
  twitter: {
    card: "summary_large_image",
  },
  category: "parenting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-gradient-to-br from-pink-100 to-green-100  ${poppins.className}`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
