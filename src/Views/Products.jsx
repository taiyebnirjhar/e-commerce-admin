import React from "react";
import { Link } from "react-router-dom";
import ProductList from "../Pages/Components/ProductList";

function Products() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <ProductList />
          <Link to={"/products/new"}>
            <div className="text-white font-semibold bg-blue-600 px-6 py-4 rounded-lg max-w-fit hover:bg-blue-700 cursor-pointer">
              Add new product
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Products;
