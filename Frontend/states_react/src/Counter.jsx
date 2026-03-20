import { useState } from "react";
function Counter() {
    // let count=0;
    let [statevariable,setstatevariable]=useState(10);
    let [count,setCount]=useState(0);
    function incCount(){
        setCount(count+=1);
        console.log(count);
    }
    // console.log(arr);
    return (
        <div>
            <h3>count ={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}

export default Counter;