var zoom = 150;
var sheet = document.styleSheets[document.styleSheets.length - 1];
//last style sheet
sheet.insertRule("body{zoom: " + zoom + "%;}", 0);