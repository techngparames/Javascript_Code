
let arr=[10,20,30,40,50,60]
let start=0;
let end=arr.length-1;

while(start<end){


    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;

    start++;
    end--




}
console.log(arr);


/*


Input =[10,20,30,40,50,60]
         0 1  2  3  4   5
         Length=6
Output=[60,50,40,30,20,10]


 i) let arr=[10,20,30,40,50,60] 


ii) 
let start=0[First Index]
let end=arr.length-1;


iii) Swap elements at start and end

iv) Increase Start and Decrease End

v) Repeat the process until start<end
                            

vi)Print Reverse Array






*/