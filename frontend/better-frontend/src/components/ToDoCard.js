import styled from "styled-components";
const Wrapper = styled.div`
  background-image: url("https://media.tenor.com/images/a11fa9e506233c263784673c78ef7815/tenor.gif");
  font-family: "Comic Sans MS", fantasy;
  text-align: end;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 200px;
  max-height: 450px;
  border: #00ffd9 dot-dot-dash 3px;
  animation: light 5s linear infinite;
  mix-blend-mode: color-dodge;
  border-radius: 20px;
`
const Description = styled.h2`
  color: chartreuse;
  background: hotpink;
  transform: rotate(-45deg);
`
const Status = styled.p`
  background: yellowgreen;
  color: yellowgreen;
  text-align: center;
  animation-name: spin, depth;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 3s;
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

@keyframes depth {
  0% {
    text-shadow: 0 0 #bf1111;
  }
  25% {
    text-shadow: 1px 0 #22995c, 2px 0 #9a45b8, 3px 0 #a5892b, 4px 0 #59ad39, 5px 0 black;
  }
  50% {
    text-shadow: 0 0 #ce1d1d;
  }
  75% {
    text-shadow: -1px 0 #69b83e, -2px 0 #742595, -3px 0 #956331, -4px 0 #44a33c, -5px 0 black;
  }
  100% {
    text-shadow: 0 0 #a71f1f;
  }
}
`


function ToDoCard ({toDo, deleteTodo, updateTodo}) {
    return(
        <Wrapper>
            <Description>{toDo.description}</Description>
            <Status>{toDo.status}</Status>
            <button onClick={() => deleteTodo(toDo.id)}>Delete</button>
            <button>Details</button>
            <button onClick={() => updateTodo(toDo)} disabled={toDo.status === "DONE"}>Advance</button>
        </Wrapper>
    )
}

export default ToDoCard;

