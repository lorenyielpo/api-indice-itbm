const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ResumoSchema = new Schema({
  porcentagem: { type: String },
  resumo: { type: String }
})

const resumoModel = mongoose.model('resumo_porcentagem', ResumoSchema)

module.exports = {
  ResumoSchema,
  resumoModel
}