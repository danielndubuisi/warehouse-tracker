import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./CenterWidget.scss";

const CenterWidget = ({ title, data }) => {
  return (
    <div className="center-widget">
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="chart">
        <BarChart
          width={500}
          height={235}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="grid" />
          <XAxis dataKey="time" stroke="#ddd" />
          <YAxis stroke="#ddd" />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" barSize={10} fill="#4089f6" />
          <Bar dataKey="canceled" barSize={10} fill="#d4dc38" />
        </BarChart>
      </div>
    </div>
  );
};

export default CenterWidget;
