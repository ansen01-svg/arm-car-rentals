"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useWindowWidth from "@/app/_lib/frontend/hooks/useWindowWidth";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    // backgroundColor: "#1890ff",
    backgroundColor: "#1f9990",
  },
});

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
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
    color: "#666",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#1f9990",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1f9990",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#1f9990",
    },
  })
);

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default function Ul() {
  const [value, setValue] = useState(0);
  const { mobileScreen } = useWindowWidth();

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  return (
    <AntTabs
      value={value}
      onChange={handleChange}
      aria-label="nav tabs"
      role="navigation"
    >
      <AntTab label="Overview" href="#overview" />
      <AntTab label="Location" href="#location" />
      <AntTab label="Policies" href="#policies" />
      {mobileScreen && <AntTab label="Price Summary" href="#price-summary" />}
    </AntTabs>
  );
}
