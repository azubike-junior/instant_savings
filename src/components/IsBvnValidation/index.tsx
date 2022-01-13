import React, { useEffect, useState } from "react";
import turbanwoman from "../../assets/images/turbanwoman.png";
import { Link, useHistory } from "react-router-dom";
import InputField from "../InputField";
import { addBvn } from "../../services/bvn-api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loader from "./../Loader/index";

type Bvn = string;
type DomError = string;
type IsChecked = boolean;

export default function BvnValidation() {
  const { error, loading } = useSelector(
    (state: RootState) => state.bvnReducer
  );

  const history = useHistory();

  const [bvn, setBvn] = useState<Bvn>("");
  const [isChecked, setIsChecked] = useState<IsChecked>(false);
  const [domError, setDomError] = useState<DomError>("");
  const dispatch = useDispatch();

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const submitBvn = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (bvn.length < 11) {
      setDomError("BVN should not be lesser than 11");
      return;
    }
    dispatch(addBvn({ bvn, history }));
    setDomError("");
  };

  useEffect(() => {}, [error]);

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
              <i className="fa fa-id-badge tab-icon"></i>
              <span>BVN Validation</span>
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
                  <form id="signupformpageone" onSubmit={submitBvn}>
                    <input name="__RequestVerificationToken" type="hidden" />
                    <h2 className="pull-left" style={{ marginLeft: "20px" }}>
                      BVN VALIDATION
                    </h2>
                    <br />
                    <p style={{ marginLeft: "20px" }}>
                    </p>
                    {error?.name ? (
                      <span
                        className="flex"
                        style={{ marginLeft: "20px", color: "red" }}
                      >
                        {" "}
                        sorry, something went wrong{" "}
                      </span>
                    ) : error ? (
                      <span
                        className="flex"
                        style={{ marginLeft: "20px", color: "red" }}
                      >
                        Invalid BVN
                      </span>
                    ) : (
                      ""
                    )}
                    {domError && (
                      <span
                        className="flex"
                        style={{ marginLeft: "20px", color: "red" }}
                      >
                        {domError}
                      </span>
                    )}
                    <div className="clearfix"></div>
                    <div className="card-block">
                      <div className="row clearfix">
                        <div className="col-sm-12">
                          <InputField
                            label="BVN"
                            type="number"
                            name="bvn"
                            placeholder="Enter your BVN"
                            required
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                              (e.target.value = e.target.value.slice(0, 11))
                            }
                            value={bvn}
                            onChange={(e) => setBvn(e.target.value)}
                            maxLength={11}
                          />
                        </div>
                      </div>

                      <div className="form-check pl-4 form-check-inline flex justify-center">
                        <input
                          checked={isChecked}
                          onChange={handleCheck}
                          className="form-check-input mt-1"
                          type="checkbox"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label className="pl-1">
                          I agree with the{" "}
                          <Link
                            to="https://suntrustng.com/terms-of-use/"
                            target="_blank"
                          >
                            terms and conditions{" "}
                          </Link>
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="row">
                        <button
                          className="col-lg-4 col-md-6 col-sm-12 btn btn-cons font-weight-900"
                          style={{
                            backgroundColor: "#005D30",
                            color: "#fff",
                          }}
                          type="submit"
                          disabled={!isChecked}
                        >
                          {loading ? <Loader /> : "Next"}
                        </button>
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
