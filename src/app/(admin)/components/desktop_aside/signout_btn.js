import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function SignOutBtnHolder({ handleClose }) {
  // sign out
  const signOut = async () => {
    handleClose();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/signout`,
        { cache: "no-store" }
      );

      if (response.status === 200) {
        // handleClose();
        sessionStorage.clear();
        window.location.reload();
      } else {
        const data = await response.json();
        console.log(data);
        // handleClose();
        return;
      }
    } catch (error) {
      console.log(error);
      // handleClose();
    }
  };

  return (
    <div className="w-full px-5 text-[14px]">
      <button
        className="flex items-center justify-start gap-2"
        onClick={signOut}
      >
        <LogoutOutlinedIcon
          fontSize="small"
          sx={{ color: "rgba(36,39,44,.7)" }}
        />
        Sign out
      </button>
    </div>
  );
}

export default SignOutBtnHolder;
