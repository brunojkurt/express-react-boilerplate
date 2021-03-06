import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

const allowedOrigins = [`${process.env.SPA_URL}`]

const port = process.env.PORT || 3333

const app = express()
app.use(express.json())

app.use(cors({
  origin: function(origin, callback) {
    if(!origin) return callback(null, true)

    if(allowedOrigins.indexOf(origin) === -1) {
      return callback(
        new Error('The CORS policy for this site does not allow access from the specified origin.'),
        false
      )
    }

    return callback(null, true)
  }
}))

app.use(routes)
app.use('/public', express.static(path.resolve(__dirname, '..', 'public')))

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m', `SERVERINIT: 🚀🚀 ${process.env.API_URL}`)
})