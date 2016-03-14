
 .node {
  stroke: #fff;
  stroke-width: 1.5px;
}

.link {
  stroke: #999;
  stroke-opacity: .6;
}

#table_container{
	height: 40%;
}

#categories_table{
	font-family: "Verdana";
	z-index:+1;
	table-layout: fixed;
	width: 100%;
	background: #b9c9fe;
	opacity: 1.0;
}

#events_table{
	font-family: "Verdana";
	width: 100%;
	z-index:+1;
	overflow-y: scroll;
	overflow-x: scroll;
	table-layout: fixed;
	opacity: 1.0;

}

#events_categories{
	background: #d8e1fc;
	font-style: white}

#events_table:td{
	text-align: center;
}

#events_controls{
	/*position:fixed;*/
	font-size: 16px;
	width: 100%;
	background: #ffd7a8;
}

.event_title{
	font-size: 13px;
}

.event_odd{
	font-size: 12px;
	background: #ffffff;
	/*border-top:1px solid #6e6c6c;*/
}

.event_even{
	font-size: 12px;
	background: #999999;
	/*border-top:1px solid #6e6c6c;*/
}

#events_categories{
	table-layout: fixed;
}

.categories{
	cursor: pointer;
}
