import Link from "next/link";

export default function LinkHolder(props) {
  const { linkTo, linkTitle } = props;

  return (
    <>
      <Link href={linkTo}>{linkTitle}</Link>
    </>
  );
}
