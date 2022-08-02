import { Component } from "react";

class Tasbih extends Component {
  state = {
    counter: 10,
    previousCounter: 0,
  };

  handlIncrement = () => {
    this.setState({ previousCounter: this.state.counter });
    let counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });
  };

  handlReset = () => {
    this.setState({ counter: 0, previousCounter: this.state.counter });
  };
  handlBack = () => {
    let pre = this.state.previousCounter;
    pre = pre - 1;
    this.setState({
      counter: this.state.previousCounter,
      previousCounter: pre,
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <div className="counter">
          <h1>{this.state.counter}</h1>
        </div>
        <button
          onClick={() => {
            this.handlReset();
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            this.handlIncrement();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handlBack();
          }}
        >
          {"<="}
        </button>
      </>
    );
  }
}

export default Tasbih;
