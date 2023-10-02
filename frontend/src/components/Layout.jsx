/* eslint-disable react/prop-types */

import Navbar from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto my-auto p-2 bg-gray-100 h-screen">
      <Navbar/>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
