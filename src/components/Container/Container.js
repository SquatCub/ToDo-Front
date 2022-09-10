const Container = (props) => {
  return (
    <div className="mx-auto border" style={{ width: "800px" }}>
      <div className="m-2">{props.children}</div>
    </div>
  );
};

export default Container;
