function sumAll(arr) {
  // sort numbers
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var sum = min + max;

  for (var i = min + 1; i < max; i++) {
    sum += i;
  }

  console.log(sum);

  return sum;
}

sumAll([1, 4]);
