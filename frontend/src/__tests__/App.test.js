// import dependencies
import React from 'react'

// import react-testing methods
import {render, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import App from "../App";

test('test test 123', () => {
    render(<App/>)

    expect(screen.getByText("Super Kanban")).toBeInTheDocument()


})


