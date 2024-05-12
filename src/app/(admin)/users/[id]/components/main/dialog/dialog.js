import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

export default function DialogBox(props) {
  const { open, handleClose, deleteRow, disableBtn } = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-delete-row"
        aria-describedby="alert-delete-row"
        sx={{
          ".MuiPaper-root": {
            maxWidth: "500px",
          },
          ".MuiTypography-root": {
            fontSize: "15px",
            color: "#000",
          },
          ".MuiDialogActions-root": {
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            "& :not(style)": {
              marginLeft: 0,
            },
          },
        }}
      >
        {/* <IconButton
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
        </IconButton> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to Delete this row?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className="w-[70%] py-[6px] bg-secondary text-[white] text-[13px] font-semibold rounded hover:bg-secondaryLight disabled:bg-secondaryLight"
            disabled={disableBtn}
            onClick={deleteRow}
          >
            Delete row
          </button>
          <button
            className="w-[70%] py-[6px] text-primary text-[13px] font-semibold rounded hover:bg-primary"
            onClick={handleClose}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
