import React from 'react'

export default function OtpAuth() {
    return (
        <div className="container container-fixed-lg" style="margin-top:0;">
        <div id="rootwizard" className="m-t-50">
            <ul className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm" role="tablist" data-init-reponsive-tabs="dropdownfx">
                <li className="nav-item">
                    <a className="active fs-16 font-weight-bold" data-toggle="tab" href="#tab3" role="tab">
                        <i className="fa fa-lock tab-icon"></i>
                        <span>OTP Authentication</span>
                    </a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane padding-10 sm-no-padding active slide-left" id="tab1">

                    <div className="col-lg-12">
                        <div className="row">

                            <div className="col-lg-5 form_img">
                                <img src="../assets/images/turbanwoman.png">

                            </div>

                            <div className="col-lg-7 col-md-12 col-sm-12 bg-master-light padding-15 b-rad-lg">
                                <form id="signupformpageone"><input name="__RequestVerificationToken" type="hidden" />
                                    <h2 className="pull-left" style="margin-left:20px">O.T.P Validation</h2>
                                    <br />
                                    <p style="margin-left:20px"><i>Enter the O.T.P code that was sent to your registered BVN phone number</i></p>
                                    <div className="clearfix"></div>
                                    <div className="card-block">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group form-group-default required">
                                                    <label>O.T.P</label>
                                                    <input type="text" className="form-control" name="bvn" placeholder="Enter the O.T.P code" required>
                                                </div>
                                            </div>
                                        </div>

                                        <label for="agreetoterms">
                                            <a href="#" className="text-danger" target="_blank">Resend O.T.P. </a>
                                        </label>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="row">
                                            <a href="bvn_data_verify.html" className="col-lg-4 col-md-5 col-sm-12 btn btn-cons" style="background-color: #005D30; color: #FFF;" type="submit">Validate O.T.P</a>

                                            <a href="step1.html" className="col-lg-4 col-md-5 col-sm-12 btn btn-cons sm-m-t-10" style="background-color: #F9C76E; color: #005D30;" type="submit">Back to BVN Page</a>
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
    )
}
