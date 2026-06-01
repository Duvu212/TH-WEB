import { useState } from "react";

function MultipleStates() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
        <div style={{ padding: 20 }}>

            <h2>Multiple States</h2>

            <input
                placeholder="Tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />

            <input
                placeholder="Tuổi"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <p>Tên: {name}</p>
            <p>Tuổi: {age}</p>

        </div>
    );
}

export default MultipleStates;