import React,{Component} from 'react';

const App = () => <Counter></Counter>


class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  hundlePlusButton = () => {
    console.log("hundlePlusButton")
    
    this.setState(
      {count: this.state.count + 1}
    )
  }

  hundleMinasButton = () => {
    this.setState(
      {count: this.state.count -1}
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinasButton}>-1</button>
      </React.Fragment>
    )
  }
}
export default App;
