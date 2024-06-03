import LinkHolder from "./link_holder";

export default function Footer() {
  return (
    <div className="w-full h-56 px-6 text-primary text-xs font-medium bg-primary flex flex-col justify-center items-center gap-3">
      <div className="flex flex-wrap justify-center items-center gap-3">
        <LinkHolder linkTo="/about" linkTitle="About" />
        <LinkHolder linkTo="/contact" linkTitle="Contact us" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        <p className="footerText">© 2023 Carko.</p>
        <p className="footerText">All rights reserved.</p>
      </div>
    </div>
  );
}
