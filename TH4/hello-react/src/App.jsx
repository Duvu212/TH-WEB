import UserProfile from "./UserProfile";
import ProductInfo from "./ProductInfo";
import LifecycleDemo from "./LifecycleDemo";
import BadCounter from "./BadCounter";
import GoodCounter from "./GoodCounter";
import FlowDemo from "./FlowDemo";

function App() {
  return (
    <div>
      <h1>Tier 0 và Tier 1 React</h1>

      <UserProfile />
      <ProductInfo />

      <LifecycleDemo />
      <BadCounter />
      <GoodCounter />
      <FlowDemo />
    </div>
  );
}

export default App;