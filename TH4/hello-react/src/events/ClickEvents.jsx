import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);
    const [liked, setLiked] = useState(false);

    function handleClick() {
        setMessage("Đã click!");
        setClickCount(clickCount + 1);
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Click Events</h2>

            <p>{message}</p>
            <p>Số lần click: {clickCount}</p>

            <button onClick={handleClick}>Click me</button>

            <button onClick={() => setLiked(!liked)}>
                {liked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>
        </div>
    );
}

export default ClickEvents;