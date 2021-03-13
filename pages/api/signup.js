import jwt from "jsonwebtoken"


const RandomKey = "This is just a random test key"


export default (req, res) => {
    if (!req.body) {
        res.statusCode = 404;
        res.end("Error")
        return;
    }



    res.json({
        token: jwt.sign(req.body, RandomKey)
    })





}
