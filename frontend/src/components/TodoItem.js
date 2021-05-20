import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import {Link, useHistory} from 'react-router-dom'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {Button} from "@material-ui/core";

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onAdvance: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
}

export default function TodoItem({ todo, onAdvance, onRemove }) {

    const history = useHistory()

    const onDetail = () => {
            const path = '/todo/' + todo.id;
        history.push(path);
    }

  return (
    <Todo>
      <p>{todo.description}</p>
      <ButtonGroup size={"small"} color={"secondary"}>
               <Button color={"secondary"} onClick={() => onRemove(todo.id)}>Delete</Button>
          <Button color={"primary"} onClick={() => onDetail()}>Details</Button>
        {todo.status !== 'DONE' && (
          <Button color={"primary"} onClick={() => onAdvance(todo)}>Advance</Button>
        )}
      </ButtonGroup>
    </Todo>
  )
}

const Todo = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  padding: 24px;

  p {
    text-align: center;
  }
`
/*const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`*/
