

let str="programming"
let count={}

for(let ch of str){

    if(count[ch]){

        count[ch]++;
    }

    else{

        count[ch]=1;
    }
}
for(key in count){
    console.log(key+ " "+ count[key])
}







/*

programming

Output:

p=1
r=2
o=1
g=2
a=1
m=2
i=1
n=1



str="programming"
let count={}
count=1
count+1


for(let ch of str)



*/