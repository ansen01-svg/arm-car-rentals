import { useState } from "react";
import Logo from "@/app/components/header/logo/logo";
import Popover from "@mui/material/Popover";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SignOutBtnHolder } from "@/app/components/header/user_modal/authenticated_content";

export default function AdminHeader(props) {
  const { toggleDrawer, user } = props;

  return (
    <div className="w-full h-14 px-6 bg-white flex items-center justify-between sticky top-0 left-0 border-b-[1px] border-slate-200 z-50 md:h-16">
      <MenuButton toggleDrawer={toggleDrawer} />
      <Logo />
      <UserIcon user={user} />
    </div>
  );
}

const MenuButton = ({ toggleDrawer }) => {
  return (
    <button className="text-primary" onClick={toggleDrawer(true)}>
      <MenuOutlinedIcon fontSize="medium" />
    </button>
  );
};

const UserIcon = ({ user }) => {
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
    <div>
      {user ? (
        <button className="text-primary text-sm" onClick={handleClick}>
          {user.username}
        </button>
      ) : (
        <AccountCircleOutlinedIcon fontSize="medium" />
      )}
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
        <div className="w-[95px] py-3 flex items-center justify-center">
          <SignOutBtnHolder handleClose={handleClose} />
        </div>
      </Popover>
    </div>
  );
};
