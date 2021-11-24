var countryList = {
  "US": "United States"
};

function drawMap(world, data, variable) {
    
  console.log(world);
  var geoJSON = topojson.feature(world, world.objects.countries);
  console.log(geoJSON);

  geoJSON.features = geoJSON.features.filter(function(d) {
    return d.id !== "AQ";
  });

  var proj = d3.geoMercator()
    .fitSize([width, height], geoJSON);

  var path = d3.geoPath()
    .projection(proj);

  var countries = map.selectAll("path")
    .data(geoJSON.features);

  var enterCountries = countries.enter().append("path")
    .attr("d", path)
    .attr("vector-effect", "non-scaling-stroke")
    .attr("stroke", "cornflowerblue")
    .attr("stroke-width", "0.5px");

  countries.merge(enterCountries)
    .attr("fill", function(d) {
      var countryName = countryList[d.id];
      if (countryName) {
        var dataPoint = data.filter(function(a) {
          return a["Country name"] === countryName
        });

        if (dataPoint.length) {
          dataPoint = dataPoint[0];
          console.log("Found one!", dataPoint);
          return "green";
        }
        else {
          console.log("Missing Data", countryName);
          return "red";
        }

      }
      else {
        return "gray";
      }
      
    });
  console.log(data);

  var zoom = d3.zoom()
    .translateExtent([[0, 0], [width, height]])
    .scaleExtent([1, 16])
    .on("zoom", zoomed);

  function zoomed() {
    map.attr("transform", d3.event.transform);
  }

  svg.call(zoom);

}

d3.select("#map")
  .on("mousemove", function() {

    console.log(d3.event);

    
    var tooltop = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px")
      .html("Welcome to the first chart!");

      tooltip.select("#title").html("Tooltip Title")
      tooltip.select("#value").html("$2K")


  })
  
  d3.select("#map")
  .on("mousemove", function() {
    d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px")
      .html("Welcome to the first chart!");
  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });;