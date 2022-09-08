const PaginationControls = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${props.page === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => props.setPage((page) => page - 1)}
          >
            Previous
          </button>
        </li>
        {[...Array(Math.round(props.size / 10) + 1)].map((e, i) => {
          return (
            <li className={`page-item ${i + 1 === props.page ? "active" : ""}`}>
              <a className="page-link">{i + 1}</a>
            </li>
          );
        })}
        <li
          className={`page-item ${
            props.page * 10 > props.size ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => props.setPage((page) => page + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationControls;
