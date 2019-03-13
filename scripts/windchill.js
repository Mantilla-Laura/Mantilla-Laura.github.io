function weatherSum() {
// Input - get input and convert that string to an integer
var t = parseFloat(document.getElementById("tValue").innerHTML);
var s = parseFloat(document.getElementById("sValue").innerHTML);
// Processing - some random formula processing with the variable
var result = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + 0.4275 * (t * Math.pow(s, 0.16));

// Output - round to one decimal and output string with HTML to innerHTML of a div
document.getElementById("outputSpan").innerHTML = result;
}