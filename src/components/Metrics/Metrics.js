import { useState, useEffect } from "react";
import { getMetrics } from "../../services/TodosServices";

const Metrics = ({ refresh }) => {
  const [totalAverage, setTotalAverage] = useState("-");
  const [totalLow, setTotalLow] = useState("-");
  const [totalMedium, setTotalMedium] = useState("-");
  const [totalHigh, setTotalHigh] = useState("-");

  useEffect(() => {
    getMetrics().then((data) => {
      setTotalAverage(data.data.total);
      setTotalLow(data.data.low);
      setTotalMedium(data.data.medium);
      setTotalHigh(data.data.high);
    });
  }, [refresh]);

  return (
    <div className="border m-2 p-2 row">
      <div className="col text-center">
        <p>Average time to finish tasks:</p>
        <br />
        <br />
        <p>{totalAverage}</p>
      </div>
      <div className="col">
        <p>Average time to finish tasks by priority:</p>
        <p>Low: {totalLow}</p>
        <p>Medium: {totalMedium}</p>
        <p>High: {totalHigh}</p>
      </div>
    </div>
  );
};

export default Metrics;
