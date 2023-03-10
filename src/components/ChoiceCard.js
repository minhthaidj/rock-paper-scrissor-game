import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  // Sao chỗ này k phải là const gameItem = { url, name}
  return (
    <img
      onClick={() => {
        handleGameItemChange(gameItem);
      }}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
