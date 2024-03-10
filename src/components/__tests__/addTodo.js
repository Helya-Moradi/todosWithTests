/**
 * @jest-environment jsdom
 */

import {cleanup, fireEvent, render} from "@testing-library/react";
import AddTodo from "../addTodo";
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup();
})

test("AddTodo renders without crashing", () => {
    render(<AddTodo/>)
})

test("AddTodo contains input field and is focused on load", () => {
    const {getByTestId} = render(<AddTodo/>)

    const inputField = getByTestId("todo-input");

    inputField.focus();
    expect(inputField).toHaveFocus();
})

test("AddTodo change input value successfully", () => {
    const {getByTestId} = render(<AddTodo/>);

    const inputField = getByTestId("todo-input");

    fireEvent.change(inputField, {target: {value: 'newTodo'}});
    expect(inputField.value).toBe("newTodo")
})

test("Check not call addTodo if input is empty", () => {
    const addTodoHandler = jest.fn();
    const {getByTestId} = render(<AddTodo addTodoHandler={addTodoHandler}/>);
    const button = getByTestId("button");
    fireEvent.click(button);

    expect(addTodoHandler).not.toHaveBeenCalledTimes(1);
})

test("AddTodo work successfully", () => {
    const addTodoHandler = jest.fn();
    const {getByTestId} = render(<AddTodo addTodoHandler={addTodoHandler}/>);

    const inputField = getByTestId("todo-input");
    const button = getByTestId("button");
    fireEvent.change(inputField, {target: {value: 'todo'}});
    fireEvent.click(button);

    expect(addTodoHandler).toHaveBeenCalledTimes(1);
    expect(addTodoHandler).toHaveBeenCalledWith('todo')
})