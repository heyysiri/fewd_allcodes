import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      message : "Hello"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      message: "you clicked the button!!!"
    })
  }
  render(){
    return(
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={this.handleClick}>CLICK ME</button>
      </div>
      )
  }
}

export default App
