import NotificationBar from "../components/notification_bar/notification_bar";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <NotificationBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
