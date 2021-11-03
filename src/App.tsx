import React, { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/index";
import { BvnValidation, OtpAuth, UserDataAuth } from "./utils/constant";

const BvnValidationPage = lazy(() => import("./pages/BvnValidationPage"));
const OtpAuthPage = lazy(() => import("./pages/OtpAuthPage"));
const UserAuthPage = lazy(() => import("./pages/UserDataAuthPage"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={Loader}>
          <Switch>
            <Route path={BvnValidation} exact component={BvnValidationPage} />
            <Route path={OtpAuth} exact component={OtpAuthPage} />
            <Route path={UserDataAuth} exact component={UserAuthPage} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
