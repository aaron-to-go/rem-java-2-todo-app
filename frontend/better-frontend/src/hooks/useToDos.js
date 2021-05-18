import {useEffect, useState} from "react";
import {addTodoApi, deleteTodoApi, getTodosApi, updateTodoApi} from "../service/TodoApi";


export function useTodos () {


    const [todos, setTodos] = useState([{description: "des", id: "123", status: "OPEN"}]);

    const addTodo = (description) => {
        addTodoApi({description: description, status: "OPEN"})
            .then((todo) => {
                const newToDos = todos.filter((item) => true)
                newToDos.push(todo)
                setTodos(newToDos)
            })
    };

    const advanceTodo = (todo) => {
        if (todo.status === "OPEN") {
            todo.status = "IN_PROGRESS";
        } else if (todo.status === "IN_PROGRESS") {
            todo.status = "DONE"
        }
        updateTodoApi(todo)
            .then((newTodo) => {
                const newTodos = todos.filter((item) => item.id !== newTodo.id)
                newTodos.push(newTodo)
                setTodos(
                    newTodos
                )
            })
    };

    const deleteTodo = (id) => {
        deleteTodoApi(id)
            .then(() => {
                setTodos(todos.filter((item) => item.id !== id))
            })
    };

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = () => {
        getTodosApi().then((data) => setTodos(data))
    };

    return {todos, addTodo, advanceTodo, deleteTodo}
}

