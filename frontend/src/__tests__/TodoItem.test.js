import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoItem from "../components/TodoItem";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function mockOnRemove() {
}

function mockOnAdvance() {
}

test("TodoItem Advance button existence test", () => {
    render(<Router><TodoItem todo={{
            id: "1",
            description: "test",
            status: "OPEN"
        }}
                             onRemove={mockOnRemove}
                             onAdvance={mockOnAdvance}/>
        </Router>
    )
    expect(screen.getByText("Advance")).toBeInTheDocument()

})

test("TodoItem Advance button not existence test", () => {
    render(<Router><TodoItem todo={{id: "5", description: "hallo", status: "DONE"}} onRemove={mockOnRemove}
                             onAdvance={mockOnAdvance}/></Router>)

    expect(screen.queryByText("Advance")).not.toBeInTheDocument()
})

