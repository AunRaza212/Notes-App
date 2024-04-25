

const mongoose = require("mongoose")

const connectToDb = async ()=>{
   try {
    await mongoose.connect("mongodb+srv://aunr76:mernstack123@mernstack.2m5jdpw.mongodb.net/")
    console.log("Connected to Database");
   } catch (error) {
console.log(error);    
   }
}

module.exports = connectToDb