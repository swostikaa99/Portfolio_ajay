import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow mt-20">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
