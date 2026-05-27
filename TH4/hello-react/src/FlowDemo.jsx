import { useState } from "react";

function FlowDemo() {

    console.log("🔄 Component render!");

    const [step, setStep] = useState(1);

    return (
        <div style={{ padding: "20px" }}>

            <h2>Luồng hoạt động React</h2>

            <p>Bước hiện tại: {step}</p>

            <button onClick={() => setStep(step + 1)}>
                Bước tiếp theo
            </button>

            <button onClick={() => setStep(1)}>
                Reset
            </button>

            <div
                style={{
                    marginTop: "20px",
                    padding: "10px",
                    background: "#f0f0f0"
                }}
            >

                {step === 1 && <p>👋 Xin chào</p>}
                {step === 2 && <p>📖 Đang học React</p>}
                {step === 3 && <p>🎯 Hiểu useState</p>}
                {step === 4 && <p>🎉 Hoàn thành</p>}

            </div>

        </div>
    );
}

export default FlowDemo;