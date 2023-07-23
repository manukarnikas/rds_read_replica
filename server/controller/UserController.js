const UserService  = require('../service/UserService');

const getUser = async (req,res)=>{
    try{
        const result = await UserService.getUser(req.params.id);
        res.status(200);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const addUser = async (req,res)=>{
    try{
        const result = await UserService.addUser(req.body);
        res.status(201);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const updateUser = async (req,res)=>{
    try{
        const result = await UserService.updateUser(req.params.id,req.body);
        res.status(200);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const deleteUser = async (req,res)=>{
    try{
        const result = await UserService.deleteUser(req.params.id);
        res.status(204);
        res.send("Deleted Successfully");
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
  };
  