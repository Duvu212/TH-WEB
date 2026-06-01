import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.name.trim() === "" || formData.email.trim() === "") {
            alert("Vui lòng nhập tên và email");
            return;
        }

        if (!formData.email.includes("@")) {
            alert("Email chưa hợp lệ");
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setFormData({
            name: "",
            email: "",
            message: ""
        });
        setSubmitted(false);
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Form Events</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tên"
                    />

                    <br /><br />

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />

                    <br /><br />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tin nhắn"
                    />

                    <br /><br />

                    <button type="submit">Gửi</button>
                    <button type="button" onClick={handleReset}>Xóa</button>
                </form>
            ) : (
                <div>
                    <h3>Đã gửi thành công</h3>
                    <p>Tên: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Tin nhắn: {formData.message}</p>
                    <button onClick={handleReset}>Gửi lại</button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;