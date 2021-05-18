import styled from "styled-components/macro";

function ToDoCard ({toDo, deleteTodo, updateTodo}) {
    return(

        <div>
            <p>{toDo.description}</p>
            <p>{toDo.id}</p>
            <p>{toDo.status}</p>
            <RedButton onClick={() => deleteTodo(toDo.id)}>Delete</RedButton>
            <YellowButton>Details</YellowButton>
            <GreenButton onClick={() => updateTodo(toDo)} hidden={toDo.status === "DONE"}>Advance</GreenButton>
        </div>
    )
}
export default ToDoCard;

const RedButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 12px;
  background-color: red;
  color: black;
  margin-top: 45px;
`
const YellowButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 12px;
  background-color: yellow;
  color: black;
  margin-top: 45px;
`
const GreenButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 12px;
  background-color: lightgreen;
  color: black;
  margin-top: 45px;
`