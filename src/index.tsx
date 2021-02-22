import React from "react";
import { render } from "react-dom";
import App from "./app";

class Main extends React.Component {
  render() {
    console.log("test");
    return (
      <div>
        <App />
      </div>
    );
  }
}

render(<Main />, document.getElementById("root"));
