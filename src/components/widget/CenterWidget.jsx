import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CustomTooltip from "../custom/CustomTooltip";
import "./CenterWidget.scss";

const CenterWidget = ({ title, data, review }) => {
  return (
    <div className="center-widget">
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="chart">
        <BarChart
          width={600}
          height={220}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="grid" />
          <XAxis dataKey="time" stroke="grey" padding={{ right: 0, left: 0 }} />
          <YAxis stroke="grey" />
          <Tooltip
            content={<CustomTooltip review={review} />}
            cursor={{ fill: "transparent" }}
          />
          <Legend />
          <Bar dataKey="orders" barSize={5} fill="#4089f6" />
          <Bar dataKey="canceled" barSize={5} fill="#d4dc38" />
        </BarChart>
      </div>
    </div>
  );
};

export default CenterWidget;
