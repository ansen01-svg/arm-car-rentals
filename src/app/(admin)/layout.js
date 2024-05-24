"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SnackbarProvider } from "notistack";
import AdminHeader from "./components/admin_header/admin_header";
import DesktopAside from "./components/desktop_aside/desktop_aside";
import { drawerNavItems } from "../utils/arrays";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();
  const mobileScreen = useMediaQuery("(max-width:1024px)");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // automatically close mobile screen aside when
  // screen is mobile
  useEffect(() => {
    if (mobileScreen) {
      setOpen(false);
    }
  }, [mobileScreen]);

  // fetch user on load
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/getCurrentUser`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
        } else {
          setUser(null);
        }
      })
      .catch((error) => console.log("fetch error-", error));
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerNavItems.map((navItem) => (
          <ListItem key={navItem.id} disablePadding>
            <ListItemButton onClick={() => router.push(navItem.link)}>
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText
                primary={navItem.tittle}
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "15px",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (mobileScreen) {
    return (
      <div className="max-w-full">
        <AdminHeader toggleDrawer={toggleDrawer} user={user} />
        <SnackbarProvider
          autoHideDuration={3000}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <div className="w-full">{children}</div>
      </div>
    );
  }

  return (
    <div className="max-w-full flex flex-row">
      <SnackbarProvider
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      />
      <DesktopAside user={user} />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
