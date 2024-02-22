export default function Button({ children, ...props }) {
  const style = {
    // background: "none",
    border: "none",
    padding: "8px",
    margin: "0",
    backgroundColor: "#000",
    color: "#fff",
  };

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
}
