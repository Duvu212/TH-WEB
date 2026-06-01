import NumberState from "./state/NumberState";
import StringState from "./state/StringState";
import BooleanState from "./state/BooleanState";
import MultipleStates from "./state/MultipleStates";

function App() {
    return (
        <div>

            <h1>Tier 4 - useState</h1>

            <NumberState />

            <hr />

            <StringState />

            <hr />

            <BooleanState />

            <hr />

            <MultipleStates />

        </div>
    );
}

export default App;