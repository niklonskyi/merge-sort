const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Enter array divided by spaces: `, input => {
    const array = input.split(' ');
    console.log(mergeSort(array));
    readline.close();
});

function mergeSort(array) {
    //array with a length of 1 is sorted by default
    if (array.length <= 1) return array;

    //finding center of an array and declaring right and left sides
    let base = Math.round(array.length / 2);
    let left = array.slice(0, base);
    let right = array.slice(base, array.length+1);

    //recursively sorting both sides
    left = mergeSort(left);
    right = mergeSort(right);

    //return merging of left and right sides
    return merge(left, right);
}

function merge(left, right) {
    let result = [];

    //while left and right have elements
    while (left.length !== 0 && right.length !== 0) {
        if (left[0] <= right[0]) {
            //if first element is lesser or equals than right element,
            //push left's first element to result
            result.push(left[0]);
            //delete that element
            left.splice(0, 1);
        }
        else {
            //do the same thing if right's element is lesser
            result.push(right[0]);
            right.splice(0, 1);
        }
    }

    //loops for situations when there are still elements in one of the sub-arrays
    //only one of these loops may be activated
    while (left.length !== 0) {
        result.push(left[0]);
        left.splice(0, 1);
    }

    while (right.length !== 0) {
        result.push(right[0]);
        right.splice(0, 1);
    }

    return result;
}