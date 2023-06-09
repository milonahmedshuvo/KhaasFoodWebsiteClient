import Products from "./Products";
import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div>
      <Products></Products>
      <Outlet></Outlet>
    </div>
  );
};

export default ProductsLayout;
