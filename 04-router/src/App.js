import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import Products from "./Products";
import MainHeader from "./MainHeader";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
      </main>
    </div>
  );
}

export default App;
