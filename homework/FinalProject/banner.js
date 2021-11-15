var banner1 = "fruehling-f-157514845s-jpg--81698-";

d3.select("#banner")
  .style("background-image", "banner1");

var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight])
  .range([50, 0]);

d3.select(window)
  .on("scroll", function() {

    var y = bannerPosition(window.scrollY);
    d3.select("#banner")
      .style("background-position", "50% " + y + "%");

  });

d3.select(window)
  .on("scroll", function() {
    console.log(window.scrollY);
  });