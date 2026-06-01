import ClickEvents from "./events/ClickEvents";
import InputEvents from "./events/InputEvents";
import KeyboardEvents from "./events/KeyboardEvents";
import FormEvents from "./events/FormEvents";

function App() {
    return (
        <div>
            <h1>Tier 5 - Events cơ bản</h1>

            <ClickEvents />
            <hr />

            <InputEvents />
            <hr />

            <KeyboardEvents />
            <hr />

            <FormEvents />
        </div>
    );
}

export default App;