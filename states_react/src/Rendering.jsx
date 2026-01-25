
// How rendering works using set state
import { useState } from "react";
function Counter() {
    // let count=0;

    function init() {
        console.log("init was called .....")
        return Math.random();
    }

    let [statevariable, setstatevariable] = useState(10);
    let [count, setCount] = useState(init);
    let incCount = () => {
        // setCount((prevCount) => {
        //     return prevCount + 1;
        // });
        setCount(40);
        console.log("rendered")
    }
    return (
        <div>
            <h3>count ={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}

export default Counter;