var margin = {
    top: 20,
    right: 100,
    bottom: 100,
    left: 40
  };

    var chartWidth = width - margin.left - margin.right;
    var chartHeight = height - margin.top - margin.bottom;

    var scaleWidth = 300;
    var scaleHeight = 20;
    var scaleX = margin.left + chartWidth / 2 - scaleWidth / 2;
    var scaleY = margin.top + chartHeight + 40;

    var scale = svg.select("#scale")
      .attr("transform", "translate(" + scaleX + ", " + scaleY + ")");
  
    scale.select("#scaleRect")
    .attr("width", scaleWidth)
    .attr("height", scaleHeight);

    var stopsData = d3.range(0, 8, 1);

    svg.select("#colorGradient").selectAll("stop")
          .data(stopsData).enter()
          .append("stop")
            .attr("offset", function(d) {
              return d * 100 + "%";
            })
            .attr("stop-color", function(d) {
              return Color(d * maximumLatter);
            });