<?php

define('__OSSN_HELLO_WORLD__', ossn_route()->com . 'SWvisualize/');

$html = "The following graph depicts the connections between members";

//this function is use to initilize ossn
function ossn_analysis() {


  //$icon = ossn_site_url("components/mycom/images/icon.png"); icon for the link
    ossn_register_sections_menu("newsfeed", array(
        "text" => "Graph Viewer",
        "url" => "graph",
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

}

function ossn_sw_event_pagehandler(){
   if (!ossn_isLoggedin()) {
            ossn_error_page();
   }
   $title = ossn_print('Event Viewer');
   $contents['content'] = '



';
   $content = ossn_set_page_layout('newsfeed', $contents);
   echo ossn_view_page($title, $content);       
}

function ossn_sw_pagehandler(){
   if (!ossn_isLoggedin()) {
            ossn_error_page();
   }
   $title = ossn_print("Graph Viewer");
   $contents['content'] = '

	<script src="//d3js.org/d3.v3.min.js"></script><strong> 

<h3 align="center"> This graph shows the relations between the researchers (based on Google Scholar) </h3>
	<div id="graph"></div>
	<br>
<h3 align="center"> The relations between the researchers defined by topics(based on Google Scholar) </h3>
	<div id="grapht"></div>
   <script src="http://d3js.org/d3.v3.min.js"></script>
<script>

var width = 960,
    height = 500;
var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-200)
    .linkDistance(90)
    .size([width, height]);

var svg = d3.select("#graph").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("auth.json", function(error, graph) {
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

  var node = svg.selectAll(".node")
      .data(graph.nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 15)
      .style("fill", "#00FFFF")
      .call(force.drag);


node.append("title")
    .text(function(d) { return d.Name; });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  });
});

</script>

<script>

  var width2 = 960,
      height2 = 500;

  var color2 = d3.scale.category20();

  var force2 = d3.layout.force()
      .charge(-200)
      .linkDistance(120)
      .size([width2, height2]);

  var svg2 = d3.select("#grapht").append("svg")
      .attr("width", width2)
      .attr("height", height2);

  d3.json("topics.json", function(error, graph) {
    if (error) throw error;

    force2
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link2 = svg2.selectAll(".link")
        .data(graph.links)
      .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node2 = svg2.selectAll(".node")
        .data(graph.nodes)
      .enter().append("circle")
        .attr("class", "node")
        .attr("r", 15)
        .style("fill", function(d) { return color2(d.Topic); })
        .call(force2.drag);

    node2.append("title")
        .text(function(d) { var show= (d.Name + " : " + d.Topic_name); return show });

    force2.on("tick", function() {
      link2.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node2.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });
  });

</script>

';
   $content = ossn_set_page_layout('newsfeed', $contents);
   echo ossn_view_page($title, $content);       
}


//this line is used to register initliize function to ossn system
ossn_register_callback('ossn', 'init', 'ossn_analysis');
?>
