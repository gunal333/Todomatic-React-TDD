import { render,fireEvent } from "@testing-library/react";
import React from "react";
import Filter from "./Filter";
import App from "../../App";

describe("Basic rendering of filter option",()=>{
    it("Should render the filter option",()=>{
        const filter = render(<Filter/>);
        expect(filter.getByTestId("filter")).toBeDefined();
    });
    it("Should have all option in the filter",()=>{
        const allOption = render(<Filter/>);
        expect(allOption.getByTestId("all")).toBeDefined();
    });
    it("Should have completed option in the filter",()=>{
        const completedOption = render(<Filter/>);
        expect(completedOption.getByTestId("completed")).toBeDefined;
    });
    it("Should have uncompleted option in the filter",()=>{
        const unCompletedOption = render(<Filter/>);
        expect(unCompletedOption.getByTestId("uncompleted")).toBeDefined;
    });
});

describe("Testing filter functionality",()=>{
    it("Should show only completed todo task when clicked on completed option",()=>{
        const {getByTestId, getAllByTestId} = render(<App/>);
        fireEvent.change(getByTestId("input-field"), {target:{value: "React"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "App"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"), {target:{value: "Using TDD"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getAllByTestId("complete-button")[0]);
        fireEvent.click(getAllByTestId("complete-button")[1]);
        fireEvent.change(getByTestId("filter"), {target:{value: "completed"}});
        expect(getAllByTestId("todo-item")[0]).toHaveTextContent("React");
        expect(getAllByTestId("todo-item")[1]).toHaveTextContent("App");
    });
    it("Should show only uncompleted todo task when clicked on uncompleted option",()=>{
        const {getByTestId,getAllByTestId} = render(<App/>);
        fireEvent.change(getByTestId("input-field"),{target:{value:"React"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"),{target:{value:"App"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"),{target:{value:"Using TDD"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getAllByTestId("complete-button")[0]);
        fireEvent.click(getAllByTestId("complete-button")[1]);
        fireEvent.change(getByTestId("filter"),{target:{value:"uncompleted"}});
        expect(getByTestId("todo-item")).toHaveTextContent("Using TDD");
    });
    it("Should show only all todo task when clicked on all option",()=>{
        const {getByTestId,getAllByTestId} = render(<App/>);
        fireEvent.change(getByTestId("input-field"),{target:{value:"React"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"),{target:{value:"App"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.change(getByTestId("input-field"),{target:{value:"Using TDD"}});
        fireEvent.click(getByTestId("add-button"));
        fireEvent.click(getAllByTestId("complete-button")[0]);
        fireEvent.click(getAllByTestId("complete-button")[1]);
        fireEvent.change(getByTestId("filter"),{target:{value:"all"}});
        expect(getAllByTestId("todo-item")[0]).toHaveTextContent("React");
        expect(getAllByTestId("todo-item")[1]).toHaveTextContent("App");
        expect(getAllByTestId("todo-item")[2]).toHaveTextContent("Using TDD");
    });
});