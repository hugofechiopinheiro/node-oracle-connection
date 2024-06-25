// CONSTANTS
const { database: { port: PORT } } = require('./env.config')

// CONNECTION
require('./models')

// LIBS
const express =   require('express')

/* APPLICATION */
const app =       express()
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })

// START ORACLE CONNECTION
