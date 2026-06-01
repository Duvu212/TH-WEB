function SimpleVariables() {
    const ten = "Duvu";
    const tuoi = 20;
    const queQuan = "Hà Nội";
    const canNang = 60;
    const chieuCao = 1.7;

    const bmi = canNang / (chieuCao * chieuCao);
    const gio = new Date().getHours();

    const loiChao =
        gio < 12 ? "Chào buổi sáng" :
        gio < 18 ? "Chào buổi chiều" :
        "Chào buổi tối";

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", margin: "20px" }}>
            <h2>Simple Variables</h2>
            <p>{loiChao}, {ten}!</p>
            <p>Tuổi: {tuoi}</p>
            <p>Quê quán: {queQuan}</p>
            <p>BMI: {bmi.toFixed(2)}</p>
        </div>
    );
}

export default SimpleVariables;