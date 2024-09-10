function fib(n) {
    if (n === 0) return [0];
    if (n === 1) return [0,1];
    var arr = [0, 1];
    fibHelper(arr,n);
    return arr;
}

function fibHelper(arr, max) {
    var len = arr.length;
    if (len === max + 1) return arr;
    var len = arr.length;
    arr.push(arr[len - 1] + arr[len - 2]);
    fibHelper(arr, max);
}
