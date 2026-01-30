import { useState } from "react";
// import  Ticket from './ticket'
function Lotary() {
    let [ticket, setticket] = useState(0);
    let [won, setwon] = useState(false);
    let istrue = (num) => {
        let ans = 0;
        while (num > 0) {
            console.log(num)
            ans += num % 10;
            console.log(ans)
            num = Math.floor(num / 10);
        }
        if (ans == 15) {
            console.log("true")
            return true;
        } else {
            console.log("false")

            return false;
        }

    }
    let gGenerateNum = () => {
        let Ticnum = Math.floor(Math.random() * 999);
        console.log(Ticnum)
        setwon(istrue(Ticnum))
        setticket(Ticnum);
    }


    return (
        <div>
            <h1 style={won ? { backgroundColor: "Green" } : { backgroundColor: "red" }}>Lotary : {won ? "Congratulations You own" : "Try Again"}</h1>
            <h3 style={won ? { backgroundColor: "brown" } : { backgroundColor: "red" }}>Lotary ticket :{ticket}</h3>
            <button style={won ? { backgroundColor: "Green" } : { backgroundColor: "red" }} onClick={gGenerateNum}>Get new Ticket</button>
        </div>
    )
}

export default Lotary;