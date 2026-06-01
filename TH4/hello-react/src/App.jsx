import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" }
    ];

    return (
        <div>
            <Header />

            <main>
                <h2 style={{ textAlign: "center" }}>Danh sách sản phẩm</h2>

                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;