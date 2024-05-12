import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function RowsAvailable(props) {
  const { filteredValues, handleClick } = props;

  return (
    <>
      {filteredValues.map((obj) => (
        <TableRow
          key={obj._id}
          onClick={() => handleClick(obj._id)}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            cursor: "pointer",
          }}
        >
          {Object.entries(obj).map((field, index) => {
            // check if field is id, shorten it
            if (field[0] === "_id") {
              return (
                <TableCell
                  key={index}
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "13px",
                    color: "rgba(36,39,44,.7)",
                  }}
                >
                  {`${field[1].slice(0, 8)}...`}
                </TableCell>
              );
            }

            // check if field is an array
            if (Array.isArray(field[1])) {
              return (
                <TableCell
                  key={index}
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "13px",
                    color: "rgba(36,39,44,.7)",
                  }}
                >
                  {field[1].length}
                </TableCell>
              );
            }

            // check if field is a boolean
            if (typeof field[1] === "boolean") {
              return (
                <TableCell
                  key={index}
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "13px",
                    color: "rgba(36,39,44,.7)",
                  }}
                >
                  {field[1].toString()}
                </TableCell>
              );
            }

            return (
              <TableCell
                key={index}
                component="th"
                scope="row"
                sx={{
                  fontSize: "13px",
                  color: "rgba(36,39,44,.7)",
                }}
              >
                {field[1]}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
}
