import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  // Sao chỗ này k phải là const gameItem = { url, name}
  return (
    <img
      onClick={() => {
        // Đây là truyền cái parameter bên trên chứ không phải truyền global function vào
        handleGameItemChange(gameItem);
      }}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
