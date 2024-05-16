import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import CarsAvailable from "./rows_available_holder";
import NotFound from "./not_found_holder";

export default function TableHolder(props) {
  const { filteredValues, tableHeadValues, handleTableRowClick } = props;

  return (
    <div className="w-full px-6 py-4 lg:px-0">
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          borderRadius: "0",
          border: "1px solid rgb(226 232 240)",
          // background: "rgb(247, 247, 247)",
        }}
      >
        <Table sx={{ width: "100%", minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ width: "100%" }}>
            <TableRow>
              {tableHeadValues.map((value) => {
                return (
                  <TableCell
                    key={value.id}
                    sx={{
                      fontWeight: "bold",
                      fontSize: "11px",
                      color: "rgba(36,39,44,.7)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {value.value}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredValues.length < 1 ? (
              <NotFound tableHeadValues={tableHeadValues} />
            ) : (
              <CarsAvailable
                filteredValues={filteredValues}
                handleClick={handleTableRowClick}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
