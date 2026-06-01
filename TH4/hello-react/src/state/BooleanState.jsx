import { useState } from "react";

function BooleanState() {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div style={{ padding: 20 }}>

            <h2>Boolean State</h2>

            <button
                onClick={() => setIsVisible(!isVisible)}
            >
                Toggle
            </button>

            {isVisible && (
                <p>Nội dung đang hiển thị</p>
            )}

        </div>
    );
}

export default BooleanState;