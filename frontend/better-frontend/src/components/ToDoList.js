import ToDoCategorie from "./ToDoCategorie";
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
    TodoListContainer:{
        display: "grid",
        gridTemplateRows: "1fr 1fr 1fr",
        gridRowGap: 15,

        padding: 10,

        backgroundColor: 'lightgrey',
    }
}))

function ToDoList({todos, updateTodo, deleteTodo}) {
    const classes = useStyles()

    return (
        <div className={classes.TodoListContainer}>
            <ToDoCategorie key = {"open"} updateTodo={updateTodo} deleteTodo={deleteTodo} categorieName={"OPEN"} todos={todos.filter((todo) => todo.status === "OPEN")}/>
            <ToDoCategorie key = {"doing"} updateTodo={updateTodo} deleteTodo={deleteTodo} categorieName={"DOING"} todos={todos.filter((todo) => todo.status === "IN_PROGRESS")}/>
            <ToDoCategorie key = {"done"} updateTodo={updateTodo} deleteTodo={deleteTodo} categorieName={"DONE"} todos={todos.filter((todo) => todo.status === "DONE")}/>
        </div>)
}

export default ToDoList;