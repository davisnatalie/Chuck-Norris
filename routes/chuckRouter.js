/*

    IMPORTS

*/

const express = require("express");
const router = express.Router();
const axios = require("axios"); // `npm install axios`
 
/*

    SINGLE ROUTE TO THE API

*/

// Contacting another server requires an async function
router.get("/", async (req, res) => {

    // try/catch block is standard for HTTP requests
    try {
        // This variable will contain the response from the API. Keyword `await` is used to resolve the axios promise
        let chuck = await axios.get("https://api.chucknorris.io/jokes/random");

        console.log(chuck.data)

        res.render("home", {text: chuck.data})

    } catch (error) {

        console.log(error)

    }

})

 

module.exports = router;