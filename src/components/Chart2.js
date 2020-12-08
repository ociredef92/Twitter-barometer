import React from 'react';
import * as d3 from 'd3';

class BarChart2 extends React.Component {
    
    constructor(props) {
        super(props);
        this.myRef = React.createRef();  
    }
    componentDidMount() {
        this.drawChart();
    }
    componentDidUpdate() {
        this.drawChart();
    }

    drawChart() {
        const {data, h, w, color} = this.props
        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("background-color", "#000000") 
            .style("padding", 10)
            .style("margin-left", 50);


        svg.selectAll("rect")
            .data(data) // synch the dataset
            .enter() // select all data points without a corresponding element
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", color)
    }

    
    render() {console.log(this.props.id)
        return <div ref={this.myRef}></div>
        }
  }

export default BarChart2