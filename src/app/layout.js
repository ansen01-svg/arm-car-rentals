import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import DateLocalizationProvider from "./components/date_localization_provider/date_localization_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Carko.in",
  },
  description:
    "Carko.in provides car rentals at a cheap rate. Book your rental now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div role="main">
          <DateLocalizationProvider>{children}</DateLocalizationProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
