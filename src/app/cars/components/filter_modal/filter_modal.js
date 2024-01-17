import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Header from "./header";
import Main from "./main/main";

export default function FilterModal(props) {
  const {
    showFilterModal,
    params,
    setParams,
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
        },
      }}
    >
      <DialogContent>
        <Header dispatch={dispatch} params={params} setParams={setParams} />
        <Main
          dispatch={dispatch}
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
