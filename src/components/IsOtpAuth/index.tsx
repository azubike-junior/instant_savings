import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import turbanwoman from "../../assets/images/turbanwoman.png";
import { UserDataAuth } from "../../utils/constant";
import { RootState } from "../../store/store";
import InputField from "../InputField";
import { useSelector } from "react-redux";
import { generateOtp } from "../../utils/utilities";
import { useDispatch } from "react-redux";
import { sendSms } from "./../../services/otp-api";
import { BvnValidation } from "./../../utils/constant";
import Loader from "../Loader";

export default function OtpAuth() {
  const { data } = useSelector((state: RootState) => state.bvnReducer);

  const { otpLoading } = useSelector((state: RootState) => state.otpReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [loading, setLoading] = useState(false);

  const compareOtp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const now = new Date();
    const userDetails = localStorage.getItem("userDetails");
    if (!userDetails) {
      return;
    }
    const details = JSON.parse(userDetails);
    if (now.getTime() > details.expiry) {
      localStorage.removeItem("userDetails");
      setOtpError(
        "this Otp code has expired, click on the resend otp link below"
      );
      return;
    }
    if (details.token !== otp) {
      setOtpError(
        "invalid otp input, please enter the valid otp to continue the process"
      );
      return;
    } else {
      setOtpError("");
      history.push(UserDataAuth);
    }
    setLoading(false);
    localStorage.setItem("userData", JSON.stringify(data));
    history.push(UserDataAuth);
  };

  const smsService = (ttl: number) => {
    const now = new Date();
    const generatedOtp: string = generateOtp(6);
    const userDetails = {
      phoneNumber: data?.phoneNumber1,
      bvn: data?.bvn,
      token: generatedOtp,
      messageBody: `${generatedOtp}. Kindly use provided OTP to complete Account Opening Request. OTP Expires in 5 Minutes`,
      expiry: now.getTime() + ttl,
    };
    const { expiry, token, ...rest } = userDetails;
    const tokenInfo = {
      phoneNumber: data?.phoneNumber1,
      token: generatedOtp,
      expiry,
    };
    localStorage.setItem("userDetails", JSON.stringify(tokenInfo));
    dispatch(sendSms(rest));
  };

  const goBack = () => {
    localStorage.clear();
    history.push(BvnValidation);
  };

  useEffect(() => {
    smsService(300000);
    localStorage.setItem("isSuccess", "success");
  }, []);

  return (
    <div className="container container-fixed-lg" style={{ marginTop: "0" }}>
      <div id="rootwizard" className="m-t-50">
        <ul
          className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm"
          role="tablist"
          data-init-reponsive-tabs="dropdownfx"
        >
          <li className="nav-item">
            <a
              className="active fs-16 font-weight-bold"
              data-toggle="tab"
              href="#tab3"
              role="tab"
            >
              <i className="fa fa-lock tab-icon"></i>
              <span>OTP Authentication</span>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane padding-10 sm-no-padding active slide-left"
            id="tab1"
          >
            <div className="col-lg-12">
              <div className="row">
                <div className="d-none d-lg-block col-lg-5 form_img">
                  <img src={turbanwoman} />
                </div>

                <div className="col-lg-7 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                  <form id="signupformpageone" onSubmit={compareOtp}>
                    <input name="__RequestVerificationToken" type="hidden" />
                    <h2 className="pull-left" style={{ marginLeft: "20px" }}>
                      O.T.P Validation
                    </h2>
                    <br />
                    <p style={{ marginLeft: "20px" }}>
                      <i>
                        Enter the O.T.P code that was sent to your registered
                        BVN phone number
                      </i>
                    </p>
                    {otpError && (
                      <span style={{ marginLeft: "20px", color: "red" }}>
                        {otpError}
                      </span>
                    )}
                    <div className="clearfix"></div>
                    <div className="card-block">
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <InputField
                            label="O.T.P"
                            type="number"
                            name="otp"
                            placeholder="Enter the O.T.P code"
                            required
                            value={otp}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                              (e.target.value = e.target.value.slice(0, 6))
                            }
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setOtp(e.target.value)}
                          />
                        </div>
                      </div>

                      <label>
                        <button
                          // href="#"
                          className="text-danger"
                          // target="_blank"
                          onClick={() => smsService(300000)}
                          type="button"
                          style={{ border: "none" }}
                        >
                          Resend O.T.P.
                        </button>
                      </label>
                    </div>
                    {otpLoading ? (
                      <Loader />
                    ) : (
                      <div className="col-lg-12">
                        <div className="row">
                          <button
                            className="col-lg-4 col-md-5 col-sm-12 btn btn-cons"
                            style={{
                              backgroundColor: "#005D30",
                              color: "#FFF",
                            }}
                            type="submit"
                          >
                            Validate O.T.P
                          </button>

                          <button
                            className="col-lg-4 col-md-5 col-sm-12 btn btn-cons sm-m-t-10"
                            style={{
                              backgroundColor: "#F9C76E",
                              color: " #005D30",
                            }}
                            type="button"
                            onClick={goBack}
                          >
                            Back to BVN Page
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
