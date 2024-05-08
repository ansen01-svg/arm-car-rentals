import { useRouter } from "next/navigation";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function CarsAvailable({ filteredCars }) {
  const router = useRouter();

  return (
    <>
      {filteredCars.map((obj) => (
        <TableRow
          key={obj._id}
          onClick={() => router.push(`/fleet/${obj._id}`)}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            cursor: "pointer",
          }}
        >
          {Object.values(obj).map((field, index) => {
            return (
              <TableCell
                key={index}
                component="th"
                scope="row"
                sx={{
                  fontSize: "13px",
                  color: "rgba(36,39,44,.7)",
                  // whiteSpace: "nowrap",
                }}
              >
                {field.toString().includes("6638")
                  ? `${field.toString().slice(0, 8)}...`
                  : field}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
}
