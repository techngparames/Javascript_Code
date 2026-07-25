let arr1=[10,20,30,40];
let arr2=[20,40,50,60];

for(let i=0;i<arr1.length;i++){

    for(let j=0;i<arr2.length;j++){

        if(arr1[i]==arr2[j]){

            console.log(arr1[i]);
            break;
        }
    }
}



/*
let arr1=[10,20,30,40];
let arr2=[20,40,50,60];


Output:20,40

for i=0;i<arr1.length

for j=0;j<arr2.length

arr1[i]==arr2[i]
Print common element

break

contiue until all elements are checked

*/