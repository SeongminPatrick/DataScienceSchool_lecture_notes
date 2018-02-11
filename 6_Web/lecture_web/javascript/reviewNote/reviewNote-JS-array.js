// array


var arr = ['a', 'b', 'c', 'd', 'e']


// return certain location of array
    console.log(arr[2]);


// return the length of array
    console.log(arr.length);

// add array (add behind the array)
    arr.push('f');
    console.log(arr);

// add array (add infront of the array)
    arr.unshift('z');
    console.log(arr);

// remove first elements of the array
    arr.shift();
    console.log(arr);

// remove last elements of the array
    arr.pop();
    console.log(arr);

// sorting array (revere, ascending)
    arr.reverse();
    console.log(arr);
    arr.sort();
    console.log(arr);

// split array
// remove 1 elements starting form 2nd element
    arr.splice(2, 1);
    console.log(arr, arr.length);
// delete only deletes element and remain the space
    delete arr[2];
    console.log(arr, arr.length);

// using each elements from the array
    for (var i=0; i < arr.length; i++){
      console.log(arr[i]);
    }
