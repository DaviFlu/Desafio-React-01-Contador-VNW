import React, {Component} from 'react';
import './App.css';
class App extends Component {

  state={
    num:0
  }

  add = () => {
    if(this.state.num < 10){
      this.setState({
        num: this.state.num + 1
      })
    }
  }

  remover = () => {
    if (this.state.num > 0){
      this.setState({
        num: this.state.num - 1
      })
    }
  }

  clear = () => {
    this.setState({
      num:0
    })
  }

  render(){
    return(
      <div className="container">
        <div className="cont">
        <h1>CONTADOR</h1>
          <h2>{this.state.num}</h2>
        </div>
        <div className="addRemove">
          <div className="adicionar">
            <button onClick={this.add} >+</button>
          </div>
          <div className="remover">
            <button onClick={this.remover} >-</button>
          </div>
        </div>
        <div className="limpar">
          <button onClick={this.clear} >CLEAR</button>
        </div>
      </div>
    )
  }
}
export default App