
// How rendering works using set state
import { useState } from "react";
function Counter() {
    // let count=0;

    function init() {
        console.log("init was called .....")
        return Math.random();
    }

    let [count, setCount] = useState(0);
    let incCount = () => {
        setCount(count + 1);
        console.log("rendered");
    }
    return (
        <div>
            <h3>count ={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}

export default Counter;