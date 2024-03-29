"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMediaQuery } from "@mui/material";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#2176ae",
  },
});

function LinkTab(props) {
  return (
    <Tab component="a" aria-current={props.selected && "page"} {...props} />
  );
}

const AntTab = styled((props) => <LinkTab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(1),
    color: "rgba(36,39,44,.7)",
    // fontFamily: "__Inter_e66fe9",
    "&:hover": {
      color: "#2176ae",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#2176ae",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#2176ae",
    },
  })
);

export default function Ul() {
  const [value, setValue] = useState(0);
  const mobileScreen = useMediaQuery("(max-width:1024px)");

  const handleChange = (event, newValue) => {
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
    setValue(newValue);
  };

  return (
    <AntTabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs"
      role="navigation"
      // sx={{
      //   ".MuiTabs-flexContainer": {
      //     overflowX: "auto",
      //     scrollbarColor: "transparent transparent",
      //   },
      // }}
    >
      <AntTab label="Overview" href="#overview" />
      <AntTab label="Location" href="#location" />
      <AntTab label="Policies" href="#policies" />
      {mobileScreen && <AntTab label="Price Summary" href="#price-summary" />}
    </AntTabs>
  );
}
