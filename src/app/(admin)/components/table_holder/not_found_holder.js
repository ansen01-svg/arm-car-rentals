import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";

export default function NotFound({ tableHeadValues }) {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      {tableHeadValues.map((value, index) => {
        const even = tableHeadValues.length % 2 === 0;

        // if length is even
        if (even && index === tableHeadValues.length / 2 - 1) {
          return (
            <TableCell
              key={value.id}
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
          );
        }

        // if length is odd
        if (!even && index === Math.floor(tableHeadValues.length / 2)) {
          return (
            <TableCell
              key={value.id}
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
          );
        }

        return (
          <TableCell key={value.id} component="th" scope="row"></TableCell>
        );
      })}
    </TableRow>
  );
}
