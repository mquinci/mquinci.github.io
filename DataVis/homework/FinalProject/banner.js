var banner1 = "happiness_crop.jpg";

d3.select("#banner")
  .style("background-image", "banner1");

var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight])
  .range([100, 0]);
  