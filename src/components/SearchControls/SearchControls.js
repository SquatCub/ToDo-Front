const SearchControls = ({ searchState, dispatchState, refresh }) => {
  const formHandler = (e) => {
    e.preventDefault();
    refresh();
  };

  const nameChangeHandler = (event) => {
    dispatchState({ type: "INPUT_NAME", val: event.target.value });
  };
  const priorityChangeHandler = (event) => {
    dispatchState({ type: "INPUT_PRIORITY", val: event.target.value });
  };
  const stateChangeHandler = (event) => {
    dispatchState({ type: "INPUT_STATE", val: event.target.value });
  };

  return (
    <form onSubmit={formHandler} className="p-3 border">
      <div className="m-2">
        <div className="row">
          <label className="col-2">Name</label>
          <input
            className="col-10"
            placeholder="Enter name here"
            value={searchState.nameInput}
            onChange={nameChangeHandler}
          />
        </div>
      </div>
      <div className="m-2">
        <div className="row">
          <label className="col-2">Priority</label>
          <select
            className="col-3"
            value={searchState.priorityInput}
            onChange={priorityChangeHandler}
          >
            <option key={"All"} value={""}>
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
          <select
            className="col-3"
            value={searchState.stateInput}
            onChange={stateChangeHandler}
          >
            <option key={"All"} value={""}>
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
