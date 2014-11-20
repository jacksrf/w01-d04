var x = process.argv[2];
var i = 0;
var o = '';


while (i < x.length) {
  var n = x.charAt(i);
    if (n === "o") {
      o += (x[i])
    }
  i++;
}
if (o.length > 1) {
  console.log("valid");
}
else {
  console.log("invalid");
}
