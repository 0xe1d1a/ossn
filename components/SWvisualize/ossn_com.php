<?php

define('__OSSN_SW_VISUALIZE__', ossn_route()->com . 'SWvisualize/');

$html = "The following graph depicts the connections between members";

//this function is use to initilize ossn
function ossn_analysis() {


  //$icon = ossn_site_url("components/mycom/images/icon.png"); icon for the link
    ossn_register_sections_menu("newsfeed", array(
        "text" => "Graph Viewer",
        "url" => ossn_site_url("graph"),
        "section" => "links",
        "icon" => ""
    ));
    ossn_extend_view('css/ossn.default', 'css/swvisualize');
    //ossn_extend_view('js/opensource.socialnetwork', 'js/swvisualize');
    ossn_register_page('graph', 'ossn_sw_pagehandler');
    //ossn_register_page('events', 'ossn_sw_event_pagehandler');
    $icon = ossn_site_url("noicon");
    ossn_register_sections_menu("newsfeed", array(
        "text" => "Map Viewer",
        "url" => "http://178.62.200.142/ossn/map/map.html",
        "section" => "links",
        "icon" => $icon
    ));
    ossn_register_page('eventmap', 'ossn_sw_event_pagehandler');

}


function ossn_sw_pagehandler(){
   if (!ossn_isLoggedin()) {
            ossn_error_page();
   }
   $title = ossn_print("Graph Viewer");
   $contents['content'] = '

	<script src="//d3js.org/d3.v3.min.js"></script><strong>

<h3>  This graph shows the relations between the researchers (based on Google Scholar) </h3>
	<div id="graph"></div>
	<br>
<h3>  The relations between the researchers defined by topics(based on Google Scholar) </h3>
	<div id="grapht"></div>
<h3>  The clustered outline of topics and researchers (based on Google Scholar)
	<br>
	<div id="graphc"></div>
   <script src="http://d3js.org/d3.v3.min.js"></script>
<script>

var width = 960,
    height = 500

var svg = d3.select("#graph").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .gravity(0.05)
    .distance(150)
    .charge(-100)
    .size([width, height]);

d3.json("auth.json", function(error, json) {
  if (error) throw error;

  force
      .nodes(json.nodes)
      .links(json.links)
      .start();

  var link = svg.selectAll(".link")
      .data(json.links)
    .enter().append("line")
      .attr("class", "link2");

  var node = svg.selectAll(".node")
      .data(json.nodes)
      .enter().append("g")
      .attr("class", "node2")
      .attr("stroke", function (d) {
	console.log(d.Name);
        sn = d.Name.split(" ");
        sn = sn[sn.length-1];
        console.log(sn);
        if (sn == "Berners-Lee")
                return "#0066FF";
        else if (sn == "Fischetti")
		return "#0066FF";
	else return 0;
	})
      .attr("stroke-width", function (d) {
        console.log(d.Name);
        sn = d.Name.split(" ");
        sn = sn[sn.length-1];
        console.log(sn);
        if (sn == "Berners-Lee")
                return "0.6px";
        else if (sn == "Fischetti")
                return "0.6px";
        else return 0;
        })
      .call(force.drag)
      .on("dblclick", function(d) {
	console.log(d.Name);
	sn = d.Name.split(" ");
	sn = sn[sn.length-1];
	console.log(sn);
	if (sn == "Berners-Lee")
		window.location = "http://178.62.200.142/ossn/u/Timmy";
	else if (sn == "Fischetti")
		window.location = "http://178.62.200.142/ossn/u/Fishy";
       });


  node.append("text")
      .attr("dx", 15)
      .attr("dy", ".35em")
      .text(function(d) { return d.Name });

  node.append("image")
      .attr("xlink:href", "https://raw.githubusercontent.com/0xe1d1a/ossn/master/icon.png") //"http://178.62.200.142/ossn/themes/goblue/images/nopictures/users/small.jpg")//"https://cdn3.iconfinder.com/data/icons/science-collection/383/scientist-128.png") //"http://datalayer.io/ext/icons/icon-10.png")
      .attr("x", -8)
      .attr("y", -8)
      .attr("width", 29)
      .attr("height", 29);

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});

</script>

<script>
function drawg() {
  var width = 960,
      height = 500;

  var color = d3.scale.category20();

  var force = d3.layout.force()
      .charge(-200)
      .linkDistance(130)
      .size([width, height]);

  var svg = d3.select("#grapht").append("svg")
      .attr("width", width)
      .attr("height", height);

  d3.json("topics.json", function(error, graph) {
    if (error) throw error;

    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
      .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

   var gnodes = svg.selectAll("g.gnode")
          .data(graph.nodes)
          .enter()
          .append("g")
          .classed("gnode", true);

    var node = gnodes.append("circle")
          .attr("class", "node")
          .attr("r", 15)
          .style("fill", function (d) {return color(d.Topic);})
          .call(force.drag);

    var labels = gnodes.append("text")
          .attr("class", "label")
          .text(function(d) {return d.Name;});

  		var mouseover = gnodes.append("title")
  		.text(function(d) {return d.Topic_name;});


     //node.append("title")
     // .text(function(d) { return d.Name; });

    force.on("tick", function() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; })

      gnodes.attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")";});
  });
  });
}
drawg();
</script>

<script>

var margin3 = 20,
    diameter3 = 700;

var color3 = d3.scale.linear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack3 = d3.layout.pack()
    .padding(2)
    .size([diameter3 - margin3, diameter3 - margin3])
    .value(function(d) { return d.size; })

var svg3 = d3.select("#graphc").append("svg")
    .attr("width", diameter3)
    .attr("height", diameter3)
  .append("g")
    .attr("transform", "translate(" + diameter3 / 2 + "," + diameter3 / 2 + ")");

d3.json("topicsauth.json", function(error, root) {
  if (error) throw error;

  var focus = root,
      nodes = pack3.nodes(root),
      view;

  var circle = svg3.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { return d.children ? color3(d.depth) : null; })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text3 = svg3.selectAll("text")
      .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
      .text(function(d) { return d.name; });

  var node3 = svg3.selectAll("circle,text");

  d3.select("#graphc")
      //.style("background", color3(-1))
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin3]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin3]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter3 / v[2]; view = v;
    node3.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
});

d3.select(self.frameElement).style("height", diameter3 + "px");

</script>

';
   $content = ossn_set_page_layout('newsfeed', $contents);
   echo ossn_view_page($title, $content);       
}


//this line is used to register initliize function to ossn system
ossn_register_callback('ossn', 'init', 'ossn_analysis');
?>
