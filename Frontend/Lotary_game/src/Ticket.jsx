import "./Ticket.css"
import TicketNo from "./TicketNo.jsx"
export default function Ticket({ ticket, wining }) {
    return (
        <div style={wining ? { backgroundColor: "Green" } : { backgroundColor: "purple" }} className="Ticket">
            <p>Ticket.No</p>
            {ticket.map((el, idx) => {
                return <TicketNo num={el} key={idx}></TicketNo>
            })
            }
        </div>
    )
}