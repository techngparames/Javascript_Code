



let str="Hello";
let vowels=0;
let consonants=0;

str=str.toLowerCase();

for(let ch of str){

    if("aeiou".includes(ch)){
        vowels++;
    }
    else if(ch>='a' && ch<='z'){
        consonants++;
    }
}

console.log("Vowels : ", vowels);
console.log("Consonants : "+ consonants)



/*
vowels=a e i o u
consonants= except a e i o u 



Input:   H e l l o
Vowels:2 
COnsonants: 3



let str="Hello";
let vowels=0;
let consonant=0;

str=str.toLowerCase();

for(let ch of str)


str= "Hello"



Character          Vowel                    Consonant            Vowels            Consonants

H                   No                          Yes                0                   1
e                   Yes                          No                1                   1
l                   NO                           Yes               1                   2
l                   No                           Yes               1                   3
o                   Yes                           NO               2                   3


 */