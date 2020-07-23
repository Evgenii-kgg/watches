import React from "react";
import moment from "moment";

class Clock extends React.Component {
  state = {
    date: this.Now,
  };

  //  now = moment().utc().add(this.props.timeZone,'hours').format();
  // now = moment();
  get Now() {
    return moment().utc().add(this.props.timeZone, "hours").format("HH:mm:ss");
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  tick = () => {
    console.log("dfgd", this.now);
    console.log(this.props);

    this.setState({
      date: this.Now,
    });
  };

  render() {
    return (
      <div className="App">
        <h2>{this.state.date}</h2>
      </div>
    );
  }
}

export default Clock;
