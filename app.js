var express = require("express")
var app = express()
var eta = require("eta")

app.engine("eta", eta.renderFile)

app.set("view engine", "eta")

app.set("views", "./views")

eta.configure({
    cache: true, // Make Eta cache templates
    tags: ["<%", "%>"],

  })

app.get("/", function (req, res) {
  res.render("template", {
    favorite: "Eta",
    name: "Ben",
    reasons: ["fast", "lightweight", "simple"]
  })
})

app.listen(8000, function () {
  console.log("listening to requests on port 8000")
})