import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";

export default function NotFound() {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell
        component="th"
        scope="row"
        sx={{
          fontSize: "13px",
          color: "rgba(36,39,44,.7)",
          whiteSpace: "nowrap",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TableRowsOutlinedIcon fontSize="large" />
        No rows found
      </TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
      <TableCell component="th" scope="row"></TableCell>
    </TableRow>
  );
}
