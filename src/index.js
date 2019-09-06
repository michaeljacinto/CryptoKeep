import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import WebFont from "../node_modules/webfontloader";
import "../node_modules/typeface-roboto";

ReactDOM.render(<App />, document.getElementById("root"));

// WebFont.load({
//   google: {
//     families: ["Titillium Web:300,400,700", "sans-serif"]
//   }
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
