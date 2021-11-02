import React from "react";
import Header from "../../components/Header";
import BvnValidation from "../../components/BvnValidation";
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div className="bg-lightgrey relative">
      <div className="max-w-5xl mx-auto h-screen">
        <Header />
        {/* <BvnValidation /> */}
        <Footer/>
      </div>
    </div>
  );
}
