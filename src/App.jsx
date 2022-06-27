import React, { useState, useEffect } from "react";
import Table from "./component/table";
import NavBar from "./component/navBar";
import axios from "axios";
const App = () => {
  const handleGetCurrency = async () => {
    const { data } = await axios.get(
      "https://api.accessban.com/v1/data/sana/json"
    );
    console.log("currency", data);
  };
  return (
    <>
      <NavBar />
      <Table />
      <button onClick={handleGetCurrency} className="btn btn-sm btn-primary">
        Get Currency
      </button>
    </>
  );
};

export default App;
