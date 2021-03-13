import jwt from "jsonwebtoken"



const RandomKey = "This is just a random test key"

export default (req, res) => {
    if (!req.body) {
        res.statusCode = 404;
        res.end("Error")
        return;
    }


    // block to check if the user exists


    // return the token 

    const { token } = req.body

    res.json({
        token: jwt.sign(req.body, RandomKey)
    })








}
