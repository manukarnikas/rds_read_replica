const UserController = require("./controller/UserController");
const BookController = require("./controller/BookController");
const LogController = require("./controller/LogController");
const { writerDB, readerDB } = require("./database/Database");
const express = require("express");
const cors = require("cors");

const app = express();

const init = async () => {
  //db
  try {
    
    await writerDB.authenticate()
    .then(()=>{
      console.log('Writer Db authenticated');
    }).catch(err=>{
      throw new Error(`Failed to connect to Writer DB with error ${err}`);
    });

    await readerDB.authenticate()
    .then(()=>{
      console.log('Reader Db authenticated');
    }).catch(err=>{
      throw new Error(`Failed to connect to Reader DB with error ${err}`);
    });

    //middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //routes

    const userRouter = express.Router();
    userRouter.get("/:id", UserController.getUser);
    userRouter.post("/", UserController.addUser);
    userRouter.put("/:id", UserController.updateUser);
    userRouter.delete("/:id", UserController.deleteUser);

    const bookRouter = express.Router();
    bookRouter.get("/:id", BookController.getBook);
    bookRouter.post("/", BookController.addBook);
    bookRouter.put("/:id", BookController.updateBook);
    bookRouter.delete("/:id", BookController.deleteBook);

    const logRouter = express.Router();
    logRouter.get("/:id", LogController.getLog);
    logRouter.post("/", LogController.addLog);
    logRouter.put("/:id", LogController.updateLog);
    logRouter.delete("/:id", LogController.deleteLog);

    app.use("/user", userRouter);
    app.use("/book", bookRouter);
    app.use("/log", logRouter);
 
    console.log('initialized routes');
    //listen
    const port = 3008;
    app.listen(port, () => {
      console.log(`Server Started on port ${port}`);
    });
  } catch (err) {
    console.log("Error while initializing app:", err)
  }
};

init();
