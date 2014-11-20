var word = process.argv[2];
var i = 0;

while (i < word.length){
  if (word.charAt(i) + word.charAt(i + 1) === "oo") {
    console.log("Agent 007");
  }
 i++;
}
