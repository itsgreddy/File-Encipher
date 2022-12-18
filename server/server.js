const express = require("express") // This will take the express library we installed with npm and allow us to access it
const app = express() // We are calling the express as function and storing it varibale called app
// This app allows us to take all different server code we need to set up different routing

app.set("view engine", "ejs") // We are specifing to use the ejs engine or library

// app.get("/") // Creates a get route and it is essentially our index page
app.get("/", (req, res) => { // Giving it a function which has a request and response | These varibales allow us to modify how diff requests behaves
    // form input, response back to user 
    // For index page it's simple because we just have to send a page
    res.render("index") // Index view
})

app.post("/upload", (req, res) => { // We need to listen to a post request to "/upload" url
    res.send("Lockdown Baby!")
})

app.listen(3000) // To start our app | Listening on port 3000