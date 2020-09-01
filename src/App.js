import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => { setCount(count + 1 ) }
  const decrement = () => { setCount(count - 1 ) }

  return (
    <>
    <button onClick={decrement}>-</button>
    {count}
    <button onClick={increment}>+</button>
    </>
  );
}

class AppUgly extends React.Component {
  state = {
    count: 0
  }

  increment = () => {this.setState(state => {return { count: state.count + 1}})}
  decrement = () => {this.setState(state => {return { count: state.count - 1}})}

  render() {
    const { count } = this.state;
    return (
      <>
      <button onClick={this.decrement}>-</button>
      {count}
      <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default AppUgly;
