import React, { useState, useEffect } from "react";
import Result from "./Result";
import Display from "./Display";
import Choices from "./Choices";

// Choices có ChoiceCard, và Display có Player
// Choices return phần Choices dưới cùng
// Player return phần Player ở giữa
// Result return phần Result trên cùng

import { getRandomGameItem, calculatorUserWinner } from "../utils";
// Logic để lấy Choice và tính Result

const gameItems = [
  {
    url: "/images/paper.png",
    id: 0,
    winItemIds: [1],
    name: "Paper",
  },
  {
    url: "/images/rock.png",
    id: 1,
    winItemIds: [2],
    name: "Rock",
  },
  {
    url: "/images/scissor.png",
    id: 2,
    winItemIds: [0],
    name: "Scissor",
  },
];

// Tại sao ở đây phải export default?
export default function Main() {
  const [result, setResult] = useState("N/N");
  const [userGameItem, setUserGameItem] = useState(null);
  const [computerGameItem, setComputerGameItem] = useState(null);

  // Không hiểu function này, tại sao phải có ...?
  const handleGameItemChange = (gameItem) => {
    setUserGameItem({ ...gameItem });
  };

  // useEffect là gì, tại sao phải có thêm [userGameItem] ở đuôi?
  useEffect(() => {
    if (userGameItem) {
      const computerNewItem = getRandomGameItem(gameItems);
      setComputerGameItem({ ...computerNewItem });
      setResult(calculatorUserWinner(userGameItem, computerNewItem));
    }
  }, [userGameItem]);

  // Result sẽ đổi, còn Choices chỉ đổi khi mình đổi list gameItems bên trên
  return (
    <div className="conainer">
      <div className="main">
        <Result
          user1GameItem={userGameItem}
          user2GameItem={computerGameItem}
          result={result}
        />
        <Display />
        <Choices
          gameItems={gameItems}
          handleGameItemChange={handleGameItemChange}
        />
      </div>
    </div>
  );
}
