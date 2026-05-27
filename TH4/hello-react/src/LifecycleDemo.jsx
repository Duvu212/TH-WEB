function LifecycleDemo() {

    console.log("1️⃣ Component được gọi!");

    return (
        <div
            style={{
                padding: "20px",
                border: "2px solid blue",
                margin: "20px"
            }}
        >
            <h2>Lifecycle Demo</h2>

            <p>Mở Console (F12) để xem log</p>

            <p>Component này chỉ render 1 lần</p>
        </div>
    );
}

export default LifecycleDemo;