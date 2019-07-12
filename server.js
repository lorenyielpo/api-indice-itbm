const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const servidor = express()
const indiceController = require('./IndiceController')
const PORT = process.env.PORT || 5001
const logger = (request, response, next) => {
    console.log(`${new Date().toISOString()} Request type: ${request.method} to ${request.originalUrl}`)

    response.on('finish', () => {
        console.log(`${response.statusCode} ${response.statusMessage};`)
    })

    next()
}

servidor.use(cors())
servidor.use(bodyParser.json())
servidor.use(logger)

servidor.get('/', (request, response) => {
    response.send('Olá, mundo!')
})

servidor.get('/resultado', (request, response) => {
  indiceController.resultadoRapido()
  .then(resultado => {
      response.send(resultado)           
  })
  .catch(error => {
      if (error.name === 'CastError') {
          response.sendStatus(400)
      } else {
          response.sendStatus(500)
      }
  })
})

servidor.get('/secoes', (request, response) => {
    indiceController.getSecoes()
    .then(secao => {
        response.send(secao)           
    })
    .catch(error => {
        if (error.name === 'CastError') {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
  })

  servidor.get('/secao/:secaoId', (request, response) => {
      const {secaoId} = request.params
    indiceController.getSecoesById(secaoId)
    .then(secao => {
        response.send(secao)           
    })
    .catch(error => {
        if (error.name === 'CastError') {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
  })


  servidor.get('/atitudes', (request, response) => {
    indiceController.getAtitudes()
    .then(atitudes => {
        response.send(atitudes)           
    })
    .catch(error => {
        if (error.name === 'CastError') {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
  })

  servidor.get('/atitudes/:quemId', (request, response) => {
      const {quemId} = request.params
    indiceController.getAtitudesById(quemId)
    .then(quem => {
        response.send(quem)           
    })
    .catch(error => {
        if (error.name === 'CastError') {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
  })


  servidor.get('/visoes', (request, response) => {
    indiceController.getVisao()
    .then(visoes => {
        response.send(visoes)           
    })
    .catch(error => {
        if (error.name === 'CastError') {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
  })

  servidor.get('/visoes/:quemId', (request, response) => {
      const {quemId} = request.params
    indiceController.getVisaoById(quemId)
    .then(quem => {
        response.send(quem)           
    })
    .catch(error => {
        if (error.name === 'CastError') {
            response.sendStatus(400)
        } else {
            response.sendStatus(500)
        }
    })
  })

servidor.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
