import * as d3 from "d3";
const MARGIN = { TOP: 60, BOTTOM: 60, LEFT: 50, RIGHT: 10 };
const WIDTH = 400 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 250 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Chart {
  constructor(element, chartData) {
    const self = this;

    self.svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    self.xLabel = self.svg
      .append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 40)
      .attr("text-anchor", "middle");

    self.svg
      .append("text")
      .attr("x", -HEIGHT / 2)
      .attr("y", -35)
      .attr("text-anchor", "middle")
      .text("Number of launches")
      .attr("transform", `rotate(-90)`);

    self.xAxisGroup = self.svg
      .append("g")
      .attr("transform", `translate(0, ${HEIGHT})`);

    self.yAxisGroup = self.svg.append("g");
    self.update(chartData);
  }

  update(chartData) {
    let { data, svg, xAxisGroup, yAxisGroup } = this;
    data = chartData;

    console.log(`data`, data);
    this.xLabel.text(`Launch years`);

    const y = d3
      .scaleLinear()
      .domain([
        // d3.min(data, (d) => d.count) * 0.95,
        0,
        d3.max(data, (d) => d.count),
      ])
      .range([HEIGHT, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.launch_year))
      .range([0, WIDTH])
      .padding(0.6);

    const xAxisCall = d3.axisBottom(x);
    xAxisGroup.transition().duration(500).call(xAxisCall);

    const yAxisCall = d3.axisLeft(y);
    yAxisGroup.transition().duration(500).call(yAxisCall);

    // DATA JOIN
    const rects = svg.selectAll("rect").data(data);

    // EXIT
    rects
      .exit()
      .transition()
      .duration(500)
      .attr("height", 0)
      .attr("y", HEIGHT)
      .remove();

    // UPDATE
    rects
      .transition()
      .duration(500)
      .attr("x", (d) => x(d.launch_year))
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth)
      .attr("height", (d, i) => HEIGHT - y(d.count));

    // ENTER
    rects
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.launch_year))
      .attr("width", x.bandwidth)
      .attr("fill", "#3898d4")
      .attr("y", HEIGHT)
      .transition()
      .duration(500)
      .attr("height", (d, i) => HEIGHT - y(d.count))
      .attr("y", (d) => y(d.count));
  }
}
