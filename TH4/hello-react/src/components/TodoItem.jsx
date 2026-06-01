function TodoItem({ todo, onToggle, onDelete }) {

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                marginBottom: "5px"
            }}
        >

            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />

            <span
                style={{
                    flex: 1,
                    textDecoration:
                        todo.done
                            ? "line-through"
                            : "none"
                }}
            >
                {todo.text}
            </span>

            <button
                onClick={() => onDelete(todo.id)}
            >
                Xóa
            </button>

        </div>
    );
}

export default TodoItem;