import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0);
  const [entry, setEntry] = useState([]);
  //const [isUpdate, setIsUpdate] = useState(false);

  const addPurchase = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      price: price,
      quantity: quantity,
      weight: weight,
    }).then(() => {
      console.log("Purchase created");
      window.location.reload();
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getAll").then((response) => {
      setEntry(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="projectName">Projeto Zeus</h1>
      <div className="info">
        <label>Qual ração você comprou?</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Quanto custou??</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>Quantos pacotes?</label>
        <input
          type="number"
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />
        <label>Quantos quilos?</label>
        <input
          type="number"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <button onClick={addPurchase}>Submit</button>
        <button onClick={() => {}}>Editar</button>
      </div>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Ração</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Peso em Kg</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {entry.map((purchase) => (
              <tr>
                <th>{purchase.name}</th>
                <th>{purchase.price}</th>
                <th>{purchase.quantity}</th>
                <th>{purchase.weight}</th>
                <th>
                  <button>Edit</button>
                  <button
                    onClick={() => {
                      Axios.delete(
                        `http://localhost:3001/deleteID/${purchase._id}`
                      );
                      window.location.reload();
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
