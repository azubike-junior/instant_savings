import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import turbanwoman from "../../assets/images/turbanwoman.png";
import InputField from "../InputField";
import { BvnValidation } from "../../utils/constant";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { useOpenAccountMutation } from "./../../services/open-account-api";
import Loader from "../Loader";
import AccountOpened from "../IsAccountOpened";
import { DataProps } from "./../../interfaces";
import { convertDateToNum } from "../../utils/utilities";

export default function UserDataAuth() {
  const { data } = useSelector((state: RootState) => state.bvnReducer);
  const history = useHistory();
  const [value, setValue] = useState("");

  const [openAccount, { isError, error, data: accountData, isLoading }] =
    useOpenAccountMutation();
  const [user, setUser] = useState<DataProps>();

  const handleOpenAccount = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newData = {
      bvn: data?.bvn,
      firstName: data?.firstName,
      lastName: data?.lastName,
      middleName: data?.middleName,
      dateofBirth:
        data?.dateOfBirth === null
          ? ""
          : convertDateToNum(data?.dateOfBirth || ""),
      maritalStatus: data?.maritalStatus,
      emailAddress: data?.email,
      gender: data?.gender,
      telNumber: data?.phoneNumber1,
      address1:
        data?.residentialAddress === null
          ? ""
          : data?.residentialAddress?.substring(0, 29),
      address2:
        data?.residentialAddress === null
          ? ""
          : data?.residentialAddress?.substring(0, 29),
      identifyNumber: data?.nin,
    };
    console.log(">>>>newData", newData);
    openAccount(newData);
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    if (data) {
      const _user = JSON.parse(localStorage.getItem("userData") || "{}");
      setUser(_user);
    }
    const expiryTime = 1000000;
    setTimeout(() => {
      localStorage.clear();
      history.push(BvnValidation);
    }, expiryTime);
  }, []);

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
              {accountData?.responseCode === "00" ? (
                <>
                  <i className="fa fa-check tab-icon"></i>
                  <span>Congratulations, Account created!</span>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <i className="fa fa-lock tab-icon"></i>
                  <span>User Data Authentication</span>
                </>
              )}
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className="tab-pane padding-10 sm-no-padding active slide-left"
            id="tab1"
          >
            {accountData?.responseCode === "00" ? (
              <AccountOpened data={accountData} user={data} />
            ) : (
              <div className="col-lg-12">
                <div className="row">
                  <div className="d-none d-lg-block col-lg-5 form_img">
                    <img src={turbanwoman} />
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                    <form id="signupformpageone" onSubmit={handleOpenAccount}>
                      <input name="__RequestVerificationToken" type="hidden" />
                      <div className="col-lg-12">
                        <div className="row clearfix">
                          <div className="col-lg-12 m-b-20 font-weight-900 font-24 m-b-10">
                            BVN Information
                          </div>
                          <br />

                          <div className="col-lg-12 m-b-20">
                            {accountData?.responseCode === "96" && (
                              <p
                                className=""
                                style={{ marginLeft: "2px", color: "red" }}
                              >
                                Account could not be created because you already
                                have an Account with this BVN.
                              </p>
                            )}
                            {error && (
                              <p
                                className=""
                                style={{ marginLeft: "2px", color: "red" }}
                              >
                                Sorry, please something went wrong.
                              </p>
                            )}

                            <i>
                              Kindly verify the data below, click "Open Instant
                              Account" to continue.
                            </i>
                          </div>

                          <div className="clearfix"></div>

                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="BVN"
                              value={user?.bvn}
                              readOnly
                              label="bvn"
                              onChange={(e) => setValue(user?.bvn || "")}
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="lastname"
                              value={user?.lastName}
                              readOnly
                              label="Last Name"
                              onChange={(e) => setValue(user?.lastName || "")}
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="firstname"
                              value={user?.firstName}
                              readOnly
                              label="First Name"
                              onChange={(e) => setValue(user?.firstName || "")}
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="middlename"
                              value={user?.middleName || ""}
                              readOnly
                              label="Middle Name"
                              onChange={(e) => setValue(user?.middleName || "")}
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="dateofBirth"
                              value={user?.dateOfBirth || ""}
                              readOnly
                              onChange={(e) =>
                                setValue(user?.dateOfBirth || "")
                              }
                              label="Date of Birth"
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="gender"
                              value={user?.gender}
                              readOnly
                              label="Gender"
                              onChange={(e) => setValue(user?.gender || "")}
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="emailAddress"
                              value={user?.email || ""}
                              readOnly
                              label="Email"
                              onChange={(e) => setValue(user?.email || "")}
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="phoneNumber"
                              value={
                                user?.phoneNumber1
                                  ? user?.phoneNumber1
                                  : user?.phoneNumber1
                              }
                              readOnly
                              label="Phone Number"
                              onChange={(e) =>
                                setValue(user?.phoneNumber1 || "")
                              }
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                            <InputField
                              type="text"
                              name="nationality"
                              value={user?.nationality}
                              readOnly
                              label="Nationality"
                              onChange={(e) =>
                                setValue(user?.nationality || "")
                              }
                            />
                          </div>

                          {data?.nin && (
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 font-weight-700">
                              <InputField
                                type="text"
                                name="nin"
                                value={user?.nin}
                                readOnly
                                label="ID Number"
                                onChange={(e) => setValue(user?.nin || "")}
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="row">
                          <button
                            className="col-lg-5 col-md-5 col-sm-12 btn btn-cons"
                            style={{
                              backgroundColor: "#005D30",
                              color: "#FFF",
                            }}
                            type="submit"
                          >
                            {isLoading ? <Loader /> : "Open Instant Account"}
                          </button>

                          <Link
                            to={BvnValidation}
                            className="col-lg-4 col-md-5 col-sm-12 btn btn-cons sm-m-t-10"
                            style={{
                              backgroundColor: "#ff4c4c",
                              color: "#FFF",
                            }}
                            type="button"
                            onClick={clearStorage}
                          >
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
