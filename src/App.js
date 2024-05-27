import { Component } from 'react';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      hello,world!
    </div>
  );
}
*/

class Myheader extends Component {
  render() {
    return (
      <header>
        <h1 class="logo">React</h1>
        <p>Single Page Application</p>
      </header>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Myheader></Myheader>
      </div>
    )
  }
}
export default App
