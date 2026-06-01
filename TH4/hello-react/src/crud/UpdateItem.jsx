import { useState } from "react";

function UpdateItem() {

    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);

    function handleUpdate(id) {

        setItems(
            items.map(item =>
                item.id === id
                    ? {
                        ...item,
                        name: item.name + " (Updated)"
                    }
                    : item
            )
        );
    }

    return (
        <div style={{ padding: 20 }}>

            <h2>UPDATE</h2>

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
                        onClick={() => handleUpdate(item.id)}
                    >
                        Sửa
                    </button>

                </div>

            ))}

        </div>
    );
}

export default UpdateItem;