import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Header from "./header";
import Main from "./main/main";

export default function FilterModal(props) {
  const {
    showFilterModal,
    setShowFilterModal,
    params,
    setParams,
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
        <Header
          params={params}
          setParams={setParams}
          setShowFilterModal={setShowFilterModal}
        />
        <Main
          setShowFilterModal={setShowFilterModal}
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
