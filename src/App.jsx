import React from "react";
import Table from "./component/table";
import NavBar from "./component/navBar";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <NavBar />
      <Table />
      <ScrollToTop smooth />
    </>
  );
};

export default App;
