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