// ==UserScript==
// @name        ColorRandom HtmlElements
// @namespace   https://github.com/thedom85/Greasemonkey/blob/master/ColorRandom_HtmlDiv.js
// @include     *
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// ==/UserScript==
 
//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function()
{
	var colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
	$("*").find("div").each(function() {    
		$(this).css("border-color", colors[(Math.floor(Math.random() * (5 - 1 + 1)) + 1)] ).css("border-style","solid").css("border-width","medium");
	});
});
