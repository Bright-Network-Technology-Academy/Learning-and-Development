function merge(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    // loop through both arrays at the same time
    while(i < arr1.length && j < arr2.length) {

        // do a comparison of the elements in arr1 and arr2
        if(arr2[j] > arr1[i]) result.push(arr1[i++]);
            // can also do arr1[i] > arr2[j] => result.push(arr2[j])

            // if you do the other case then it would be results.push(arr1[i++])
        else result.push(arr2[j++]);
    }

    // if arrays length are not equal then you have to push the rest of the elements
    while(i < arr1.length) result.push(arr1[i++]);
    while(j < arr2.length) result.push(arr2[j++]);

    return result;
}

function mergeSort(arr) {
    // check if array length is less than or equal to 1 for the base case
    if(arr.length <= 1) return arr;

    // find the midpoint of the array
    let mid = Math.floor(arr.length/2)

    // call merge sort on the arrays that have been split
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // merge left and right using merge function from above
    return merge(left, right)

    // the array will keep getting split into left and rights
    // as each left and right become length of 1
    // we call merge function to compare the elements and sorting it
    // as we come to the end of each merge sort we are returning arrays that have been sorted
    // at the end we return the whole array that has been sorted using the merge function above
}