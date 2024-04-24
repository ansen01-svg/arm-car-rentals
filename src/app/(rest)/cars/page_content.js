"use client";

import useCheckFaultyAccess from "@/app/_lib/frontend/hooks/useCheckFaultyAccess";
import SearchOptionsHolder from "./components/search_options_holder/search_options-holder";
import ErrorMessageHolder from "./components/error_message_holder/error_message_holder";
import Body from "./body";

export default function PageContent(props) {
  const { searchParams, cars } = props;

  const { faultyAccess } = useCheckFaultyAccess(searchParams);

  if (faultyAccess) {
    return (
      <div className="w-full">
        <SearchOptionsHolder />
        <ErrorMessageHolder />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-56px-224px)] md:min-h-[calc(100vh-64px-224px)]">
      <SearchOptionsHolder />
      <Body cars={cars} />
    </div>
  );
}
