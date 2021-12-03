import "./style.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
// import { format } from "date-fns";

import AddModal from "../../components/AddModal/index";
import Table from "../../components/Table/index";

function InitialPage() {
  const [showAdd, setShowAdd] = useState(false);

  const [entry, setEntry] = useState([]);

  const [priceSum, setPriceSum] = useState(0);
  const [weightSum, setWeightSum] = useState(0);

  useEffect(() => {
    api.get("/").then((response) => {
      setEntry(response.data.reverse());
    });
    api.get("/priceSum").then((response) => {
      setPriceSum(response.data.total);
    });
    api.get("/weightSum").then((response) => {
      setWeightSum(response.data.total);
    });
  }, []);

  const getList = () => {
    api.get("/").then((response) => {
      setEntry(response.data.reverse());
    });
    api.get("/priceSum").then((response) => {
      setPriceSum(response.data.total);
    });
    api.get("/weightSum").then((response) => {
      setWeightSum(response.data.total);
    });
  };

  return (
    <div className="App">
      <AddModal showAdd={showAdd} setShowAdd={setShowAdd} getList={getList} />

      <div className="header">
        <h1>Zeus Pet Expenses</h1>
      </div>

      <div className="info-boxes">
        <div className="box">
          <h2>Gastos totais:</h2>
          <p>R${priceSum}</p>
        </div>
        <div className="box">
          <h2>Total de ração:</h2>
          <p>{weightSum}kg</p>
        </div>
      </div>
      <div className="add-box">
        <button
          className="add-button"
          onClick={() => {
            setShowAdd(true);
          }}
        >
          Adicionar compra
        </button>
      </div>

      <Table entry={entry} getList={getList} />
    </div>
  );
}

export default InitialPage;
