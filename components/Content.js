const contentStyle = {
  height: "100vh",
  marginBottom: "30px"
};

export function Content({ children }) {
  return <main style={contentStyle}>{children}</main>;
}
