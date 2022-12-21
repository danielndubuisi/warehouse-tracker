import { useFetch } from "../../hooks/useFetch";
import Spinner from "../../components/spinner/Spinner";
import "./Overview.scss";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import Timer from "../../components/timer/Timer";
import LeftWidget from "../../components/widget/LeftWidget";
import CenterWidget from "../../components/widget/CenterWidget";
// import RightWidget from "../../components/widget/RightWidget";

const Overview = () => {
  const url = "http://localhost:3000/chartData/";
  const { error, isPending, data: chartData } = useFetch(url);

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
          <div className="top-chart">
            {error && <p className="error">{error}</p>}
            {isPending && <Spinner />}
            {chartData && (
              <CenterWidget title="Orders today" data={chartData.dailyData} />
            )}
          </div>
          <div className="top-chart">
            {error && <p className="error">{error}</p>}
            {isPending && <Spinner />}
            {chartData && (
              <CenterWidget
                title="Orders this month"
                data={chartData.monthlyData}
              />
            )}
          </div>
        </div>
        {/* <div className="center-right">
          <RightWidget />
        </div>  */}
      </div>
    </div>
  );
};

export default Overview;
