import { useState } from "react";

function KeyboardEvents() {
    const [value, setValue] = useState("");
    const [lastKey, setLastKey] = useState("");

    function handleKeyDown(e) {
        setLastKey(e.key);

        if (e.key === "Enter") {
            alert("Bạn nhập: " + value);
            setValue("");
        }

        if (e.key === "Escape") {
            setValue("");
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Keyboard Events</h2>

            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập rồi nhấn Enter..."
            />

            <p>Phím cuối cùng: {lastKey}</p>
        </div>
    );
}

export default KeyboardEvents;