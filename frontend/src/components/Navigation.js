import {NavLink, useHistory} from 'react-router-dom'
import styled from 'styled-components/macro'
import {AppBar, Tab, Tabs} from "@material-ui/core";

export default function Navigation() {

    const history = useHistory();

    const handleChange = (event, value) => {
        console.log(value)
        history.push(value)
    }

  return (
        <AppBar position={"static"}>
            <Tabs value={history.location.pathname} onChange={handleChange}>
                <Tab value={"/"} label={"Home"} />
                <Tab value={"/todos/open"} label={"Open"}/>
                <Tab value={"/todos/doing"} label={"Doing"}/>
                <Tab value={"/todos/done"} label={"Done"}/>
            </Tabs>
        </AppBar>
  )
}

// const Wrapper = styled.nav`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   justify-items: center;
// `
