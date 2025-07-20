// App.jsx - parent

import React, {Component} from 'react';
import Child from './Child';
class App extends Component{
  
  render(){
    return(
      <div>
        <h1>PARENT COMPONENT</h1>
        <Child greet="this is a prop from parent"  />
      </div>
      )
  }
}

export default App;

//child component

import React, {Component} from 'react'

class Child extends Component{
  
    handleClick = () => {
      alert(this.props.greet)
    };
  render(){
    return(
      <div>
        <h1>CHILD COMP</h1>
        <button onClick={this.handleClick}>click to see greeting</button>
      </div>
      )
  }
}
export default Child;
