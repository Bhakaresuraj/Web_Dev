import { useState } from "react";
import "./Game.css"
import Ticket from "./Ticket.jsx"
import { genTicket ,sum } from "./helper.jsx";
export default function Lotary({ n = 3, WinSum = 15 }) {

    let [ticket, setticket] = useState(genTicket(n));
    let iswinning = sum(ticket) === WinSum;
    let buyTicket = () => {
        setticket(genTicket(n));
    }
    return (
        <div>
            <h1>Lotary</h1>
            <Ticket ticket={ticket} wining={iswinning}></Ticket>
            <h3 >{iswinning && "Congratulations you won Lotary....!"}</h3>
            <button onClick={buyTicket} className="GenTic">Generete Bew Ticket</button>

        </div>
    )
}