const {user}  = require("./database/db.js");
const modules = require("./module.js");

// modules.sayHello();

/* console.log(user[2].name)
modules.sayMyName(user[2].id) */

const saudando = user.map((user)=> modules.sayMyName(user.name))