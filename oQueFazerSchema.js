const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const FazerSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  quem: { type: String },
  atitudes: {type: Array}
})

const fazerModel = mongoose.model('o_que_fazer', FazerSchema, 'o_que_fazer')


module.exports = fazerModel