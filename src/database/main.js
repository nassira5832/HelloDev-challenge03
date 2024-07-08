const mongoose= require("mongoose")

async function connectionToDb(url){
  await  mongoose.connect(url, {
        dbname: tic-tac-toe
    })
}
module.exports = connectionToDb;