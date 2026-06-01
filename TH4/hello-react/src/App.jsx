import ListBasics from "./crud/ListBasics";
import CreateItem from "./crud/CreateItem";
import DeleteItem from "./crud/DeleteItem";
import UpdateItem from "./crud/UpdateItem";

function App() {
    return (
        <div>

            <h1>Tier 6 - CRUD</h1>

            <ListBasics />

            <hr />

            <CreateItem />

            <hr />

            <DeleteItem />

            <hr />

            <UpdateItem />

        </div>
    );
}

export default App;