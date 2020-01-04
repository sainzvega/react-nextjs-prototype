import Link from "next/link";

const headerStyle = {
  border: "1px solid red",
  backgroundColor: "black",
  color: "white",
  height: "30px"
};

const linkStyle = {
  marginRight: "10px"
};

export function Header() {
  return (
    <header style={headerStyle}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>Go To About</a>
      </Link>
      <Link href="/blog">
        <a style={linkStyle}>Go To Blog</a>
      </Link>
    </header>
  );
}
