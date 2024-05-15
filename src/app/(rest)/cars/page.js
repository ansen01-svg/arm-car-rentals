import PageContent from "./page_content";

export default async function Cars({ searchParams }) {
  return (
    <div className="max-w-full bg-primary">
      <PageContent searchParams={searchParams} />
    </div>
  );
}
