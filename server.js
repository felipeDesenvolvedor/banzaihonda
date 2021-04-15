const express = require("express")
const app = express()
const routes = require("./routes")
const nunjucks = require("nunjucks")

app.use(routes)

nunjucks.configure("views", {
    autoescape:true,
    express:app,
    watch:true
})
app.set("view engine", ".njk")

app.use(express.static('assets'))

const port = "8080"

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
