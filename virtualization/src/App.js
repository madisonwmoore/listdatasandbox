import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loremIpsum } from "lorem-ipsum";
import { List,AutoSizer } from "react-virtualized";
import faker from 'faker/locale/en_US';

const rowCount=10000;

class App extends React.Component {
constructor(){
  super();
 
  this.state={
    name:""
  }
  this.list=Array(rowCount).fill().map((val,idx)=>{
    
    return{
      id:idx,
      city:faker.address.city(),
      name:faker.name.findName(),
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

renderRow=({ index, key, style })=> {

  return (
    <div onClick={()=>{this.setState({name:this.list[index].city})}} key={key} style={style} className="row">
      <div className="image">
        <img src={this.list[index].image} alt="" />
      </div>
      <div className="content">
        <div>{this.list[index].city}</div>
        <div>{this.list[index].text}</div>
      </div>
    </div>
  );
}



  render(){
    const rowWidth=800;
    const rowHeight=50;
    const listHeight=600;
    return (
    <div className="App">
      <div className="">
      <h1>Large Data Front End Demo</h1>
      </div>
      <div className="grid-container">
     <div className="list">

<AutoSizer>
{({width,height}) => (
      <List width={width} height={height} rowHeight={rowHeight} rowRenderer={this.renderRow} rowCount={this.list.length}/>
)}
</AutoSizer>

     </div>
     <div className="details">
     
       <h1 id="name">Name:{this.state.name}</h1>
  
     </div> 
     </div>
    </div>
  );
}}

export default App;
