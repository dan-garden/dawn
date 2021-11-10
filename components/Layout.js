import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
