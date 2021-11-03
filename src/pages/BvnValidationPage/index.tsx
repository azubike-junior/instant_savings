import React from "react";
import Header from "../../components/Header";
import BvnValidation from "../../components/BvnValidation";
import Footer from "../../components/Footer";
// import OtpAuth from '../../components/OtpAuth'

export default function BvnValidationPage() {
  return (
    <div className="bg-lightgrey relative">
      <Header />
      <BvnValidation />
    </div>
  );
}
