'use strict';

function diff(arr1, arr2) {
  var longerArr = arr1.length > arr2.length ? arr1 : arr2,
    shorterArr = arr1.length > arr2.length ? arr2 : arr1,
    match,
    newArr = [];

  // First compare arr1 with arr2, then arr2 with arr1
  for (var i = 0; i < longerArr.length; i++) {
    for (var j = 0; j < shorterArr.length; j++) {
      if (longerArr[i] == shorterArr[j]) {
        match = true;
        break;
      } else {
        match = false;
      }
    }

    if (!match) {
      newArr.push(longerArr[i]);
      match = false;
    } else {
      continue;
    }
  }

  for (var i = 0; i < shorterArr.length; i++) {
    for (var j = 0; j < longerArr.length; j++) {
      if (shorterArr[i] == longerArr[j]) {
        match = true;
        break;
      } else {
        match = false;
      }
    }

    if (!match) {
      newArr.push(shorterArr[i]);
      match = false;
    } else {
      continue;
    }
  }

  console.log(newArr);

  return newArr;
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
