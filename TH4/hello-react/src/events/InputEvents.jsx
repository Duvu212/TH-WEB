import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");

    const wordCount = text.trim() === "" ? 0 : text.trim().split(" ").length;

    return (
        <div style={{ padding: 20 }}>
            <h2>Input Events</h2>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập gì đó..."
            />

            <p>Ký tự: {text.length}</p>
            <p>Số từ: {wordCount}</p>
            <p>Bạn đang nhập: {text}</p>
        </div>
    );
}

export default InputEvents;