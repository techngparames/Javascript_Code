

let arr=[10,20,30,20,10,20,40]

let maxCount=0;
let maxElement=arr[0];

for(let i=0;i<arr.length;i++){
  

    let  count=0

    for(let j=0;j<arr.length;j++){

        if(arr[i]===arr[j]){

            count++;
        }
    }

    if(count>maxCount){

        maxCount=count;
        maxElement=arr[i];

    }
}

console.log("Maximum Repeated Element : "+ maxElement);
console.log("Count : "+ maxCount);

/*
arr=[10,20,30,20,10,20,40]


Output=20s
Count=3

maxcount= higest occurence count
maxelement=element with highest occurence

maxcount=0;
maxElement=arr[0]

Outer Loop ==> Select Each element
Inner Loop ==> Compare with every element

If both are equal,increment count

If count > maxcount ==> Update
maxcount
maxelement



print max repeated element and its count





*/