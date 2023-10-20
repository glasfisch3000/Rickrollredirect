const express = require("express")
const server = express()
const http = require("http").Server(server)
const port = 80

server.get("/", (req, res) => {
  res.redirect("https://betterrickrollredirect.github.io/")
  console.log("rickrolled")
})

http.listen(port, () => {
  console.log("listening")
});
