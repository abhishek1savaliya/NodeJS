const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'./files');
console.log(dirpath);
fs.writeFileSync(dirpath+'hello321.txt',"Hare Krishna");
for(let i=0;i<5;i++){
        fs.writeFileSync(dirpath+'/hello'+i+'.txt','simple text file');
}



