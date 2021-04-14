const express = require('express')
const app = express()

const routesReport = require('rowdy-logger').begin(app)

const path = require('path')
const replaceInFile = require('replace-in-file')


app.use(async (req, res, next) => {
  const filepath = path.join(__dirname, 'main.js')
  if (process.env.NODE_ENV === 'production') {
    await replaceInFile({
      files: filepath,
      from: 'http://localhost:3010/',
      to: 'https://soloproject2.herokuapp.com'
    })
  }
  next()
})

app.use(express.static('public') )
app.use('/images',express.static('../images') )

app.get('/', (req, res) => {
  const filepath = path.join(__dirname, 'index.html')
  res.sendFile(filepath)
})

app.get('/main.js', async(req, res) => {
  const filepath = path.join(__dirname, 'main.js')
if(process.env.NODE_ENV === 'production'){
  await replaceInFile({
    files: filepath,
    from:'http://localhost:3010/',
    to:'https://soloproject2.herokuapp.com'
  })
}
  res.sendFile(filepath)
})
  

app.get('/style.css', (req, res) => {
  const filepath = path.join(__dirname, 'style.css')
  res.type('css').sendFile(filepath)
})
const port = process.env.PORT || 3010
app.listen(port, () => {
    routesReport.print()
})