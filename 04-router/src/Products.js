import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/p2">Item 1</Link>
        </li>
        <li>
          <Link to="/products/p2">Item 2</Link>
        </li>
        <li>
          <Link to="/products/p3">Item 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
