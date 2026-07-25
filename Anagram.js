
let str1="litsen";
let str2='silent';


let sortedStr1=str1.split("").sort().join("");
let sortedStr2=str2.split("").sort().join("");

if(sortedStr1===sortedStr2){
    console.log("Anagrams");
}
else{
    console.log("Not a Anagram");
}
/*


litsen = silent
heart=earth

let str1="litsen"
let str2="silent"


Check both string has same length

If they did not have same length that is not an anagram


sort --> sort()
join--> join()

 */