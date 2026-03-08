import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constant";

const useRestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL);
        const json = await data.json();
        setRestInfo(json);
    };

    return restInfo;
}

export default useRestaurantMenu;