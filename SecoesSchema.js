const mongoose = require('mongoose')
const { PorcentagemSchema } = require('./PorcentagemFinalSchema')
const Schema = mongoose.Schema
const SecoesSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String },
  edicao: { type: String },
  questoes_analisadas: {type: Array},
  porcentagem_final: {type: Array}
}
)

const secaoModel = mongoose.model('secoes', SecoesSchema, 'secoes')


module.exports = secaoModel