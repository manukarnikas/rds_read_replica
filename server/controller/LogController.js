const LogService  = require('../service/LogService');

const getLog = async (req,res)=>{
    try{
        const result = await LogService.getLog(req.params.id);
        res.status(200);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const addLog = async (req,res)=>{
    try{
        const result = await LogService.addLog(req.body);
        res.status(201);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const updateLog = async (req,res)=>{
    try{
        const result = await LogService.updateLog(req.params.id,req.body);
        res.status(200);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const deleteLog = async (req,res)=>{
    try{
        const result = await LogService.deleteLog(req.params.id);
        res.status(204);
        res.send("Deleted Successfully");
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    addLog,
    getLog,
    updateLog,
    deleteLog
  };
  