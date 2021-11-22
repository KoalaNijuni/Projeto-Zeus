import "./style.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { format } from "date-fns";
import PurchaseCamp from "../../components/PurchaseCamp/index";

//import CurrencyInput from "./components/CurrencyInput";

function InitialPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState(0);
  const [weightEdit, setWeightEdit] = useState(0);
  const [purchase, setPurchase] = useState();
  const [show, setShow] = useState(false);
  const [entry, setEntry] = useState([]);
  const [priceSum, setPriceSum] = useState(0);
  const [weightSum, setWeightSum] = useState(0);

  const addPurchase = () => {
    Axios.post("http://localhost:3002/create", {
      name: name,
      price: price,
      weight: weight,
    }).then(() => {
      window.location.reload();
      console.log(entry);
    });
  };

  const editPurchase = (id) => {
    Axios.put(`http://localhost:3002/editByID/${id}`, {
      name: nameEdit,
      price: priceEdit,
      weight: weightEdit,
    }).then(() => {
      window.location.reload();
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3002/getAll").then((response) => {
      setEntry(response.data);
    });
    Axios.get("http://localhost:3002/sum").then((response) => {
      setPriceSum(response.data.total);
    });
    Axios.get("http://localhost:3002/weightSum").then((response) => {
      setWeightSum(response.data.total);
    });
  }, []);

  return (
    <div className="App">
      <div className={show ? "visible" : "invisible"}>
        <div className="pop-up">
          <label>Nome da ração</label>
          <input
            placeholder="Nome"
            type="text"
            value={nameEdit}
            onChange={(event) => {
              setNameEdit(event.target.value);
            }}
          />
          <label>Preço da ração</label>
          <input
            placeholder="Preço"
            type="number"
            value={priceEdit}
            onChange={(event) => {
              setPriceEdit(event.target.value);
            }}
          />
          <label>Peso da ração</label>
          <input
            placeholder="Peso"
            type="number"
            value={weightEdit}
            onChange={(event) => {
              setWeightEdit(event.target.value);
            }}
          />
          <button
            onClick={() => {
              setShow(false);
              editPurchase(purchase._id);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
      <div className="header">
        <h1>Zeus Pet Expenses</h1>
        <div className="info-boxes">
          <div className="caixa">
            <h2>Gastos totais:</h2>
            <p>R${priceSum}</p>
          </div>
          <div className="caixa">
            <h2>Total de ração:</h2>
            <p>{weightSum}kg</p>
          </div>
        </div>
      </div>
      <div className="info">
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
        <label>Quantos quilos?</label>
        <input
          required="required"
          type="number"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <button onClick={addPurchase}>Submit</button>
      </div>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Ração</th>
              <th>Preço</th>
              <th>Peso</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {entry.map((purchase) => (
              <tr>
                <td>{purchase.name}</td>
                <td>R${purchase.price}</td>
                <td>{purchase.weight}kg</td>
                <td>
                  {format(Date.parse(purchase.createdAt), "dd/MM/yyyy HH:mm")}
                </td>
                <td>
                  <button
                    onClick={() => {
                      setPurchase(purchase);
                      setNameEdit(purchase.name);
                      setPriceEdit(purchase.price);
                      setWeightEdit(purchase.weight);
                      setShow(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      Axios.delete(
                        `http://localhost:3002/deleteID/${purchase._id}`
                      );
                      window.location.reload();
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="list">
        {entry.map((purchase) => (
          <PurchaseCamp props={purchase} />
        ))}
      </div>
    </div>
  );
}

export default InitialPage;
