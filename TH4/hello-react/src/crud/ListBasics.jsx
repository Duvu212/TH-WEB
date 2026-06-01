function ListBasics() {

    const students = [
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ];

    return (
        <div style={{ padding: 20 }}>

            <h2>Danh sách sinh viên</h2>

            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        padding: 10,
                        marginBottom: 5,
                        backgroundColor:
                            student.age >= 20
                                ? "#d4edda"
                                : "#f8d7da"
                    }}
                >
                    {index + 1}. {student.name} - {student.age}
                </div>
            ))}

        </div>
    );
}

export default ListBasics;