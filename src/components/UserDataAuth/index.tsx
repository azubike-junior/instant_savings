import React from "react";
import { Link } from "react-router-dom";
import turbanwoman from "../../assets/images/turbanwoman.png";
import InputField from "../InputField";
import { BvnValidation } from "../../utils/constant";

export default function UserDataAuth() {
  return (
    <div className="container container-fixed-lg" style={{ marginTop: 0 }}>
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
              <span>User Data Authentication</span>
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
                <div className="col-lg-5 form_img">
                  <img src={turbanwoman} />
                </div>

                <div className="col-lg-7 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                  <form id="signupformpageone">
                    <input name="__RequestVerificationToken" type="hidden" />
                    <div className="col-lg-12">
                      <div className="row clearfix">
                        <div className="col-lg-12 m-b-20 font-weight-900 font-24 m-b-10">
                          BVN Information
                        </div>
                        <br />

                        <div className="col-lg-12 m-b-20">
                          <i>
                            If you have verified your data displayed below,
                            click on the "Create Account" button
                          </i>
                        </div>

                        <div className="clearfix"></div>

                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="BVN"
                            value="22233444"
                            readOnly
                            label="bvn"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="surname"
                            value="Orji"
                            readOnly
                            label="Surname"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="firstname"
                            value="Azubike"
                            readOnly
                            label="First Name"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="middlename"
                            value="junior"
                            readOnly
                            label="Middle Name"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="d_o_b"
                            value="24-07-1991"
                            readOnly
                            label="Date of Birth"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="male"
                            value="male"
                            readOnly
                            label="Gender"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="email"
                            value="thisissean@gmail.com"
                            readOnly
                            label="Email"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="phone_number"
                            value="09033445533"
                            readOnly
                            label="Phone Number"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                          <InputField
                            type="text"
                            name="nationality"
                            value="Nigeria"
                            readOnly
                            label="Nationality"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <a
                          href="#"
                          className="col-lg-5 col-md-5 col-sm-12 btn btn-cons"
                          style={{ backgroundColor: "#005D30", color: "#FFF" }}
                          type="submit"
                        >
                          Open Instant Account
                        </a>

                        <a
                          className="col-lg-4 col-md-5 col-sm-12 btn btn-cons sm-m-t-10"
                          style={{ backgroundColor: "#ff4c4c", color: "#FFF" }}
                          type="submit"
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
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
