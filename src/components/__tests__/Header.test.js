import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  it("should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button");

    //Assertion
    expect(loginButton).toBeInTheDocument();
  });

  it("should render header component with cart 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cartItems = screen.getByText("Cart Items(0)");

    //Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("should render header component with Cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cartItems = screen.getByText(/Cart/);

    //Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("should change from Login to Logout Button on Click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", {name: 'Login'});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: 'Logout'});

    //Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
