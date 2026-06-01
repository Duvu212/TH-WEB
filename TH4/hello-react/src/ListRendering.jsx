function ListRendering() {
    const products = [
        { id: 1, name: "iPhone 15", price: 25000000 },
        { id: 2, name: "Tai nghe", price: 500000 },
        { id: 3, name: "Bàn phím", price: 1200000 },
        { id: 4, name: "Chuột", price: 300000 },
        { id: 5, name: "Màn hình", price: 3500000 }
    ];

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", margin: "20px" }}>
            <h2>List Rendering</h2>

            <ul>
                {products.map((product) => (
                    <li
                        key={product.id}
                        style={{
                            color: product.price > 1000000 ? "red" : "black"
                        }}
                    >
                        {product.name} - {product.price.toLocaleString()}đ
                    </li>
                ))}
            </ul>

            <h3>Tổng giá: {totalPrice.toLocaleString()}đ</h3>
        </div>
    );
}

export default ListRendering;