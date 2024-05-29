import { Component } from 'react'; // React의 Component 클래스를 가져와서 Controls 클래스가 이를 상속

class Controls extends Component {
    render() { // render안에서는 for if 못씀
      console.log("Controls 실행"); 
      return (
        <ul className='controls'>
          {
            (this.props.mode === 'read') ?

            <>
            <li><a href="" onClick={(e)=>{
              e.preventDefault();
              this.props.onChangeMode('update');
            }}>Update</a></li>
              <li><a href="" onClick={(e)=>{
                e.preventDefault();
              this.props.onChangeMode('delete');
            }}>delete</a></li>
            </>:
              <li><button onClick={()=>{
              this.props.onChangeMode('create');
            }}>Create</button></li>
          }
        </ul>       
      )
    }
  }
export default Controls;