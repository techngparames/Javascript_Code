
let arr=[10,25,5,40,15]

let largest=arr[0]
let secondLargest=arr[0]

for(let i=1;i<arr.length;i++){


    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i];
    }

    else if(arr[i]>secondLargest && arr[i]!=largest){
        secondLargest=arr[i];
    }
}
console.log(secondLargest);
/*



[10,25,5,40,15]

second largest=25


let arr=[10,25,5,40,15]

let largest=arr[0];
let secondlargest=arr[0]


for(let i=1;i<arr.length;i++)

  25





*/