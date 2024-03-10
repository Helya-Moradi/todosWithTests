/**
 * @jest-environment jsdom
 */

import {cleanup, render} from "@testing-library/react";
import Todos from "../todos";

const todos = [
    {id: 1, todo: 'Buy a new book', completed: false},
    {id: 2, todo: 'Programming', completed: false},
    {id: 3, todo: 'Cook', completed: true},
    {id: 4, todo: 'Play', completed: false},
];

const completeTodo = jest.fn();
const deleteTodo = jest.fn();

afterEach(() => {
    cleanup();
})

test("Todos render component check", () => {
    render(<Todos todos={todos} completeTodoHandler={completeTodo} deleteTodoHandler={deleteTodo}/>)
})