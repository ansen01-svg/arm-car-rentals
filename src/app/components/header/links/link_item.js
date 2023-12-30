import Link from "next/link";

export default function LinkItem(props) {
  const { content, link } = props;

  return (
    <div>
      <Link href={link}>{content}</Link>
    </div>
  );
}
