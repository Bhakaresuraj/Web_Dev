import { useState } from "react";
function ludoBoard() {
    // let [blue,setBlue]=useState(0);
    // let [yellow,setYellow]=useState(0);
    // let [green,setGreen]=useState(0);
    // let [red,setRed]=useState(0);

    // insted of writing four lines we can simply create this by passing object

    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 })

    let [arr,setArray]=useState([]);

    let updateArray=()=>{
        setArray([...arr,"Blue Moves"])
    }

    let updateBlue = () => {
        setMoves((prevVal) => {
            return { ...prevVal, blue: prevVal.blue + 1 }
        });
        console.log(moves);
    }
    let updateYellow = () => {
        setMoves((prevVal) => {
            return { ...prevVal, yellow: prevVal.yellow + 1 }
        });
        console.log(moves);
    }
    let updateGreen = () => {
        setMoves((prevVal) => {
            return { ...prevVal, green: prevVal.green + 1 }
        });
        console.log(moves);
    }
    let updateRed = () => {

        setMoves((prevVal) => {
            return { ...prevVal, red: prevVal.red + 1 }
        });
        console.log(moves);
    }


    return (
        <div>
            <h3>Game begins</h3>
            <div className="board">
                <p>{arr}</p>

                <p>blue moves = {moves.blue}</p>
                <button onClick={updateArray} style={{ backgroundColor: "blue" }}>+1</button>
                <p>yellow moves ={moves.yellow}</p>
                <button onClick={updateYellow} style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
                <p>green moves ={moves.green}</p>
                <button onClick={updateGreen} style={{ backgroundColor: "green" }}>+1</button>
                <p>red moves ={moves.red}</p>
                <button onClick={updateRed} style={{ backgroundColor: "red" }}>+1</button>
            </div>
        </div >
    )
}

export default ludoBoard;