import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";

function EditModal({ getList, showEdit, purchase, setShowEdit }) {
  const [nameEdit, setNameEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState(0);
  const [weightEdit, setWeightEdit] = useState(0);

  const editPurchase = (idEdit) => {
    api
      .put(`/${idEdit}`, {
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

  useEffect(() => {
    setNameEdit(purchase.name);
    setPriceEdit(purchase.price);
    setWeightEdit(purchase.weight);
  }, [purchase]);

  return (
    <div className={showEdit ? "visible" : "invisible"}>
      <div className="pop-up">
        <label>Nome da ração</label>
        <input
          maxLength="30"
          placeholder="Nome"
          type="text"
          value={nameEdit}
          onChange={(event) => {
            setNameEdit(event.target.value);
          }}
        />
        <label>Preço da ração</label>
        <input
          maxLength="4"
          placeholder="Preço"
          type="number"
          value={priceEdit}
          onChange={(event) => {
            setPriceEdit(event.target.value);
          }}
        />
        <label>Peso da ração</label>
        <input
          maxLength="30"
          placeholder="Peso"
          type="number"
          value={weightEdit}
          onChange={(event) => {
            setWeightEdit(event.target.value);
          }}
        />
        <div className="button-box">
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
    </div>
  );
}

export default EditModal;
