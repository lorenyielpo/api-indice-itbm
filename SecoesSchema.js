const mongoose = require('mongoose')
const { PorcentagemSchema } = require('./PorcentagemFinalSchema')
const Schema = mongoose.Schema
const SecoesSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  nome: { type: String },
  edicao: { type: String },
  questoes_analisadas: {type: Array},
  porcentagem_final: [
    { "0-10%": [PorcentagemSchema] },
    { "11-20%": [PorcentagemSchema] },
    { "21-30%": [PorcentagemSchema] },
    { "31-40%": [PorcentagemSchema] },
    { "41-50%": [PorcentagemSchema] },
    { "51-60%": [PorcentagemSchema] },
    { "61-70%": [PorcentagemSchema] },
    { "71-80%": [PorcentagemSchema] },
    { "81-90%": [PorcentagemSchema] },
    { "91-100%": [PorcentagemSchema] }
  ]
}
)

const secaoModel = mongoose.model('secoes', SecoesSchema, 'secoes')


module.exports = secaoModel