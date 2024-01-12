export default function Footer() {
  return (
    <div className="w-full h-56 px-6 bg-primary flex flex-col justify-center items-center gap-3">
      <div className="flex flex-wrap justify-center items-center gap-3">
        <p className="footerText">Support</p>
        <p className="footerText">Terms Of Use</p>
        <p className="footerText">Privacy Policy</p>
        <p className="footerText">Cookies</p>
        <p className="footerText">Your Privacy Choices</p>
        <p className="footerText">Careers</p>
        <p className="footerText">Advertising</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        <p className="footerText">© 2023 ARM.</p>
        <p className="footerText">All rights reserved.</p>
      </div>
    </div>
  );
}
