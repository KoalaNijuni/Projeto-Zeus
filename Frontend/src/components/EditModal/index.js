import React, { useState } from "react";
import api from "../../services/api";
import "./style.css";

function EditModal({ showEdit, setShowEdit, getList, purchase }) {
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState(0);
  const [weightEdit, setWeightEdit] = useState(0);

  const editPurchase = (idEdit) => {
    api
      .put(`http://localhost:3002/editByID/${idEdit}`, {
        name: nameEdit,
        price: priceEdit,
        weight: weightEdit,
      })
      .then(() => {
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={showEdit ? "visible" : "invisible"}>
      <div className="pop-up">
        <label>Nome da ração</label>
        <input
          placeholder="Nome"
          type="text"
          defaultValue={purchase.name}
          onChange={(event) => {
            setNameEdit(event.target.value);
          }}
        />
        <label>Preço da ração</label>
        <input
          placeholder="Preço"
          type="number"
          value={purchase.price}
          onChange={(event) => {
            setPriceEdit(event.target.value);
          }}
        />
        <label>Peso da ração</label>
        <input
          placeholder="Peso"
          type="number"
          value={purchase.weight}
          onChange={(event) => {
            setWeightEdit(event.target.value);
          }}
        />
        <button
          onClick={() => {
            editPurchase(purchase._id);
            setShowEdit(false);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            setShowEdit(false);
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default EditModal;
