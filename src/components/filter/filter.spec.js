import { render } from "@testing-library/react";
import React from "react";
import Filter from "./Filter";

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
        expect(unCompletedOption.getByTestId("unCompleted")).toBeDefined;
    });
});

describe("Testing filter functionality",()=>{
    it("Should show only completed todo task when clicked on completed option",()=>{

    });
    it("Should show only uncompleted todo task when clicked on uncompleted option",()=>{
        
    });
    it("Should show only all todo task when clicked on all option",()=>{
        
    });
});