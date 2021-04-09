/* Default index page, in React application. Renders App Component
  to public root div in index.html file, using ReactDOM
*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
