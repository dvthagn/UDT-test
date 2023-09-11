import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button"; // Import the component you want to test

describe("Button component", () => {
  it("renders a button with the given text", () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });
});
