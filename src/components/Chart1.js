import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();  
    }

    componentDidMount() {
        let accessToRef = d3.select(this.myRef.current);
        accessToRef.style("background-color", "lime")
    }

    render() {
        return <>
            <div ref={this.myRef}>Testing refs</div> 
        </>}
  }

  export default BarChart