import "./style.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
// import { format } from "date-fns";

import AddModal from "../../components/AddModal/index";
import EditModal from "../../components/EditModal/index";
import Table from "../../components/Table/index";

function InitialPage() {
  const [purchase, setPurchase] = useState({});

  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [entry, setEntry] = useState([]);

  const [priceSum, setPriceSum] = useState(0);
  const [weightSum, setWeightSum] = useState(0);

  useEffect(() => {
    api.get("/getAll").then((response) => {
      setEntry(response.data);
    });
    api.get("/sum").then((response) => {
      setPriceSum(response.data.total);
    });
    api.get("/weightSum").then((response) => {
      setWeightSum(response.data.total);
    });
  }, []);

  const getList = () => {
    api.get("/getAll").then((response) => {
      setEntry(response.data);
    });
    api.get("/sum").then((response) => {
      setPriceSum(response.data.total);
    });
    api.get("/weightSum").then((response) => {
      setWeightSum(response.data.total);
    });
  };

  return (
    <div className="App">
      <EditModal
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        getList={getList}
        purchase={purchase}
      />
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

      <button
        className="add-button"
        onClick={() => {
          setShowAdd(true);
        }}
      >
        Adicionar compra
      </button>

      <Table
        entry={entry}
        getList={getList}
        setShowEdit={setShowEdit}
        setPurchase={setPurchase}
      />

      {/* <form className="form" ref={formRef}>
        <label>Qual ração você comprou?</label>
        <input
          required="required"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Quanto custou??</label>
        <input
          required="required"
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>Quant  os quilos?</label>
        <input
          required="required"
          type="number"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <button onClick={addPurchase}>Submit</button>
      </form>
      */}
    </div>
  );
}

export default InitialPage;
