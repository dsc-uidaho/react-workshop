import React, { useState } from 'react';


const Counter = (props) => {
    const [count, setCount] = useState(props.initialCount);

    return (
        <div>
            <h1>Count {count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    )
}


export default Counter;