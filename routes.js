const express = require("express")
const routes  = express.Router()

routes.get("/", (req, res) => {
    res.render("home", {name:"Felipe da silva santos"})
})

module.exports = routes