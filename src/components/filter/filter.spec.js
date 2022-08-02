import { getByTestId } from "@testing-library/react";
import { shallow } from "enzyme";
import React from "react";

describe("Basic rendering of filter option",()=>{
    it("Should render the filter option",()=>{
        const filter = shallow(<filter/>);
        expect(getByTestId("filter")).toBeDefined();
    });
    it("Should have all option in the filter",()=>{

    });
    it("Should have completed option in the filter",()=>{

    });
    it("Should have uncompleted option in the filter",()=>{

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