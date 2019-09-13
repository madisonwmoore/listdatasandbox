import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loremIpsum } from "lorem-ipsum";
import { List } from "react-virtualized";

const rowCount=1000000;

class App extends React.Component {
constructor(){
  super();
  this.list=Array(rowCount).fill().map((val,idx)=>{
    return{
      id:idx,
      name:'John Doe',
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
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={this.list[index].image} alt="" />
      </div>
      <div className="content">
        <div>{this.list[index].name}</div>
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
     <div className="list">
      <List width={rowWidth} height={listHeight} rowHeight={rowHeight} rowRenderer={this.renderRow} rowCount={this.list.length}/>
     </div>
    </div>
  );
}}

export default App;
