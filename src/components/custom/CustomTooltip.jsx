import "./CustomTooltip.scss";

const CustomTooltip = ({ active, payload, label, review }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {review ? `${label}:00 - 30 Dec 2022` : `${label} 2022`}
        </p>
        <hr />
        <div>
          {payload.map((pld) => (
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "end",
                  color: pld.fill,
                }}
              >
                {pld.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
