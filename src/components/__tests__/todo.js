/**
 * @jest-environment jsdom
 */

import {cleanup, fireEvent, render} from "@testing-library/react";
import Todo from "../todo";

const todo = {
    id: '100',
    todo: 'new todo',
    completed: false
}

const completeTodo = jest.fn();
const deleteTodo = jest.fn();

afterEach(() => {
    cleanup();
})

test("Todo render component check",()=>{
    render(<Todo todo={todo}/>)
})

test("complete todo check with click",() => {
    const {getByText} = render(
        <Todo todo={todo} completeTodoHandler={completeTodo}/>
    );
    const todoItem = getByText(todo.todo);
    fireEvent.click(todoItem);

    expect(completeTodo).toHaveBeenCalledTimes(1);
    expect(completeTodo).toHaveBeenCalledWith(todo.id);
})

test("Delete todo check with click on delete span",() => {
    const {getByTestId} = render(
        <Todo todo={todo} deleteTodoHandler={deleteTodo}/>
    );
    const deleteSpan = getByTestId("delete");
    fireEvent.click(deleteSpan);

    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith(todo.id);
})