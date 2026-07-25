let arr=[1,2,3,5]
let n=arr.length+1;

let expectedSum=0;
let actualSum=0;


for(let i=0;i<=n;i++){

    expectedSum+=i;
}

for(let i=0;i<arr.length;i++){
    actualSum+=arr[i];
}

let missingNumber=expectedSum-actualSum;

console.log("Missing Number : "+ missingNumber);


/*
1 to n

[1,2,3,5]
Missing Number=4



[1,2,3,5] 
Missing=3

n=arr.length+1;

1+2+3+4+5=15

Actual=1+2+3+5=11
Subtract the actual sum from expected sum
 Missing Number=Expected sum-Actual Sum

=15-11
=4

Print Missing Number
*/