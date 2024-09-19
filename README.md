# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Recall my code

```js
function fib(n) {
    if (n == 0) return [0];
    if (n < 2) return [0,1];
    if (n < 3) return [0,1,1];
    var arr = [0, 1];
    fibHelper(arr,n);
    return arr;
}

function fibHelper(arr, max) {
    var len = arr.length;
    if (len == max + 1) return arr;
    var len = arr.length;
    arr.push(arr[len - 1] + arr[len - 2]);
    fibHelper(arr, max); //this is the recursive part
}
```
Invariant: When the recursive part, ```js fibHelper(arr, max);``` is called, every element in the array up until the i-th element will be the correct fibonacci number. This is because as the recurssion progresses, it will start with [0,1] (as long as n is above 1), and iteratively add on the next fibonacci number up until the nth.


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
I created this independently but in an effort to pass the tests, the TA helped me add/fix in this chunk of code. 
```js
    if (n == 0) return [0];
    if (n < 2) return [0,1];
    if (n < 3) return [0,1,1];
```
