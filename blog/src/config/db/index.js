const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/nodejs_priject', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connnect Succesfully")
  } catch(error) {
    console.log("connnect Failed")
  } 
}

module.exports = { connect };