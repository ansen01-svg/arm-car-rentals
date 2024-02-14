import { Inter } from "next/font/google";
import "./globals.css";
import DateLocalizationProvider from "./components/date_localization_provider/date_localization_provider";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "ARM",
  },
  description: "ARM provides car rentals at a cheap rate",
};

export default function RootLayout({ children }) {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_DOMAIN}/api/user/getCurrentUser`
  // );
  // const data = await response.json();
  // console.log(data);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div role="main">
          <DateLocalizationProvider>{children}</DateLocalizationProvider>
        </div>
      </body>
    </html>
  );
}
