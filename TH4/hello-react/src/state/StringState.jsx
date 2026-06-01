import { useState } from "react";

function StringState() {

    const [name, setName] = useState("");

    return (
        <div style={{ padding: 20 }}>

            <h2>String State</h2>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên..."
            />

            <p>Xin chào: {name}</p>

        </div>
    );
}

export default StringState;