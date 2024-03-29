import { Inter } from "next/font/google";
import "./globals.css";
import DateLocalizationProvider from "./components/date_localization_provider/date_localization_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "ARM",
  },
  description: "ARM provides car rentals at a cheap rate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div role="main">
          <DateLocalizationProvider>{children}</DateLocalizationProvider>
        </div>
      </body>
    </html>
  );
}
