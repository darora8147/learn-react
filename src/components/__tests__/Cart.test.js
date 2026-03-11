import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from '../__tests__/mocks/cartMenuMockData.json';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"
import Cart from "../Cart";

describe("Cart Unit Test Cases", () => {

  global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    }));

  it("should load Menu Restaurant Component", async () => {
    await act(async () => render(
    <Provider store={appStore}>
        <BrowserRouter>
        <Header />
        <Cart />
        </BrowserRouter>
        <RestaurantMenu />
    </Provider>));

    const accordianHeader = screen.getByText("Veg Momo (6)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("itemList").length).toBe(6);

    expect(screen.getByText('Cart Items(0)')).toBeInTheDocument();

    const addBtns = screen.getAllByRole('button', { name : 'Add +'})
    fireEvent.click(addBtns[0]);
    expect(screen.getByText('Cart Items(1)')).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText('Cart Items(2)')).toBeInTheDocument();

    expect(screen.getAllByTestId("itemList").length).toBe(8);

    fireEvent.click(screen.getByRole('button', { name: 'Clear Cart'}));

    expect(screen.getAllByTestId("itemList").length).toBe(6);

    expect(screen.getByText('Cart is Empty. Please add items to proceed!!')).toBeInTheDocument();
  });
});
