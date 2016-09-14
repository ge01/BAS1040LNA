


function largestOfFour(arr) {
  var largestArray = [];

  for (var i=0; i< arr.length; i++) {
    //console.log(arr[i].sort(function(a,b){return b - a;}));
    arr[i].sort(function(a,b){return b - a;});


      largestArray.push(arr[i][0]);
      //console.log(largestArray);

    //if (arr[i][0]){
      //largestArray = arr[i].shift();
    //}

  }
  console.log(largestArray);
  //console.log(arr);
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
var array = [4, 5, 1, 3];
array.sort(function(a,b){
  return b - a;
});
console.log(array);
*/
