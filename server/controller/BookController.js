const BookService  = require('../service/BookService');

const getBook = async (req,res)=>{
    try{
        const result = await BookService.getBook(req.params.id);
        res.status(200);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const addBook = async (req,res)=>{
    try{
        const result = await BookService.addBook(req.body);
        res.status(201);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const updateBook = async (req,res)=>{
    try{
        const result = await BookService.updateBook(req.params.id,req.body);
        res.status(200);
        res.send(result);
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

const deleteBook = async (req,res)=>{
    try{
        const result = await BookService.deleteBook(req.params.id);
        res.status(204);
        res.send("Deleted Successfully");
    }catch(error){
        console.log("Error:",error);
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    addBook,
    getBook,
    updateBook,
    deleteBook
  };
  