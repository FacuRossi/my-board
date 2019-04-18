const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let boardSchema = new Schema({  
  desc: String,
  name: String,
})

module.exports = mongoose.model('Board', boardSchema)