import React from "react";
import ChoiceCard from "./ChoiceCard";

function Choices({ gameItems, handleGameItemChange }) {
  return (
    <div>
      <h2 className="choices-title">Choices</h2>
      <div className="choices">
        {gameItems.map((gameItem) => (
          <ChoiceCard
            // Không hiểu syntax chỗ này lắm, là mình gọi function ChoiceCard để return cái thẻ img với các thông tin bên dưới? Vậy cái gameItem.id lưu ở đâu?
            key={gameItem.id}
            gameItem={gameItem}
            // Ở đây phải có parameter này vì handleGameItemChange k phải function global?
            handleGameItemChange={handleGameItemChange}
          />
        ))}
      </div>
    </div>
  );
}

export default Choices;
