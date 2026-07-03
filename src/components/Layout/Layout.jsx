import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="site">
      <div className="page-container">
        <Header />

        <main className="main-layout">
          <Sidebar />
          <section className="content-box">{children}</section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;