function Counter(){
    let count=0;
       return (
        <div>
            <h3>count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}

export default Counter;