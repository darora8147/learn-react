import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from '../__tests__/mocks/restCardMockData.json';

import "@testing-library/jest-dom";

describe('Restaurant Card Unit Test Cases', () => {

    it('should render Restaurant card with props data', () => {
        render(<RestaurantCard restData={MOCK_DATA}/>)

        const restName = screen.getByText("Sky Cafe");

        expect(restName).toBeInTheDocument();
    })
});