

class Reverse{
    
}
let str="Hello World Javascript"
let words=str.split(" ");
let result= "";


for(let word of words){

    let reverse= "";

    for(let i=word.length-1;i>=0;i--){
        reverse+=word[i] //t
       
    }

    result+=reverse+ " "; 
    


}

console.log(result.trim());

/*

Hello World Javascript

olleH dlroW tpircsavaJ



let str="Hello World Javascript"

let words=str.split(" ");


["Hello", "World", "Javascript"]


Loop Through each word

Reverse each word using loop

store reversed words into new string

print


*/