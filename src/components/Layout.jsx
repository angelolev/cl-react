import React from "react";
import Nav from "./commons/Nav/Nav";
import Footer from "./commons/Footer/Footer";

const Layout = ({ children }) => (
  <div className="app">
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
