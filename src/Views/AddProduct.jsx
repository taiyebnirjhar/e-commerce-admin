import React from "react";
import CardNewProduct from "../Pages/Components/CardNewProduct";

function AddProduct() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardNewProduct />
        </div>
      </div>
    </>
  );
}

export default AddProduct;
