import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Line(props) {
    // const [data, setData] = React.useState([5, 3, 6, 1, 2]);
  
    const ref = useRef();
    // const createLine = d3
    //     .line()
    //     .value(d => d.value)
    //     .sort(null);
    const colors = d3.scaleOrdinal(d3.schemeCategory10);
    const margin = {top: 30, right: 30, bottom: -30, left: 30}
    useEffect(
        () => {
            //const data = createLine(props.data);
            const singleLine = d3.select(ref.current)
                .append("svg")
                    .attr("width", props.width + margin.left + margin.right)
                    .attr("height", props.height - margin.bottom)// 
                .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.bottom + ")");
            
            var y = d3.scaleLinear()
                    .domain([0, d3.max(props.data, function(d) { return +d.value; })])
                    .range([ props.height, 0 ]);
                singleLine.append("g")
                    .call(d3.axisLeft(y));

                var x = d3.scaleLinear()
                    .domain(d3.extent(props.data, function(d) { return d.date; }))
                    .range([0, props.width]);
                singleLine.append("g")
                .attr("transform", "translate(0," + props.height + ")")
                    .call(d3.axisBottom(x));


            singleLine.append("path")
                .datum(props.data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function(d) { return x(d.date) })
                    .y(function(d) { return y(d.value) })
                    )

        },
    [props.data]
    )  

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
      />
    </svg>
  );
};

export default Line;

////<button onClick={update}>Update</button>