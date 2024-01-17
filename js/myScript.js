d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv", d3.autoType)
.then(function(data){
    var myData = data;

    var circles = d3.select("svg").selectAll("circle").data(myData);
    
    circles.join("circle")
            .attr("cx", function(d){return d.Xi;})
            .attr("cy", function(d){return d.Yi;})
            .attr("r", 5)
            .attr("fill", function(d){return d.color;})
            
    .transition().attr("cx", function(d){return d.Xf;})
    .attr("cy", function(d){return d.Yf;});
})

 


// Displaying the values
//console.log("First Element:", firstElement);
//console.log("Second Element:", secondElement);
//console.log("Third Element:", thirdElement);
