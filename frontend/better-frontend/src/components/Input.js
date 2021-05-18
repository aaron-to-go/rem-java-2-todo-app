import styled from "styled-components/macro";

function Input({addToDo}){
    let inputText = ""
    return(
    <Footer>
        <InputField onChange={(event) => inputText = event.target.value}/>
        <AddButton onClick ={() => addToDo( inputText )}>Add</AddButton>
    </Footer>
    )
}
export default Input

const Footer = styled.text`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`

const AddButton = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 12px;
  background-color: #f1316b;
  color: black;
  margin-top: 45px;
`
const InputField = styled.input`
  height: 40px;
  border-radius: 12px;
  background-color: lightseagreen;
  color: black; 
  
`
