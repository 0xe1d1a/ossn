<?php


//this function is use to initilize ossn
function ossn_analysis() {


  //$icon = ossn_site_url("components/mycom/images/icon.png"); icon for the link
    ossn_register_sections_menu("newsfeed", array(
        "text" => "My custom link",
        "url" => "http://google.com/",
        "section" => "links",
        "icon" => ""
    ));

//this line is used to register initliize function to ossn system
ossn_register_callback('ossn', 'init', 'ossn_analysis');
?>
