import React from "react";
import "./style.css";
import { format } from "date-fns";
const PurchaseCamp = ({ props }) => {
  return (
    <div className="divCompra">
      <p className="name">{props.name}</p>
      <p className="price">R${props.price}</p>
      <p className="weight">{props.weight}kg</p>
      <p className="Date">
        {format(Date.parse(props.createdAt), "dd/MM/yyyy HH:mm")}
      </p>
    </div>
  );
};

export default PurchaseCamp;
