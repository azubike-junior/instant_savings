import React from "react";
import OtpAuth from '../../components/IsOtpAuth';
import Header from '../../components/IsHeader';

export default function OtpAuthPage() {
  return (
      <div className="bg-lightgrey relative">
        <Header />
        <OtpAuth/>
      </div>
  );
}
