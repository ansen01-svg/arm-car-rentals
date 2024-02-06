"use client";

import { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Logo from "./logo/logo";
import Links from "./links/links";
import AuthenticatedContent from "./user_modal/authenticated_content";
import UnauthenticatedContent from "./user_modal/unauthenticated_content";

export default function HeaderContent(props) {
  const { token } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      fetch(`http://localhost:3000/api/user/getCurrentUser`, {
        method: "GET",
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => setUser(data.data))
        .catch((error) => console.log(error));
    }
  }, [token]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="w-full h-full px-6 bg-white flex items-center justify-between lg:px-20">
      <Logo />
      <Links user={user} handleClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {user ? (
          <AuthenticatedContent handleClose={handleClose} user={user} />
        ) : (
          <UnauthenticatedContent handleClose={handleClose} />
        )}
      </Popover>
    </div>
  );
}
