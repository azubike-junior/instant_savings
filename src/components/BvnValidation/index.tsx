import React from "react";
import { MdPhonelinkSetup } from "react-icons/md";
import turbanwoman from '../../assets/images/turbanwoman.png'

export default function BvnValidation() {
  return (
    <div className="container container-fixed-lg" style={{marginTop:0}}>
        <div id="rootwizard" className="m-t-50">
            <ul className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm" role="tablist" data-init-reponsive-tabs="dropdownfx">
                <li className="nav-item">
                    <a className="active fs-16 font-weight-bold" data-toggle="tab" href="#tab3" role="tab"><i className="fa fa-id-badge tab-icon"></i>
                        <span>BVN Validation</span>
                    </a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane padding-10 sm-no-padding active slide-left" id="tab1">

                    <div className="col-lg-12">
                        <div className="row">

                            <div className="col-lg-5 form_img">
                                <img src={turbanwoman}/>

                            </div>

                            <div className="col-lg-7 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                                <form id="signupformpageone"><input name="__RequestVerificationToken" type="hidden" />
                                    <h2 className="pull-left" style={{marginLeft:"20px"}}>BVN INFORMATION</h2>
                                    <br />
                                    <p style={{marginLeft:"20px"}}><i>If you have verified your data displayed below, click on the "Create Account" button</i></p>
                                    <div className="clearfix"></div>
                                    <div className="card-block">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group form-group-default required">
                                                    <label>BVN</label>
                                                    <input type="number" className="form-control" name="bvn" placeholder="Enter your BVN" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="checkbox check-suntrust checkbox-circle">
                                            <input type="checkbox" id="agreetoterms" />
                                            <label>I agree with the <a
                                                    href="https://suntrustng.com/terms-of-use/" target="_blank">terms
                                                    and
                                                    conditions </a>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="row">
                                            <a href="step2.html" className="col-lg-4 col-md-6 col-sm-12 btn btn-cons font-weight-900" style={{backgroundColor: "#005D30", color: "#fff"}} type="submit">Next</a>
                                        </div>
                                    </div>

                                    
                                    {/* <div className="padding-0 sm-padding-1 sm-m-b-20 sm-m-t-20 clearfix" style={{marginLeft:"20px"}}>
                                        <a href="step2.html" className="btn btn-cons" style={{backgroundColor: "#005D30", color: "#fff"}} type="submit" id="nextbtnpageone">
                                            <span>Next</span>
                                        </a>

                                    </div>  */}
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
