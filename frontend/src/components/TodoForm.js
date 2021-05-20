import {useState} from "react";
import { useHistory } from 'react-router-dom';
import {Button, IconButton} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

export default function TodoForm({todo, updateTodo}) {
    const [description, setDescription] = useState(todo.description)
    const [status, setStatus] = useState(todo.status)
    const history = useHistory();

    function handleSave(event) {
        event.preventDefault();
        updateTodo({...todo, status:status, description:description})
        history.push('/todo/' + todo.id)
    }

    return(
        <form onSubmit={handleSave}>
        <label>Description:
            <input type={"text"} onChange={(event => {setDescription(event.target.value)})} value={description}/>
        </label>
        <label>Status:</label>
            <div>
                <input onChange={(event => {setStatus(event.target.value)})} type={"radio"} id={"open"} name={"status"} value={"OPEN"} checked={status === "OPEN"}/>
                <label htmlFor={"open"}>Open</label>
                <input onChange={(event => {setStatus(event.target.value)})} type={"radio"} id={"in_progress"} name={"status"} value={"IN_PROGRESS"} checked={status === "IN_PROGRESS"}/>
                <label htmlFor={"in_progress"}>In Progress</label>
                <input onChange={(event => {setStatus(event.target.value)})} type={"radio"} id={"done"} name={"status"} value={"DONE"} checked={status === "DONE"}/>
                <label htmlFor={"done"}>Done</label>
            </div>


            <Button  onClick={(event) => {handleSave(event)}} variant="contained" color="secondary" startIcon={<SaveIcon />}>Save</Button>
            <IconButton aria-label="delete" onClick={(event) => {handleSave(event)}}>
                <SaveIcon />
            </IconButton>
    </form>
    );
}