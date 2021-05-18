import './App.css';
import ToDoList from "./components/ToDoList";
import {useEffect, useState} from "react";
import {addTodoApi, deleteTodoApi, getTodosApi, updateTodoApi} from "./service/TodoApi";
import Input from "./components/Input";
import sound from "./resources/Smoke Weed Everyday.mp3"
import {useTodos} from "./hooks/useToDos";


export default function App() {

const {todos, addTodo, advanceTodo, deleteTodo} = useTodos();

  return (
    <div className="App">
        <audio controls autoplay>
            <source src={sound} type="audio/mpeg"/>
        </audio>
        <ToDoList todos={todos} updateTodo={advanceTodo} deleteTodo={deleteTodo}/>
        <Input addToDo={addTodo}/>
    </div>
  );
}