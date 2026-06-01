import { useState } from "react";

function NumberState() {

    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: 20 }}>

            <h2>Number State</h2>

            <h3>{count}</h3>

            <button onClick={() => setCount(count + 1)}>
                +1
            </button>

            <button onClick={() => setCount(count - 1)}>
                -1
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

        </div>
    );
}

export default NumberState;