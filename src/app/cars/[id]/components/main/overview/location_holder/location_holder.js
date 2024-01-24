"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Header from "./header";
import Content from "./content/content";

// store url to session storage
const storeUrl = () => {
  const url = window.location.href;
  const validUrl = url.split("?")[1].split("&");

  if (validUrl.length > 3) {
    const url = sessionStorage.getItem("url");

    if (!url) {
      const url = window.location.href;
      sessionStorage.setItem("url", JSON.stringify(url));
    }
  }
};

// get url from session storage
const getUrl = () => {
  const url = sessionStorage.getItem("url");

  if (url) {
    const url = JSON.parse(sessionStorage.getItem("url"));
    return url;
  }
};

// get date and time
const getDateAndTime = (url, stateParam) => {
  const trimmedUrl = url && url.split("?")[1];
  const params = trimmedUrl.split("&");

  const field = params.find((param) => {
    const key = param.split("=")[0];
    const value = param.split("=")[1];

    if (key == stateParam) {
      return value;
    }
  });

  return field;
};

export default function LocationHolder() {
  const [url, setUrl] = useState("");
  const [dates, setDates] = useState({
    pickupDate: getDateAndTime(url, "pickupDate"),
    dropoffDate: "",
  });
  const [times, setTimes] = useState(null);

  // store url to session storage
  useEffect(() => {
    storeUrl();
  }, []);

  // set url to state
  useEffect(() => {
    setUrl(getUrl());
  }, []);

  return (
    <div
      id="location"
      className="w-full px-3 py-3 bg-white flex flex-col items-center justify-center gap-4 rounded"
    >
      <Header />
      <Content />
    </div>
  );
}
