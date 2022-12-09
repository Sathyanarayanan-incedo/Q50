

import React from 'react';
import ReactDOM from 'react-dom';


if(module.hot){
  module.hot.accept();
}


  
class App extends React.Component{
  constructor(props){
    super(props);
   
    this.no = this.no.bind(this);
}
  var a;
  a = 0;

  no(){
      a = a+1;
     }
  render(){
 
    return (
      <button onClick={this.no}>
        Click me!
      </button>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector("#root"));