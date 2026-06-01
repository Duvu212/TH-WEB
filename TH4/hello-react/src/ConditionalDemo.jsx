function ConditionalDemo() {
    const isOnline = true;
    const isLoggedIn = true;
    const stock = 0;
    const score = 8.5;

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", margin: "20px" }}>
            <h2>Conditional Rendering</h2>

            <p>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>

            {isLoggedIn ? (
                <div>
                    <p>Menu người dùng:</p>
                    <button>Trang cá nhân</button>
                    <button>Đăng xuất</button>
                </div>
            ) : (
                <p>Vui lòng đăng nhập</p>
            )}

            <p>Sản phẩm: {stock === 0 ? "Hết hàng" : "Còn hàng"}</p>

            <p>
                Xếp loại: {
                    score >= 9 ? "Xuất sắc" :
                    score >= 8 ? "Giỏi" :
                    score >= 7 ? "Khá" :
                    score >= 5 ? "Trung bình" : "Yếu"
                }
            </p>
        </div>
    );
}

export default ConditionalDemo;