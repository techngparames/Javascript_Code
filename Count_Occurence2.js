
let str="programming"

for(let i=0;i<str.length;i++){


    let count=1;

    if(str[i]==="*"){
        continue;
    }


    for(let j=i+1;j<str.length;j++){ 
        if(str[i]==str[j]){ 
            count++; 
        
            str=str.substring(0,j)+ "*"+ str.substring(j+1); //0,4
        }
    }

    console.log(str[i]+ " "+ count);
}






/*


let str="programming"


for i=0 i<str.length; i++


i=0 p
i=1 r
i=2 o

let count=1


if(str[i]=="*")

*/