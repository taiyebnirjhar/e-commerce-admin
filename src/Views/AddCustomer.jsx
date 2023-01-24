import React from "react";
import CardNewCustomer from "../Pages/Components/CardNewCustomer";

function AddCustomer() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardNewCustomer />
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
