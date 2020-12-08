import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function Histo(props ) {
    const ref = useRef();
    const margin = {top: 10, right: 30, bottom: 30, left: 40}

    useEffect(
        () => { // set svg area
            const histo = d3.select(ref.current)
            .append("svg")
              .attr("width", props.width + margin.left + margin.right)
              .attr("height", props.height + margin.top + margin.bottom)
            .append("g")
              .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")"); 
        
          // X axis: scale and draw:
            const x = d3.scaleLinear()
                .domain([0, d3.max(props.data, function(d) { return +d.value; })])   // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
                .range([0, props.width]);
            histo.append("g")
                .attr("transform", "translate(0," + props.height + ")")
                .call(d3.axisBottom(x));

            // set the parameters for the histogram
            var histogram = d3.bin()
                .value(function(d) { return d.value; })   // I need to give the vector of value
                .domain(x.domain())  // then the domain of the graphic
                .thresholds(x.ticks(5)); // then the numbers of bins

            // And apply this function to data to get the bins
            var bins = histogram(props.data);

            // Y axis: scale and draw:
            var y = d3.scaleLinear()
                .range([props.height, 0]);
                y.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
            histo.append("g")
                .call(d3.axisLeft(y));

            // append the bar rectangles to the svg element
            histo.selectAll("rect")
            .data(bins)
            .enter()
            .append("rect")
                .attr("x", 1)
                .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
                .attr("height", function(d) { return props.height - y(d.length); })
                .style("fill", "#69b3a2")
                            }
    )

    return (
        <svg width={props.width} height={props.height}>
          <g
            ref={ref}
          />
        </svg>
      );
};

export default Histo;