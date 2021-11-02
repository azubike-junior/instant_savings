import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "../src/assets/css/main.css";
import "../src/assets/css/mains.css";
import "../src/assets/vendor/themify-icons/themify-icons.css";
import "../src/assets/vendor/fontawesome/css/font-awesome.min.css";
import "../src/assets/vendor/bootstrap-multiselect/bootstrap-multiselect.css";
import "../src/assets/vendor/parsleyjs/css/parsley.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
