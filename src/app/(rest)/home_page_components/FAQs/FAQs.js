"use client";

import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { faqsTexts } from "@/app/utils/arrays";
import DesktopContent from "./desktop_content_holder";
import TabContent from "./tab_content";

export default function FAQsHolder() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const tabletScreen = useMediaQuery("(min-width:760px)");

  const handleExpand = (index) => {
    setExpandedIndex(index);
  };

  return (
    <div className="w-full px-5 py-12 flex flex-col items-center justify-center gap-6 md:px-6 md:py-6 lg:px-20 lg:py-12">
      <div className="w-full text-left">
        <h1 className="text-slate-400 text-xl font-bold md:text-3xl">FAQs</h1>
      </div>
      <div className="w-full bg-white rounded shadow-sm">
        {faqsTexts.map((textObj) => {
          if (tabletScreen) {
            return (
              <>
                <DesktopContent
                  key={textObj.id}
                  title={textObj.title}
                  text={textObj.text}
                />
                {textObj.id !== 3 ? (
                  <div className="w-full h-[1px] bg-slate-200"></div>
                ) : (
                  <></>
                )}
              </>
            );
          }

          return (
            <TabContent
              key={textObj.id}
              title={textObj.title}
              text={textObj.text}
              isExpanded={expandedIndex === textObj.id}
              onExpand={() => handleExpand(textObj.id)}
              onCollapse={() => setExpandedIndex(null)}
            />
          );
        })}
      </div>
    </div>
  );
}
