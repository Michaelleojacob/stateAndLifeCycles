import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//TODO =============================
//TODO < non encapsulated version >
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);
//TODO </ non encapsulated version >
//TODO =============================

//* goal: make the Clock component truly reusable and encapsulated.

//? =============================
//? </ encapsulated v1 >
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
// }

// setInterval(tick, 1000);
//? </ encapsulated v1 >
//? =============================

//todo =============================
//todo </ v2 changing Clock to a class component >
// class Clock extends React.Component {
//   constructor(props) {}
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
//todo </ v2 changing Clock to a class component >
//todo =============================

//? =============================
//? </ v3 adding state to the component >
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Clock />, document.getElementById('root'));
//? </ v3 adding state to the component >
//? =============================

//*
// We want to set up a timer whenever the Clock is rendered to the DOM
//for the first time. This is called “mounting” in React.

// We also want to clear that timer whenever the DOM produced by the Clock
//is removed. This is called “unmounting” in React.
//*

//*
// The componentDidMount() method runs after the component output has
// been rendered to the DOM. This is a good place to set up a timer:
//*

//todo =============================
//todo </ v4 mount and unmount >
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount = () =>
    (this.timerID = setInterval(() => this.tick(), 1000));

  componentWillUnmount = () => clearInterval(this.timerID);

  tick = () => this.setState({ date: new Date() });

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
//todo </ v4 mount and unmount >
//todo =============================
