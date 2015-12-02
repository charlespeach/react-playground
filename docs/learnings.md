# React Fundamentals

- Create components two ways:
  - A `class` component can have state:
  
    ```
    class App extends React.Component {
      render(){
        return <h1>Hello World</h1>
      }
    }
    ```
  - A `const` component which is stateless:
  
    ```
    const App = () => <h1>Hello const</h1>
    ```
- Render Method
  - Is only able to return a single node
- Properties
  - Include ReactDOM (`import ReactDOM from 'react-dom';`) and add properties like so:

	```
	ReactDOM.render(
	  <App cat={5} txt="this is the props value" />,
	  document.getElementById('app')
	);
	```
  - You can set expected property types via `App.propTypes` and default property values via `App.defaultProps`:

	```
	App.propTypes = {
	  txt: React.PropTypes.string,
	  cat: React.PropTypes.number.isRequired
	}
	
	App.defaultProps = {
	  txt: 'this is the default txt' // This value is being overriden by the one specified on line 23
	}
	```
  - Meant to be passed into our components as static values or methods
