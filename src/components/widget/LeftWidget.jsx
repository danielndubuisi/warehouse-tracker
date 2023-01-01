import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./LeftWidget.scss";

const LeftWidget = ({ type }) => {
  let data;

  switch (type) {
    case "Present":
      data = {
        title: "Today",
        orders: "137",
        orderDeficit: 35,
        trend: "same day last week",
        revenue: 911.8,
        revenueDeficit: 64.8,
      };
      break;
    case "Past":
      data = {
        title: "Past 30 days",
        orders: "2,822",
        orderDeficit: 834,
        trend: "last month",
        revenue: 448.7,
        revenueDeficit: 132.6,
      };
      break;
    default:
      break;
  }
  return (
    <div className="left-widget">
      <div className="lw-top">
        <span className="title">{data.title}</span>
      </div>
      <div className="lw-center">
        <div className="content">
          <span className="content-header">{data.orders}</span>
          <span> Orders</span>
        </div>
        <div className="extra">
          <KeyboardArrowDownOutlinedIcon className="icon" />
          <span className="disc">
            <span className="text"> {data.orderDeficit} </span>
            vs {data.trend}
          </span>
        </div>
      </div>
      <div className="lw-bottom">
        <div className="content">
          <span className="content-header">₦{data.revenue}k</span>
          <span> Revenue</span>
        </div>
        <div className="extra">
          <KeyboardArrowUpOutlinedIcon className="icon" />
          <span className="disc">
            <span className="text"> {data.revenueDeficit}</span> vs {data.trend}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftWidget;
