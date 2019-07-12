const mongoose = require('mongoose')
const { ParagrafoSchema } = require('./ParagrafoSchema')
const Schema = mongoose.Schema;
const VisaoSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String },
  cargo: { type: String },
  empresa: { type: String },
  depoimento: [ParagrafoSchema]
})

const visaoModel = mongoose.model('ponto_de_vista', VisaoSchema, 'ponto_de_vista')


module.exports = visaoModel