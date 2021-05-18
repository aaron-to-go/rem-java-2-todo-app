import ToDoCard from "./ToDoCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {PropTypes} from "prop-types";

const useStyles = makeStyles(() => ({
    TodoCategorie:{
        display: "flex",
        backgroundColor: 'transparent',
        padding: 0,
    },

    ToDoCategorieHeader: {
        color: "blue",
        borderColor: "black",
        borderStyle: "solid",
        borderRightWidth: 5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,

        margin: 0,
    }
}))


function ToDoCategorie ({todos, categorieName, updateTodo, deleteTodo}) {
    const classes = useStyles()

    return(
        <div className={classes.TodoCategorie}>
            <h2 className={classes.ToDoCategorieHeader}>{categorieName}</h2>
            {todos.map((todo) => <ToDoCard updateTodo={updateTodo} deleteTodo={deleteTodo} toDo={todo} key={todo.id}/>)}
        </div>
    )
}

export default ToDoCategorie;

ToDoCategorie.propTypes = {
    todos : PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired})),
    categorieName : PropTypes.string.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}