import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("should load contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button on contact us page", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load input text on contact us page", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const inputText = screen.getByPlaceholderText("Name...");

    expect(inputText).toBeInTheDocument();
  });

  it("should load all input text on contact us page", () => {
    render(<Contact />);

    const inputText = screen.getAllByRole("textbox");

    expect(inputText.length).toBe(2);
  });
});
