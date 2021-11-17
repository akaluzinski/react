import { Route, Redirect } from "react-router-dom";
import Welcome from "./Welcome";
import Products from "./Products";
import MainHeader from "./MainHeader";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products" exact>
          <Products></Products>
        </Route>
        <Route path="/products/:productId">
          <ProductDetails></ProductDetails>
        </Route>
      </main>
    </div>
  );
}

export default App;
