import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
