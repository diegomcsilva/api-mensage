import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

const app = express()

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

let db = mongoose.connect('mongodb://diegomcsilva:uBhEY2Ii0t1f@cluster0-shard-00-00-tedmi.mongodb.net:27017,cluster0-shard-00-01-tedmi.mongodb.net:27017,cluster0-shard-00-02-tedmi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

routes(app)

app.listen(PORT, () => {
    console.log('Express server has been started')
})
