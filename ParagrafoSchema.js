const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ParagrafoSchema = new Schema({
  paragrafos: { type: String }
})

const paragrafoModel = mongoose.model('depoimento', ParagrafoSchema)

module.exports = {
  ParagrafoSchema,
  paragrafoModel
}