import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import Products from "./Products";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/products">
        <Products></Products>
      </Route>
    </div>
  );
}

export default App;
