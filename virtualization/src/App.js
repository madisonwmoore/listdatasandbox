import React from 'react';
import './App.css';
import { loremIpsum } from "lorem-ipsum";
import { List,AutoSizer } from "react-virtualized";
import faker from 'faker/locale/en_US';
import {LineGraph} from "./components/LineGraph"

const rowCount=10000;

class App extends React.Component {
constructor(){
  super();
 
  this.state={
    name:"       ",
    profit:"   ",
    text:"     ",
    list:"",
    sortBy:"",
    data:[0,1,2,3,4,5,6,7,8,9]
  }
  this.list=Array(rowCount).fill().map((val,idx)=>{
    
    return{
      id:idx,
      city:faker.address.city(),
      profit: faker.finance.amount(),
      name:faker.name.findName(),
      data: new Array(10).fill().map((val,idx)=>val=Math.floor(Math.random()*5)),
      image:'http://via.placeholder.com/40',
      text: loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound:8
      })
    }
  })
}

componentDidMount=()=>{
  
}

renderRow=({ index, key, style })=> {

  return (
    <div onClick={()=>{this.setState({name:this.searchBar()[index].city, data:this.searchBar()[index].data,profit:this.searchBar()[index].profit, text: this.searchBar()[index].text})}} key={key} style={style} className="row">
      <div className="image">
        <img src={this.searchBar()[index].image} alt="" />
      </div>
      <div className="content">
        <div>{this.searchBar()[index].city}</div>
        <div>{this.searchBar()[index].text}</div>
      </div>
    </div>
  );
}

searchBar=()=>{

// this.list=array;
this.setState({sortBy:document.getElementById("search").value});
  return this.list.filter(str=>str.city.startsWith(document.getElementById("search").value));;
}

// bindListRef = ref => {
//   this.list = ref;
// };

// componentDidUpdate() {
//   if (this.list) {
//     this.list.forceUpdate();
//   }
// }

  render(){
    const rowWidth=800;
    const rowHeight=50;
    const listHeight=600;
    return (
    <div className="App">
      <div className="">
      <h1>Large Data Front End Demo</h1>
      <p>Utilizes React List Virtualization to efficiently render 10,000 unit data set.</p>
      </div>
      <div className="grid-container">
     <div className="list">
       <div className="search-box">
<input onChange={()=>this.searchBar()} id="search" placeholder="Search..."type="text"/></div>
<AutoSizer>
{({width,height}) => (
      <List re={this.state.sortBy} width={width} height={height} rowHeight={rowHeight} rowRenderer={this.renderRow} rowCount={this.list.length}/>
)}
</AutoSizer>

     </div>
     <div className="details">
     
       <h2 id="name">{this.state.name}</h2>
       <br/>
       <p>{this.state.text}</p>
       <br/>
       <h2 id="profit">Profit:${this.state.profit}</h2>
       <br/>
        <LineGraph data={this.state.data}/>
     </div> 
    
     </div>
    </div>
  );
}}

export default App;
