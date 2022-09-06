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
          <select className="col-3">
            <option selected>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
      <div className="m-2">
        <div className="row">
          <label className="col-2">State</label>
          <select className="col-3">
            <option selected>All</option>
            <option>Done</option>
            <option>Undone</option>
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
