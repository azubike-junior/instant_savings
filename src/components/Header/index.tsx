import React from "react";
import logo from '../../assets/images/Suntrust.png'

export default function Header() {
  return (
     <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="padding-20">
                    <a href="#">
                        <img id="logoId" src={logo} height="100" />
                    </a>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="page_title">
                    <div className="page_title_text">
                        <h2 className="page-title label-primary no-padding m-t-20">Instant Savings Account</h2>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}
