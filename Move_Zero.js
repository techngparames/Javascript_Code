let arr=[0,10,0,20,30,0,40]

let index=0;

for(let i=0;i<arr.length;i++){


    if(arr[i]!=0){
        arr[index]=arr[i];
        index++;
    }
}

while(index<arr.length){

    arr[index]=0;
    index++;
}
console.log(arr);


/*
arr=[0,10,0,20,30,0,40]
Output: [10,20,30,0,0]

index=0;


Loop through array

current element is not zero= arr[index] ,index++;

After all non-zero element are placed =0,0
*/