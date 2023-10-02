/* eslint-disable react/prop-types */

import Footer from "./Footer";
import Navbar from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto my-auto p-2 bg-gray-100">
      <Navbar/>
      <div className="h-screen">{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
