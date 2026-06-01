function TodoFilter({ filter, setFilter }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                marginBottom: "20px",
            }}
        >
            <button
                onClick={() => setFilter("all")}
                style={{
                    backgroundColor:
                        filter === "all" ? "#3498db" : "#eee",
                    color:
                        filter === "all" ? "white" : "black",
                }}
            >
                Tất cả
            </button>

            <button
                onClick={() => setFilter("active")}
                style={{
                    backgroundColor:
                        filter === "active" ? "#3498db" : "#eee",
                    color:
                        filter === "active" ? "white" : "black",
                }}
            >
                Chưa xong
            </button>

            <button
                onClick={() => setFilter("completed")}
                style={{
                    backgroundColor:
                        filter === "completed" ? "#3498db" : "#eee",
                    color:
                        filter === "completed" ? "white" : "black",
                }}
            >
                Hoàn thành
            </button>
        </div>
    );
}

export default TodoFilter;