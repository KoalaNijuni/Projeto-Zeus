import React, { useState, useRef } from "react";
import api from "../../services/api";
import "./style.css";

function AddModal({ showAdd, setShowAdd, getList }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);

  const formRef = useRef();

  const addPurchase = (e) => {
    e.preventDefault();
    api
      .post("/create", {
        name: name,
        price: price,
        weight: weight,
      })
      .then(() => {
        setName();
        setPrice();
        setWeight();
        getList();
        formRef.current.reset();
      });
  };

  return (
    <div className={showAdd ? "visible" : "invisible"}>
      <form className="pop-up" ref={formRef}>
        <label>Qual ração você comprou?</label>
        <input
          maxLength="30"
          required="required"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Preço da ração</label>
        <input
          maxLength="4"
          required="required"
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>Peso da ração</label>
        <input
          maxLength="30"
          required="required"
          type="number"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <div className="button-box">
          <button
            onClick={(e) => {
              addPurchase(e);
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
        </div>
      </form>
    </div>
  );
}

export default AddModal;
