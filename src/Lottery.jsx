import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from './helper';
import WinnerCelebration from './WinnerCelebration';
import bg from './assets/lottery.png';

export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));
  const [chancesLeft, setChancesLeft] = useState(10);
  const isWinning = sum(ticket) === 15;

  const buyTicket = () => {
    if (chancesLeft === 0 || isWinning) return;

    const newTicket = genTicket(3);
    const newIsWinning = sum(newTicket) === 15;

    setTicket(newTicket);

    if (newIsWinning) {
      setChancesLeft(10); // Reset on win
    } else {
      setChancesLeft(prev => prev - 1);
    }
  };

  const restartGame = () => {
    setTicket(genTicket(3));
    setChancesLeft(10);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="lottery">
        <WinnerCelebration show={isWinning} />

        <h1>Lottery Game!</h1>
        <h3>
          Rule: If the sum of all the digits is 15 then you will win the lottery
        </h3>
        <br />

        <div className={`ticket ${isWinning ? "animate" : ""}`}>
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </div>
        <br />

        {/* Chances Remaining */}
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Chances Left: {chancesLeft}
        </div>

        {/* Buy Ticket */}
        <button className="ticket" onClick={buyTicket} disabled={isWinning || chancesLeft === 0}>
          Buy New Ticket
        </button>
        <br />

        {/* Win / Lose Message */}
        <h3 className={isWinning ? "win" : ""} style={{ color: !isWinning && chancesLeft === 0 ? "white" : "" }}>
          {isWinning && "🎉 Congratulations, you won!"}
          {chancesLeft === 0 && !isWinning && "😞 You lost! Try again."}
        </h3>

        {/* Restart Game */}
        {(
          <button className="ticket" onClick={restartGame} style={{color: "black", backgroundColor: "#5a68a7;"}}>
            Restart Game
          </button>
        )}
      </div>
    </div>
  );
}
