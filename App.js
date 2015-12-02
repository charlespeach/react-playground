import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'Starting state',
      cat: false
    }
  }
  update(e){
    this.setState({txt: e.target.value, cat: Math.random()})
  }
  render(){
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)} />
        <h1>{ this.state.txt }</h1>
        <p>{ this.state.cat }</p>
      </div>
    )
  }
}

export default App
