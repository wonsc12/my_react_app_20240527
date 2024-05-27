import { Component } from 'react';

class Mynav extends Component {
  render() {
    // console.log(this.props);
    console.log("Mynav 실행")
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while(i<data.length){
      lists.push(<li key={data[i].id}><a href="" data-id={data[i].id}onClick={(e)=>{
        e.preventDefault();
        this.props.onChangePage(e.target.getAttribute('data-id'));
      }}>{data[i].title}</a></li>);
      i++;
    }
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    )
  }
}
export default Mynav;