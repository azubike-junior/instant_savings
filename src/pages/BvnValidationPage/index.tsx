import React from "react";
import Header from "../../components/IsHeader";
import BvnValidation from "../../components/IsBvnValidation";

export default function BvnValidationPage() {
  return (
    <div className="bg-lightgrey relative">
      <Header />
      <BvnValidation />
    </div>
  );
}
