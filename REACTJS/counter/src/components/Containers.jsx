import React from "react";
import { Header, Footer } from "./";

function Containers({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Containers;
