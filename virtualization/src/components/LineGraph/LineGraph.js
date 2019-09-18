import React,{Component} from "react";
import * as d3 from "d3";
import "./style.css";
export default class LineGraph extends Component{
    constructor(props){
        super(props);
    this.state={
        data:[]
      }
   
    }

   componentDidMount=()=>{
      
    let margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = d3.select("#graph").style("width").slice(0, -2) - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
// set the ranges
let x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
let valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y((d)=> { return y(d.close); });
    let svg = d3.select("#graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


       let parseTime = d3.timeParse("%d-%b-%y");

    d3.csv("data.csv").then((data,error)=>{
        console.log(data[0])
        if (error) throw error;
      
        // format the data
        data.forEach((d,index)=> {
            d.date = parseTime(d.date);
            d.close = this.props.data[index];
            console.log(d.date);
            console.log(index);
            console.log(d.close);
        });
  

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.close; })]);
  
    // Add the valueline path.
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueline);
  
    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
  
    // Add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
  });
}
   
componentDidUpdate=(prevProps)=>{
    let margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = d3.select("#graph").style("width").slice(0, -2) - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
   let svg= d3.select("svg");
    

    let x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    let valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y((d)=> { return y(d.close); });

    let parseTime = d3.timeParse("%d-%b-%y");

    d3.csv("data.csv").then((data,error)=>{
        console.log(data[0])
        if (error) throw error;
      
        // format the data
        data.forEach((d,index)=> {
            d.date = parseTime(d.date);
            d.close = this.props.data[index];
            console.log(d.date);
            console.log(index);
            console.log(d.close);
        });

   

    svg.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", valueline);})
   
}

   
    render(){
        return(
            <div id="graph">
            </div>
        )
        }
}

