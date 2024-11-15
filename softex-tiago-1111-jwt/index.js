const express = require ("express");
const jwt = require("jsonwebtoken");
require ("dotenv").config();
const port = 3000;
const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("welcome to jwt tutorial");
});

app.post("/login", (req,res)=>{
    const user = {
        id:1,
        username : "tiaguito",
        email: "admin@mail.com",
        password: "pilantro"
    }

    if(req.body.username !== user.username || req.body.password !== user.password){
        return res.status(403).send("username or password is wrong");
    }

    jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => { res.json({ token });

    });
});

function verifyToken(req, res, next){
    const token = req.headers['authorization'];
    if (!token){
        return res.status(403).send("A token is requeired for authentication");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
        if(err) {
            return res.status(401).send("invalid token");
        }
        req.user = user;
        next();
    });
}



app.get("/protected", verifyToken, (req, res, next)=> {
    const user = req.user;
    res.json ({
        message: "protected Route",
        user
    });
});

app.get("/unprotected", (req, res, next) => {
    const user = req.user;
    res.json({
        message: "Unprotected Route",
        user
    });
});

app.listen(port, ()=>{
    console.log("server running");
})