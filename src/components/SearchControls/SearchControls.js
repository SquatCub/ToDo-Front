import { Priorities, States } from "../../utils/constants";

const SearchControls = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={formHandler} className="p-3 border">
      <div className="m-2">
        <div className="row">
          <label className="col-2">Name</label>
          <input className="col-10" placeholder="Enter name here" />
        </div>
      </div>
      <div className="m-2">
        <div className="row">
          <label className="col-2">Priority</label>
          <select defaultValue={0} className="col-3">
            <option key={"All"} value={"All"}>
              {"All"}
            </option>
            <option key={"Low"} value={"Low"}>
              {"Low"}
            </option>
            <option key={"Medium"} value={"Medium"}>
              {"Medium"}
            </option>
            <option key={"High"} value={"High"}>
              {"High"}
            </option>
          </select>
        </div>
      </div>
      <div className="m-2">
        <div className="row">
          <label className="col-2">State</label>
          <select defaultValue={0} className="col-3">
            <option key={"All"} value={"All"}>
              {"All"}
            </option>
            <option key={"Done"} value={"Done"}>
              {"Done"}
            </option>
            <option key={"Undone"} value={"Undone"}>
              {"Undone"}
            </option>
          </select>
        </div>
      </div>
      <div className="text-end">
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchControls;
