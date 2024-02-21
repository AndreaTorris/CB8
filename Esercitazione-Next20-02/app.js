const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const { todos } = require("./data");


app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "index.html"))
})


app.get('/AllTodos', (req,res)=>{
    res.json(todos);
})


app.get("/api/filteredTodos", (req, res) => {
    const filteredTodos = todos.map((task) => {
      const { id, todo, completed, userId } = task;
      return { id, todo, completed };
    });
    res.json(filteredTodos);
  });




  app.get("/api/filteredTodos/:taskId", (req, res) => {
    const { taskId } = req.params;
    console.log(req.params);
    const singleTask = todos.find((task) => task.id === Number(taskId));
  
    if (!singleTask) {
      return res.status(404).send("task non trovato");
    }
  
    return res.json(singleTask);
  });

  app.get("/api/filteredTodo/search", (req, res) => {
    const { search ,  limit } = req.query;
    console.log(req.query);
    let filterTask = [...todos]

    
    filterTask= filterTask.filter((task)=> task.todo.includes(search) )

    if (limit) {
        filterTask = filterTask.slice(0, limit);
      }

    res.json(filterTask);
  });


app.listen(PORT, ()=>{
    console.log ('server attivo');
})
