import { Component,setState } from 'react'; // Component와 setState를 react로부터 임포트
import './App.css'; // CSS 파일 App.css와 세 개의 컴포넌트 Myheader, Mynav, Myarticle를 임포트
import Myheader from './components/Myheader';
import Mynav from './components/Mynav';
import ReadArticle from './components/ReadArticle';
import Controls from './components/Controls';
import CreateArticle from './components/CreateArticle';
import UpdateArticle from './components/UpdateArticle';


/*
function App() {
  return (
    <div className="App">
      hello,world!
    </div>
  );
}
*/
 
class App extends Component { // App은 Component를 상속받아 정의된 클래스형 컴포넌트
  
  constructor(props){ // 생성자(constructor) constructor 메서드에서 초기 상태(state)를 설정
    super(props);
    this.max_id= 3;
    this.state = {
      mode:'welcome', // mode: 현재 모드를 나타내며, 초기값은 'welcome'입니다.
      selected_id:2, // selected_id: 선택된 메뉴의 ID로, 초기값은 2
      subject:{ // subject: 제목과 설명을 포함하는 객체
        title:'react',
        desc:'Single Page Application'
        
      },
      welcome:{ // welcome: 환영 메시지를 포함하는 객체
        title:'welcome',
        desc:'welcome to React'
      },
      menus:[ // menus: 각 메뉴 항목의 ID, 제목, 설명을 포함하는 배열입니다.
        {id:1, title:'HTML', desc:'Hypertext markup Language', level:1},
        {id:2, title:'CSS', desc:'CSS is for design', level:2},
        {id:3, title:'Javascript', desc:'Javascript is for interaction', level:3}
      ]
    }
  }
  getArticles(){
    let _title, _desc, _article = null; // 현재 모드(this.state.mode)에 따라 title과 desc를 설정

    if(this.state.mode === 'welcome'){ // mode가 'welcome'일 경우 welcome 객체의 제목과 설명을 사용
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      
      _article = <ReadArticle title= {_title} desc={_desc}  onChangeMode={(val)=>{
        this.setState({
          mode:val,     
        })
      }}/>
    }else if(this.state.mode === 'read'){ // mode가 'read'일 경우 selected_id와 일치하는 메뉴 항목의 제목과 설명을 사용
      let _data = this.getReadArticle();
      _article = <ReadArticle title={_data.title} desc={_data.desc} level={_data.level}/> // 반복문이 끝난 후 _article 변수에 ReadArticle 컴포넌트를 title과 desc 속성을 포함하여 할당
    }else if(this.state.mode === 'create'){ // 만약 this.state.mode가 'create'라면
      
      _article = <CreateArticle onSubmit={(_title,_desc,_level)=>{
        // this.max_id =this.max_id +1;
        this.max_id += 1;
        // this.state.menus.push(
        //   {id:this.max_id, title:_title, desc:_desc}
        // )
        // let _menus = this.state.menus.concat(
        //   {id:this.max_id, title:_title, desc:_desc}
        // )
        // let _menus = Array.from(this.state.menus);
        let _menus = [...this.state.menus]; // 스프레이드연산자
        _menus.push(
          {id:this.max_id, title:_title, desc:_desc ,level:_level}
        );
        this.setState({
          menus:_menus,
          mode:'read',
          selected_id:this.max_id
        });
        // console.log(_title,_desc);
        console.log(this.state.menus);

      }}/> // _article 변수에 CreateArticle 컴포넌트를 할당
    }
    else if(this.state.mode === 'update'){ // 현재 mode 상태가 'update'인 경우에 실행되는 블록

      let _data = this.getReadArticle(); // getReadArticle 메서드를 호출하여 현재 읽고 있는 기사의 데이터를 가져옴
      _article = <UpdateArticle data={_data} onSubmit={(_id,_title, _desc, _level)=>{// 반복문이 끝난 후 _article 변수에 ReadArticle 컴포넌트를 title과 desc 속성을 포함하여 할당
      console.log(_id,_title,_desc);
      let _menus = Array.from(this.state.menus); // 현재 상태의 menus 배열을 복사하여 _menus라는 새로운 배열만듬
      _menus.forEach((item,index)=>{ 
        if(item.id === _id){ // 조건문을 통해 현재 항목의 id가 업데이트할 id와 일치하는지 확인
          _menus[index] = {id:_id, title:_title, desc:_desc , level:_level} // 일치하면 해당 항목의 title과 desc를 업데이트
        }
      });
     
        this.setState({ // setState를 사용하여 menus 상태를 업데이트된 _menus로 설정
          menus:_menus,
          mode:'read' // mode 상태를 'read'로 변경하여 읽기 모드로 전환
        });
        console.log(_title,_desc);
        console.log(this.state.menus);

      }}/>
      
    }
    return _article; // 최종적으로 _article 변수를 반환  이 변수는 UpdateArticle 컴포넌트로 설정
  }
  getReadArticle(){
    let i=0;
    while(i<this.state.menus.length){ // 배열의 길이만큼 반복
      let data = this.state.menus[i]; // 변수에 현재 메뉴 객체를 할당
      if(data.id === this.state.selected_id){ // 현재 메뉴의 id가 selected_id와 같은지 확인
        return data;
        break;
      }
      i++;
    }
  }
  render(){ // 컴포넌트가 렌더링될 때 호출
    console.log("App 실행"); // 콘솔에 "App 실행"이라는 메시지를 출력
    
    return (
      <div className="App">
        <Myheader title={this.state.subject.title} desc={this.state.subject.desc} onChangePage={(val)=>{ // Myheader 컴포넌트를 렌더링하며, title, desc, onChangePage 속성을 전달 
          this.setState({mode:val})                                                                      // onChangePage는 새로운 값을 받아 상태의 mode를 변경하는 함수
        }}/>
        <Mynav data={this.state.menus} onChangePage={(id)=>{ // Mynav 컴포넌트를 렌더링하며, data와 onChangePage 속성을 전달  onChangePage는 선택된 메뉴의 ID를 받아 상태의 mode를 'read'로 변경 
          console.log(id);                                    // selected_id를 업데이트하는 함수
          this.setState({
            mode:'read',
            selected_id:Number(id)
          })
        }}/> 
        {this.getArticles()} 
        <hr/>
        <Controls mode={this.state.mode} onChangeMode={(val)=>{ //Controls 컴포넌트를 렌더링하고, mode와 onChangeMode prop을 전달
          if(val === 'delete'){
            if(window.confirm('정말 삭제할까요?')){
              let _menus = [...this.state.menus];
              _menus.forEach((item,idx)=>{
                if(item.id === this.state.selected_id){
                  _menus.splice(idx,1);
                }
              });
              // let i = 0;
              // while(i< _menus.length){
              //   if(_menus[i] === this.state.selected_id){
              //     _menus.splice(1,1)
              //     break;
              //   }
              //   i++
              // }
              this.setState({
                menus:_menus,
                mode:'welcome',
                
              });            
            }
          }else {
            this.setState({
              mode:val,
            })
          }          
        }}/>
      </div>
    )
  }
}

export default App
