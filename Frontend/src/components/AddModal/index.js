import React, { useState, useRef } from "react";
import api from "../../services/api";
import "./style.css";

function AddModal({ showAdd, setShowAdd, getList }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);

  const formRef = useRef(null);

  const addPurchase = () => {
    api
      .post("/create", {
        name: name,
        price: price,
        weight: weight,
      })
      .then(() => {
        getList();
      });
  };

  return (
    <div className={showAdd ? "visible" : "invisible"}>
      <form className="pop-up">
        <label>Qual ração você comprou?</label>
        <input
          required="required"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Preço da ração</label>
        <input
          required="required"
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>Peso da ração</label>
        <input
          required="required"
          type="number"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <button
          onClick={() => {
            addPurchase();
            setShowAdd(false);
          }}
        >
          Adicionar
        </button>
        <button
          onClick={() => {
            setShowAdd(false);
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default AddModal;
