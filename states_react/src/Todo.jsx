import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    let [Todo, updateTodo] = useState([]);
    let [newTask, setnewTask] = useState("");
    let addNewTask = () => {
        updateTodo((prevTodo) => {
            return [...prevTodo, { task: newTask, id: uuidv4(), done: false }]
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
        let newarr = Todo.map((todo) => {
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
    let Done = (id) => {
        let newarr = Todo.map((todo) => {
            if (todo.id == id) {
                return ({ ...todo, done: !todo.done })
            }
            else {
                return { ...todo };
            }
        })

        console.log(newarr);
        updateTodo(newarr);
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
                        <button onClick={() => (Done(el.id))}>Done</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{el.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(el.id)}>delete</button>
                        < button key={el.id} onClick={() => upper(el.id)}>Upper case</button>
                    </li>))
                }
            </ul>

        </div >
    )
}

export default Todo;