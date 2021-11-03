import React from "react";
import OtpAuth from './../../components/OtpAuth/index';
import Header from './../../components/Header/index';

export default function OtpAuthPage() {
  return (
      <div className="bg-lightgrey relative">
        {/* <div className="max-w-5xl mx-auto h-screen"> */}
        <Header />
        <OtpAuth/>
        {/* </div> */}
      </div>
  );
}
