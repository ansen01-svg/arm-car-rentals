import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AdminButton from "@/app/(admin)/components/button/button";
import UnappliedFilters from "./unapplied_filters";
import AppliedFilters from "./applied_filters";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DialogBox(props) {
  const {
    open,
    handleClose,
    filters,
    confirmFilters,
    availableFilters,
    handleAppliedFiltersBtnClick,
    handleCancelBtnClick,
    handleAvailableFiltersBtnClick,
    clearFilters,
  } = props;

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        ".MuiPaper-root": {
          minWidth: "435px",
        },
      }}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, fontSize: "16px", color: "#24272c", fontWeight: 600 }}
        id="customized-dialog-title"
      >
        Edit Filters
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "#24272c",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <UnappliedFilters
          availableFilters={availableFilters}
          handleAvailableFiltersBtnClick={handleAvailableFiltersBtnClick}
        />
        {filters.length > 0 && (
          <AppliedFilters
            filters={filters}
            clearFilters={clearFilters}
            handleAppliedFiltersBtnClick={handleAppliedFiltersBtnClick}
          />
        )}
      </DialogContent>
      <DialogActions>
        <button
          className="px-4 py-2 bg-primary text-primary text-[13px] font-semibold rounded-full hover:bg-slate-200"
          onClick={handleCancelBtnClick}
        >
          Cancel
        </button>
        <AdminButton title={"Confirm"} handleClick={confirmFilters} />
      </DialogActions>
    </BootstrapDialog>
  );
}
