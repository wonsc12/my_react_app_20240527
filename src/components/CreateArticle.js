import { Component } from 'react'; 

class CreateArticle extends Component { // Myarticle라는 클래스형 컴포넌트를 정의 컴포넌트는 Component 클래스를 상속
  render() { // 클래스형 컴포넌트는 render 메서드를 가지고 있으며, 이 메서드에서 JSX를 반환
    console.log("CreateArticle 실행"); // render 메서드가 호출될 때마다 "CreateArticle 실행"이라는 메시지를 콘솔에 출력
    return ( // render 메서드는 컴포넌트의 UI를 정의하는 JSX를 반환
      <section> 
        <article>
          <h2>Create Article</h2>
          <form method='post' onSubmit={(e)=>{
            e.preventDefault();
            // alert('제출됨');
            // debugger
            // console.log(e.target.title.value)
            this.props.onSubmit(e.target.title.value,e.target.desc.value, e.target.level.value);

          }}>
            <p>
              <input type="text" name="title" placeholder='title'/>
            </p>
            <p>
              <textarea name="desc" placeholder='description'>
              </textarea>
            </p>
            <p>
            <input type="number" min="4" name="level"/>
            </p>
            <button type="submit">입력</button>
          </form>
        </article>
      </section>
    )
  }
}
export default CreateArticle;

//CreateArticle 컴포넌트는 title과 desc라는 두 개의 props를 받아, 이를 h2와 p 요소에 출력하는 역할을 합니다. 컴포넌트가 렌더링될 때마다 콘솔에 "CreateArticle 실행"이라는 메시지를 출력