import { useState, useEffect, useContext } from "react";
import { getMetrics } from "../../utils/services/TodosServices";
import TodoContext from "../../utils/context/todo-context";

const Metrics = () => {
  const ctx = useContext(TodoContext);

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
  }, [ctx.refresh]);

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
