import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Header from "./header";
import Main from "./main/main";

export default function FilterModal(props) {
  const {
    showFilterModal,
    dispatch,
    carType,
    carSpecifications,
    carPrice,
    carCapacity,
    handleCarTypeValueChange,
    handleSpecificationValueChange,
    handlePriceValueChange,
    handleCapacityValueChange,
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={showFilterModal}
      onClose={() => dispatch({ type: "SHOW_FILTER_MODAL", payload: false })}
      aria-labelledby="responsive-dialog-title"
      sx={{
        ".MuiDialogContent-root": {
          padding: 0,
          width: "100%",
          minWidth: "500px",
          // minHeight: "550px",
          // maxHeight: "100vh",
          // overflowY: "hidden",
          // flex: "0 1 auto",
          // position: "relative",
        },
      }}
    >
      <DialogContent>
        <Header dispatch={dispatch} />
        <Main
          carType={carType}
          carSpecifications={carSpecifications}
          carPrice={carPrice}
          carCapacity={carCapacity}
          handleCarTypeValueChange={handleCarTypeValueChange}
          handleSpecificationValueChange={handleSpecificationValueChange}
          handlePriceValueChange={handlePriceValueChange}
          handleCapacityValueChange={handleCapacityValueChange}
        />
      </DialogContent>
    </Dialog>
  );
}
