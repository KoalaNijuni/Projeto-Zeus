import React from "react";
import Axios from "axios";
import "./Modal.css";

const Modal = ({ props }) => {
  const editPurchase = (id) => {
    Axios.put(`http://localhost:3002/editByID/${id}`, {
      name: props.nameEdit,
      price: props.priceEdit,
      weight: props.weightEdit,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="modal">
      <div className="container">
        <label>Nome da ração</label>
        <input
          placeholder="Nome"
          type="text"
          value={props.nameEdit}
          onChange={(event) => {
            props.setNameEdit(event.target.value);
          }}
        />
        <label>Preço da ração</label>
        <input
          placeholder="Preço"
          type="number"
          value={props.priceEdit}
          onChange={(event) => {
            props.setPriceEdit(event.target.value);
          }}
        />
        <label>Peso da ração</label>
        <input
          placeholder="Peso"
          type="number"
          value={props.weightEdit}
          onChange={(event) => {
            props.setWeightEdit(event.target.value);
          }}
        />
        <button
          onClick={() => {
            props.setShowModal(false);
            editPurchase(props.purchase._id);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            props.setShowModal(false);
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Modal;
