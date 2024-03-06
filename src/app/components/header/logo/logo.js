import Link from "next/link";
import Image from "next/image";
import appLogo from "../../../assets/logo.png";

export default function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image src={appLogo} alt="logo" width={168} height={35} />
      </Link>
    </div>
  );
}
