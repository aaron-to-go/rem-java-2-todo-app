import TodoForm from "../components/TodoForm";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import {Route, useParams} from "react-router-dom";
import Page from "../components/Page";
import Main from "../components/Main";


export default function EditPage({todos, updateTodo}){
    const { id } = useParams()

    const todo = todos.find(item => item.id === id)

    if (!todo) {
        return null
    }

    return(
        <Page>
            <Header />
            <Navigation />
            <Main>
                <TodoForm todo={todo} updateTodo={updateTodo}/>
            </Main>
        </Page>
    )
}