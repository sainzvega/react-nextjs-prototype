const footerStyle = {
  border: "1px solid red",
  height: "30px",
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "black",
  color: "white"
};

export function Footer() {
  return <footer style={footerStyle}>This is the footer</footer>;
}
