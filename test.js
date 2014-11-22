var numbers = [1,2,3,4,5,6];


// for (i=0; i< numbers.length; i ++){
//   for (i=0; i<3; i++){
//     var chosen = Math.floor(numbers.length*Math.random());
//     var deal = numbers[chosen];
//     console.log(deal);
//     numbers.splice(chosen, 1);
//   }
//   console.log(numbers)
// }





var  numbers = array.length, temporaryValue, randomIndex ;

while (0 !== numbers) {

 numbers = Math.floor(Math.random() * numbers);
    currentIndex -= 1;

temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
   }