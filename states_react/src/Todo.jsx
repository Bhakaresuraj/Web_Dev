import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    let [Todo, updateTodo] = useState([]);
    let [newTask, setnewTask] = useState("");

    let addNewTask = () => {
        updateTodo((prevTodo) => {
            return [...prevTodo, { task: newTask, id: uuidv4() }]
        });
        setnewTask("");
    }
    let getNewTodo = (event) => {
        setnewTask(() => {
            return event.target.value;
        })
    }
    let deleteTodo = (id) => {
        updateTodo((prevTodo) => (Todo.filter((prevTodo) => (prevTodo.id != id))));

    }

    let upper = (id) => {
        // updateTodo(() => {
        //     return Todo.map((todo) =>{
        let newarr=Todo.map((todo) => {
            if (todo.id == id) {
                return ({ ...todo, task: todo.task.toUpperCase() })
            }
            else {
                return { ...todo };
            }
        })
        updateTodo(newarr);
        console.log(newarr);

    }
    return (
        <div>
            <input type="text" value={newTask} onChange={getNewTodo} placeholder="Enter your task ...!" />
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>

            <br /><br /><br /><br />
            <hr />
            <h1>Tasks To Do</h1>
            <ul>
                {
                    Todo.map((el) => (<li key={el.id}>
                        <span>{el.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(el.id)}>delete</button>
                        < button key={el.id} onClick={() => upper(el.id)}>Upper all</button>
                    </li>))
                }
            </ul>

        </div >
    )
}

export default Todo;