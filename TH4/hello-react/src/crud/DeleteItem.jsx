import { useState } from "react";

function DeleteItem() {

    const [items, setItems] = useState([
        { id: 1, name: "React" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "NodeJS" }
    ]);

    function handleDelete(id) {

        setItems(
            items.filter(item => item.id !== id)
        );
    }

    return (
        <div style={{ padding: 20 }}>

            <h2>DELETE</h2>

            {items.map(item => (

                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        gap: 10,
                        marginBottom: 5
                    }}
                >
                    <span>{item.name}</span>

                    <button
                        onClick={() => handleDelete(item.id)}
                    >
                        Xóa
                    </button>

                </div>

            ))}

        </div>
    );
}

export default DeleteItem;