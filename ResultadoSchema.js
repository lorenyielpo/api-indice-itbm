const mongoose = require('mongoose')
const { PorcentagemSchema } = require('./PorcentagemFinalSchema')
const { ResumoSchema } = require('./ResumoSchema')
const Schema = mongoose.Schema;
const ResultadoSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  edicao: { type: String },
  porcentagem_final: [PorcentagemSchema],
  resumo_porcentagem: [ResumoSchema]
})

const resultadoModel = mongoose.model('resultado_rapido', ResultadoSchema, 'resultado_rapido')


module.exports = resultadoModel