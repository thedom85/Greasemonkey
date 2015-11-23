// ==UserScript==
// @name        Hello World 
// @namespace   http://hayageek.com
// @include     *
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// ==/UserScript==
 
//Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function()
{
    alert("jQuery is loaded");
});
