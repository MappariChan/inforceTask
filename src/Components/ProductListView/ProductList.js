import { useSelector } from "react-redux";

import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <ul>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
        // <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
