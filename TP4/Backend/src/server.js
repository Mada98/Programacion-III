const express = require('express');
const dotenv = require('dotenv');

const rutaPersonas = require('./routes/personas.route.js')
const morgan = require('morgan');
const cors = require('cors')
const methodOverride = require('method-override');

dotenv.config()

class Server {
  constructor(template = process.env.TEMPLATE || 'ejs') {
    this.app = express()
    this.port = 3001
    this.middleware()
    //this.cors()
    this.engine(template)
    this.rutas()
  }

  engine(template) {
    try {
      require.resolve(template);

      this.app.set('view engine', template)
      this.app.set('views', './src/views/' + template)
    } catch (error) {
      console.log('Error al configurar el motor de plantillas:', template)
    }
  }
  
  middleware() {
    this.app.use(methodOverride('_method'));
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(express.static('public'));
    this.app.use(cors({
      origin: 'http://localhost:3000'
    }))
  }

  rutas() {
    this.app.use('/personas', rutaPersonas)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port} - http://localhost:3001`
      )
    })
  }
}

module.exports = Server