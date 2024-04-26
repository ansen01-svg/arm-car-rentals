import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Popover from "@mui/material/Popover";
import SignOutBtnHolder from "./signout_btn";

export default function UserHolder({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="w-full">
      {user && (
        <List
          sx={{
            ".MuiButtonBase-root": {
              borderRadius: "5px",
            },
            ".MuiSvgIcon-root": {
              width: "3em",
            },
          }}
        >
          <ListItem>
            <ListItemButton onClick={handleClick}>
              <ListItemText
                primary={user.username}
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "rgba(36,39,44,.7)",
                    // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
                  },
                }}
              />
              <ListItemIcon>
                <MoreHorizOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="w-[225px] py-4 flex items-center justify-center">
          <SignOutBtnHolder handleClose={handleClose} />
        </div>
      </Popover>
    </div>
  );
}
