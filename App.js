import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

//const App = () => <h1>Hello const</h1>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt' // This value is being overriden by the one specified on line 23
}

ReactDOM.render(
  <App cat={5} txt="this is the props value" />,
  document.getElementById('app')
);

// export default App
