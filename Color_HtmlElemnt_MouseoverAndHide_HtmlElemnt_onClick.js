// ==UserScript==
// @name         Color HtmlElemnt Mouseover And Hide HtmlElemnt onClick
// @namespace   https://github.com/thedom85/Greasemonkey/blob/master/Color_HtmlElemnt_MouseoverAndHide_HtmlElemnt_onClick.js
// @include     *
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// ==/UserScript==
 
//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function()
{
	var colors = [ "blue","blue", "red", "yellow", "green", "grey" ];
	$("*").mouseover(function() {
				$(this).css("border-color", colors[(Math.floor(Math.random() * (5 - 1 + 1)) + 1)] ).css("border-style","solid").css("border-width","medium");
		}).children().click(function(e) {
	return false;
	});
	
	$("*").mouseout(function(){$(this).css("border", "none");
		}).children().click(function(e) {
	return false;
	});
	
	$("*").click(function(){
		  $(this).hide();
	}).children().click(function(e) {
	return false;
	});
	
});
