import React, { Suspense, lazy, useEffect } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader/index";
import { BvnValidation, OtpAuth, UserDataAuth } from "./utils/constant";
import PrivateRoute from "./components/Routes/PrivateRoute/index";

const BvnValidationPage = lazy(() => import("./pages/BvnValidationPage"));
const OtpAuthPage = lazy(() => import("./pages/OtpAuthPage"));
const UserAuthPage = lazy(() => import("./pages/UserDataAuthPage"));
const NotFoundPage = lazy(() => import("./pages/UserDataAuthPage"));

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Suspense fallback={Loader}>
            <Route path={BvnValidation} exact component={BvnValidationPage} />
            <Route path={OtpAuth} exact component={OtpAuthPage} />
            <PrivateRoute path={UserDataAuth} exact component={UserAuthPage} />
          </Suspense>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
