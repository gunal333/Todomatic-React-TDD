import React from "react";
import {render} from '@testing-library/react';
import TodoList from "./TodoList";

describe("Basic rendering of TodoList Component", () => {
    it("Should Render the Todolist", () => {
        const { getByTestId } = render(<TodoList/>);
        expect(getByTestId("todo-list")).toBeDefined();
    });
}); 