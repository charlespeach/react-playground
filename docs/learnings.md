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
  - You can set expected property types via `App.propTypes` and default property values via `App.defaultProps`