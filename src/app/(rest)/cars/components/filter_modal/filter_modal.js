import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Header from "./header";
import Main from "./main/main";

export default function FilterModal(props) {
  const { filters, showFilterModal, setShowFilterModal, handleFilterChange } =
    props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={showFilterModal}
      onClose={() => setShowFilterModal(false)}
      aria-labelledby="responsive-dialog-title"
      sx={{
        ".MuiDialogContent-root": {
          padding: 0,
          width: "100%",
          minWidth: "500px",
        },
      }}
    >
      <DialogContent>
        <Header setShowFilterModal={setShowFilterModal} />
        <Main
          filters={filters}
          setShowFilterModal={setShowFilterModal}
          handleFilterChange={handleFilterChange}
        />
      </DialogContent>
    </Dialog>
  );
}
