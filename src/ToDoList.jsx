import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList(){
    let styles = {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
    }
    
    //[] -> simple array [{}] -> array of objects
    let [toDo, setToDo] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
    let [newTask, setNewTask] = useState(""); 

    let addTask = () => {
        setToDo((prevToDo) =>{
            return [...prevToDo, {task: newTask, id: uuidv4(), isDone: false}]
        });
        setNewTask("");
    }

    let updateToDoValue = (event) =>{
        setNewTask(event.target.value)
    }

    let deleteTodo = (id) =>{
        setToDo(()=> toDo.filter((toDo) => toDo.id!=id));
    }
    let style = {
        decoration: "lineThrough",
    }
    
    let upperCaseAll = () =>{
        setToDo(toDo.map((todo) =>{
            return {...todo, task: todo.task.linethrough()}
        })
    )
    }

    let upperCaseOne = (id) => {
        setToDo(toDo.map((todo) => {
            if(todo.id===id){
            return {...todo, task: todo.task.toUpperCase()}}
            else {return todo;}
        })
    )
    }

    let MarkAsDoneAll = () =>{
        setToDo(toDo.map((todo) =>{
            return {...todo, isDone: true}
        })
    )
    }

    let MarkAsDone = (id) => {
        setToDo(toDo.map((todo) => {
            if(todo.id===id){
            return {...todo, isDone: true,}}
            else {return todo;}
        })
    )
    }

    return(
        <div>
            <h1>To Do List</h1>
            <div style = {styles}>
            <input type="text" placeholder="Add a task" value={newTask} onChange={updateToDoValue}/>
                <button onClick={addTask}>Add Task</button>
            </div>
            <br /><br /><br /><br />
            <hr /> 
            <h4>Task Todo</h4>
            <ul>
                {
                    toDo.map((todo) =>(
                        <li key={todo.id}>
                            <span style={todo.isDone ?{textDecorationLine: "line-through"}: {}}>{todo.task}</span> &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp; &nbsp; 
                            {/* <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button> */}
                            <button onClick={() => MarkAsDone(todo.id)}>Mark as Done</button>
                            </li>
                    ))
                }
            </ul>
            {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
            <button onClick={MarkAsDoneAll}>Mark As Done All</button>
        </div>
    )
}