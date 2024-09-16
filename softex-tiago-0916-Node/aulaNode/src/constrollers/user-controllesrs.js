import { users } from "../models/user.js";

export function getAllUsers(req,res){
    // res.send('doideira')
    res.json(users);
}

export function getUsersById(req,res){
    const findUser = users.find((user) => user.id == req.params.id);
    if(!findUser) return res.send('user not found');
    res.send(findUser);
}

