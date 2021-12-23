const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("./client"))

// set up API endpoint for id directory
app.get("/api", (request, response) => {
    response.sendFile(__dirname + "/api/directory.json")
})

// set up api endpoint for individual restaurants
app.get("/api/:restaurantId", (request, response) => {
    response.sendFile(__dirname + "/api/" + request.params.restaurantId + ".json")
})

// set up endpoint for restaurant html page

app.listen(port, () => {
    console.log('Listening on port ' + port)
})