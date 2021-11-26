import React from "react";
import { format } from "date-fns";
import api from "../../services/api";

// import { Container } from './styles';

function Table({ entry = [], getList, setShowEdit, setPurchase }) {
  return (
    <div className="list">
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
            <tr key={purchase._id}>
              <td>{purchase.name}</td>
              <td>R${purchase.price}</td>
              <td>{purchase.weight}kg</td>
              <td>
                {format(Date.parse(purchase.createdAt), "dd/MM/yyyy HH:mm")}
              </td>
              <td className="action-buttons">
                <button
                  className="button edit-button"
                  onClick={() => {
                    setPurchase(purchase);
                    setShowEdit(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="button delete-button"
                  onClick={() => {
                    api.delete(`/deleteID/${purchase._id}`).then(() => {
                      getList();
                    });
                  }}
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
