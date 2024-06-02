import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";

const errorText = `We couldn't find a row to display`;

export default function NotFound() {
  return (
    <div className="w-full px-6 py-20 flex items-center justify-center lg:px-0">
      <div className="text-gray1 flex flex-col items-center justify-center gap-4 lg:px-0">
        <TableRowsOutlinedIcon fontSize="large" />
        <p className="text-[14px] text-center">{errorText}</p>
      </div>
    </div>
  );
}
