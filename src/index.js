const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const path = require('path')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

nunjucks.configure('src/views', {
  express: server,
  noCache: true
  })

server
.use(express.urlencoded({ extended: true }))
.set('view engine', 'nunjucks')
.set('views', path.join(__dirname, 'src/views'))
.use(express.static(path.join(__dirname, 'public')))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)