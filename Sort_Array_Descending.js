



/*
let arr=[20,30,10,50,40]

arr.sort(function(a,b){

    return b-a;
});

console.log(arr);
*/



let arr=[20,30,10,50,40]
for(let i=0;i<arr.length-1;i++){


    for(let j=i+1;j<arr.length;j++){


        if(arr[i]<arr[j]){

            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);

