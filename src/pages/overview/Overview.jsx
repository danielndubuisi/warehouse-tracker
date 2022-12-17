import "./Overview.scss";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import Timer from "../../components/timer/Timer";
import LeftWidget from "../../components/widget/LeftWidget";
import CenterWidget from "../../components/widget/CenterWidget";
// import RightWidget from "../../components/widget/RightWidget";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-top">
        <div className="top-left">
          <WebhookOutlinedIcon className="icon" />
          <h3>Operations Tracker</h3>
          <span className="text">Powered by DrugStoc</span>
        </div>
        <Timer />
      </div>
      <div className="overview-center">
        <div className="center-left">
          <LeftWidget type="Present" />
          <LeftWidget type="Past" />
        </div>
        <div className="center-chart">
          <CenterWidget />
          {/* <CenterWidget type="Present" /> */}
        </div>
        {/* <div className="center-right">
          <RightWidget />
        </div>  */}
      </div>
    </div>
  );
};

export default Overview;
