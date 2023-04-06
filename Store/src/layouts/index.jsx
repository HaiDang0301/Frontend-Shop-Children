import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function DefaultLayout({ children }) {
  return (
    <div className="wapper" style={{ backgroundColor: "rgb(20 20 20)" }}>
      <Header></Header>
      <div className="children">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
