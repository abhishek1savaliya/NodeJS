const dbconnect = require('./mongodb');

const update = async ()=>{
  let data = await dbconnect();
  let result = await data.updateMany(
   { Age : 21},
   {
      $set:{Age : 21,Name:"Radhe Radhe"}
   })
  console.warn(result);
}

update();