import "../styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function TabContent(props) {
  const { title, text, isExpanded, onExpand, onCollapse } = props;

  const previewLength = 30;
  const previewText = `${text.substring(0, previewLength)}${
    text.length > previewLength ? "..." : ""
  }`;

  return (
    <div className="w-full px-3 py-3 flex flex-row items-start justify-center">
      <div
        className={`flex-1 flex flex-col items-center justify-center gap-2 text-container`}
      >
        <div className="w-full text-left">
          <p className="font-semibold text-[15px] text-primary">{title}</p>
        </div>
        <div
          className={`w-full text-left max-h[${isExpanded ? "150px" : "50px"}]`}
        >
          <p className="text-[13px] text-gray1">
            {isExpanded ? text : previewText}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center">
        {!isExpanded ? (
          <button
            className="flex flex-row items-start justify-center text-gray2"
            onClick={onExpand}
          >
            <KeyboardArrowDownOutlinedIcon fontSize="small" />
          </button>
        ) : (
          <button
            className="flex flex-row items-start justify-center text-gray2"
            onClick={onCollapse}
          >
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
          </button>
        )}
      </div>
    </div>
  );
}
