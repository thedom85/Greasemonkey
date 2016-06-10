// ==UserScript==
// @name        TagHighlighterThemeWhite
// @namespace   https://github.com/thedom85/TagHighlighter
// @description exec JS TagHighlighter on document loaded
// @include     *
// @require     https://raw.githubusercontent.com/thedom85/TagHighlighter/master/src/taghighlighter.js
// @version     1
// @grant       none
// ==/UserScript==

//Avoid conflict

var fileref=document.createElement('script');
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", "https://raw.githubusercontent.com/thedom85/TagHighlighter/master/src/taghighlighter.js");

document.addEventListener("DOMContentLoaded", function(event) {
  taghighlighter.Hlighter("*","mondrian");
});
