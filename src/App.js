import { Component,setState } from 'react';
import './App.css';
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import Myarticle from './components/Myarticle';

/*
function App() {
  return (
    <div className="App">
      hello,world!
    </div>
  );
}
*/
 
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject:{
        title:'react',
        desc:'Single Page Application'
      },
      welcome:{
        title:'welcome',
        desc:'welcome to React'
      },
      menus:[
        {id:1, title:'HTML', desc:'Hypertext markup Language'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'Javascript', desc:'Javascript is for interaction'}
      ]
    }
  }
  render(){
    console.log("App 실행");
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.menus[0].title;
      _desc = this.state.menus[0].desc;
    }
    return (
      <div className="App">
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc} onChangePage={()=>{
          this.setState({mode:'welcome'})
        }}/>
        <Mynav data={this.state.menus}/>
        <Myarticle title={_title} desc={_desc}/>
      </div>
    )
  }
}

export default App
