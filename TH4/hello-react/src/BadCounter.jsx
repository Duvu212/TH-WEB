function BadCounter() {

    let count = 0;

    function handleClick() {

        count = count + 1;

        console.log("Count:", count);
    }

    return (
        <div
            style={{
                padding: "20px",
                border: "2px solid red",
                margin: "20px"
            }}
        >
            <h2>❌ Counter tệ</h2>

            <p>Bộ đếm: {count}</p>

            <button onClick={handleClick}>
                Tăng (+1)
            </button>
        </div>
    );
}

export default BadCounter;