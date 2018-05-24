function arrayStudent(array) {
  var list = 0;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.assignment, n - 1);
}

console.log(nth(arrayStudent([40, 80, 50]), 1));



const v = (list,n) => =(nth(arrayStudent([40, 80, 50]), 1));



