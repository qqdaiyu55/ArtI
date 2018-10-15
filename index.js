const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const fs = require('fs')

let PORT = Number(process.argv[2]) || 3000

const app = express()

// Tell the app to look for static files in these directories
app.use(express.static('./static'))
app.use(express.static('./build/'))

// Compression
app.use(compression())

// Use Helmet to protect against well known vulnerabilities
app.use(helmet())

// Tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes

// Check if config file exists
const CONFIG_PATH = './config.json'
if (!fs.existsSync(CONFIG_PATH)) {
  const initConfig = {
    'prefs': {},
    'extensions': []
  }
  fs.writeFile(CONFIG_PATH, JSON.stringify(initConfig))
}

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT + ' or http://127.0.0.1:' + PORT)
})

