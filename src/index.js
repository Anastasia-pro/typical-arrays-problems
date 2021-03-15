function max(arr) {
    let max = arr[0];
    for(let i=1; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if(arr.length === 0) {
        return 0;
    }
    return max;
}


function min(arr) {
    let min = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i]< min){
            min = arr[i];
        }
    }
    if(arr.length === 0) {
        return 0;
    }
    return min;
}

function avg(arr) {
    let sum  = 0;
    for (let i = 0; i< arr[i]; i++) sum += arr[i];
    return sum === 0 ? sum : sum / arr.length;
}
