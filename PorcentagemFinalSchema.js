const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PorcentagemSchema = new Schema({
  nome: { type: String },
  porcentagem_final: { type: String }
})

const porcentagemModel = mongoose.model('porcentagem_final', PorcentagemSchema)

module.exports = {
  porcentagemModel,
  PorcentagemSchema
}