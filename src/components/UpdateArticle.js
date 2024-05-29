import { Component } from 'react'; // React의 Component 클래스를 가져와서 UpdateArticle 클래스가 이를 상속

class UpdateArticle extends Component { // UpdateArticle라는 클래스형 컴포넌트를 정의합니다. 이 컴포넌트는 Component 클래스를 상속받아 React 컴포넌트의 특성을 갖게 됩니다.
  constructor(props){ // constructor는 컴포넌트가 처음 생성될 때 호출
    super(props); // super(props)를 호출하여 부모 클래스인 Component의 생성자를 호출
    this.state = { // 초기 상태를 설정
      id:this.props.data.id,  //  this.state는 props.data로부터 id, title, desc를 받아 초기화
      title:this.props.data.title,
      desc:this.props.data.desc,
      level:this.props.data.level,

    }
  }
  inputFormHander(e){  // 이 메서드는 입력 폼의 값이 변경될 때 호출
    this.setState({
      [e.target.name]:e.target.value // computed property name 계산된 속성 이름 //[e.target.name]은 계산된 속성 이름(Computed Property Name)으로, 입력 필드의 name 속성을 사용하여 상태를 동적으로 업데이트
    })
  }
  render() { // 클래스형 컴포넌트는 render 메서드를 가지고 있으며, 이 메서드에서 JSX를 반환
    console.log("UpdateArticle 실행"); // render 메서드가 호출될 때마다 "UpdateArticle 실행"이라는 메시지를 콘솔에 출력
    return ( // render 메서드는 컴포넌트의 UI를 정의하는 JSX를 반환
      <section> 
        <article>
          <h2>Update Article</h2>
          <form method='post' onSubmit={(e)=>{ //<form> 요소는 onSubmit 이벤트 핸들러를 가지고 있으며, 폼이 제출될 때 실행
            e.preventDefault();
            // alert('제출됨');
            // debugger
            // console.log(e.target.title.value)
            this.props.onSubmit(this.state.id,
              e.target.title.value,
              e.target.desc.value,
              e.target.level.value);

          }}>
            <input type="hidden" name="id" value={this.state.id}/>  
            <p>
              <input 
              type="text" 
              name="title" 
              placeholder='title' 
              value={this.state.title}
              onChange={e=>{
                this.inputFormHander(e)
              }}
              />
            </p>
            <p>
              <textarea 
              name="desc" 
              placeholder='description'
              onChange={e=>{
                this.inputFormHander(e)
              }}
              value={this.state.desc}
              ></textarea>
            </p>
            <p>
              <input 
              type="number" 
              min="4" 
              name="level"
              onChange={e=>{
                this.inputFormHander(e)
              }}
              value={this.state.level}
              />
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    )
  }
}
export default UpdateArticle;

//UpdateArticle 컴포넌트는 title과 desc라는 두 개의 props를 받아, 이를 h2와 p 요소에 출력하는 역할을 합니다. 컴포넌트가 렌더링될 때마다 콘솔에 "UpdateArticle 실행"이라는 메시지를 출력