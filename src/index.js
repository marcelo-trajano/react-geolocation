import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import Error from "./Error";

class App extends React.Component {
  state = { lat: null, errMsg: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  renderContent() {
    if (!this.state.lat && this.state.errMsg) {
      return <Error error={this.state.errMsg} />;
    }

    if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader msg="Please accept location request" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
