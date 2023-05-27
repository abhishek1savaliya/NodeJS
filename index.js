const dbconnect = require('./mongodb');

// dbconnect().then((res) => {
//   res.find({}).toArray().then((data) => {
//     console.warn(data);
//   })
// })

// console.warn(dbconnect());

const main = async ()=>{
  let data = await dbconnect();
  data = await data.find().toArray();
  console.warn(data);
}
main();
