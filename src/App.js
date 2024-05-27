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
    // console.log(this.props);
    // console.log(this);
    return (
      <header>
        <h1 class="logo">{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </header>
    )
  }
}
class Mynav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="">HTML</a></li>
          <li><a href="">CSS</a></li>
          <li><a href="">Javascript</a></li>
        </ul>
      </nav>
    )
  }
}
class Myarticle extends Component {
  render() {
    return (
      <section>
        <article>
          <h2>HTML</h2>
          <p>Hypertext markup Language</p>
        </article>
      </section>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Myheader title="React" desc="Single Page Application"/>
        <Mynav/>
        <Myarticle/>
      </div>
    )
  }
}
export default App
