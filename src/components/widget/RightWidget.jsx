import ReactSpeedometer from "react-d3-speedometer";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import "./RightWidget.scss";

const RightWidget = () => {
  return (
    <div className="right-widget">
      <div className="content">
        <span className="title">Processing</span>
        <div className="top-content">
          <span className="top-amt">43</span>
          <span className="top-text">unfulfilled orders</span>
          <PriorityHighRoundedIcon className="icon" />
        </div>
        <div className="center-content">
          <div className="center-text">Avg fulfilment time (past 7d)</div>
          <div className="meter">
            <ReactSpeedometer
              width={200}
              height={150}
              minValue={1}
              maxValue={10}
              ringWidth={30}
              value={6.2}
              needleColor="steelblue"
              needleTransitionDuration={4000}
              needleTransition="easeElastic"
              startColor="green"
              segments={10}
              endColor="red"
            />
          </div>
        </div>
        <div className="bottom-content">
          <span className="btm-value">23</span>
          <span className="btm-text">returns to be processed</span>
        </div>
      </div>
    </div>
  );
};

export default RightWidget;
