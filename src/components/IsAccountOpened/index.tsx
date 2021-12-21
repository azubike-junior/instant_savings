import React from "react";
import { sendSms } from "../../services/otp-api";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { BvnValidation } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useOpenAccountMutation } from "../../services/open-account-api";

export default function AcountOpenedPage({ data }: any) {
  const {
    error,
    loading,
    data: user,
  } = useSelector((state: RootState) => state.bvnReducer);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userDetails") || "{}");
    localStorage.clear();
  }, []);

  console.log(">>>>>user", user);

  return (
    <div className="col-lg-12">
      <div className="text-center mt-10">
        <h4>Dear {user?.lastName} </h4>
        <h4>
          Your SAVINGS ACCOUNT number is{" "}
          <span className="" style={{ color: "#005d30", fontWeight: "bolder" }}>
            {data.accountNum}
          </span>
        </h4>

        <h5 className="pt-4 pb-5">
          For enquiries, please call 09087331440. Thank you for choosing
          SunTrust Bank.
        </h5>
        <h4 style={{ color: "#005d30", fontWeight: "bolder" }}>
          <Link to={BvnValidation}>Go Back Home</Link>
        </h4>
      </div>
    </div>
  );
}
