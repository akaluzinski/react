import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product {params.productId}</h1>
    </section>
  );
};
export default ProductDetails;
