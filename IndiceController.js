require('dotenv-safe').load()
const { connect } = require('./IndiceRepository')
const resultadoModel = require('./ResultadoSchema')
const secaoModel = require('./SecoesSchema')
const fazerModel = require('./oQueFazerSchema')
const visaoModel = require('./PontoVistaSchema')

connect()

const resultadoRapido = () => {
    return resultadoModel.find((error, resultado_rapido) => {
        return resultado_rapido
    })
}

const getSecoes = () => {
    return secaoModel.find((error, secoes) => {
        return secoes
    })
}

const getSecoesById = (id) => {
    return secaoModel.findById(id)
}

const getAtitudes = () => {
    return fazerModel.find((error, secoes) => {
        return secoes
    })
}

const getAtitudesById = (id) => {
    return fazerModel.findById(id)
}

const getVisao = () => {
    return visaoModel.find((error, secoes) => {
        return secoes
    })
}

const getVisaoById = (id) => {
    return visaoModel.findById(id)
}

module.exports = {
    resultadoRapido,
    getSecoes,
    getSecoesById,
    getAtitudes,
    getAtitudesById,
    getVisao,
    getVisaoById
}