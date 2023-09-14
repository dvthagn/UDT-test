import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

// Mock the handleClick function
const mockHandleClick = jest.fn();

test("Button component renders correctly", () => {
  const { getByText } = render(
    <Button value="+" handleClick={mockHandleClick} />
  );
  const buttonElement = getByText("+");

  // Check if the button renders with the expected CSS class
  expect(buttonElement).toHaveClass("opt");

  // Simulate a click event on the button
  fireEvent.click(buttonElement);

  // Ensure that the handleClick function was called with the correct value
  expect(mockHandleClick).toHaveBeenCalledWith("+");
});
