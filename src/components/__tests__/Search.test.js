import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../__tests__/mocks/restListMockData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";

describe("Search Functionality Test Cases", () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

  it("should Search Rest list for MK text input", async () => {
     await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));

      const cardsBeforeSearch = screen.getAllByTestId("resCard");

      expect(cardsBeforeSearch.length).toBe(7);

      const searchBtn = screen.getByRole("button", { name: "Search" });

      const searchInput = screen.getByTestId("searchInput");

      fireEvent.change(searchInput, { target: { value: "MK" } });

      fireEvent.click(searchBtn);

      const cardsAfterSearch = screen.getAllByTestId("resCard");

      expect(cardsAfterSearch.length).toBe(1);
    });

  it('should filter top rated res based upo rating', async () => {
        await act(async() => render(<BrowserRouter><Body /></BrowserRouter>));

        const cardsBeforeFilter = screen.getAllByTestId("resCard");

        expect(cardsBeforeFilter.length).toBe(7);

        const topRatedRestBtn = screen.getByRole("button", { name: "Top Rated Restaurant" });

        fireEvent.click(topRatedRestBtn);

        const cardsAfterFilter = screen.getAllByTestId("resCard");

        expect(cardsAfterFilter.length).toBe(6);
    }
);

});
