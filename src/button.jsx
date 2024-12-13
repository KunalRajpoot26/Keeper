import { useState } from "react";

function Button() {

    const [count, setCount] = useState(1);

    const increment = function() {
        setCount(count + 1);
    }

    const decrement = function() {
        setCount(count -1);

    
    }
    return (
        <>
        
        <h1>{count}</h1>
        <button onClick={increment}>+</button>

        <button onClick={decrement}>-</button>
        </>
    )
}


export default Button;