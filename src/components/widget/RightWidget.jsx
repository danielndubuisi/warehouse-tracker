import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./RightWidget.scss";

const RightWidget = () => {
  return (
    <div className="right-widget">
      <div className="top">
        <span>Right widget</span>
      </div>
      <div className="center">
        <h3>213</h3>
        <span>Orders</span>
        <KeyboardArrowDownOutlinedIcon className="icon" />
        <span>200 50</span>
      </div>
      <div className="bottom">
        <h3>₦200k</h3>
        <span>Revenue</span>
        <KeyboardArrowUpOutlinedIcon className="icon" />
        <span>2039 300</span>
      </div>
    </div>
  );
};

export default RightWidget;
