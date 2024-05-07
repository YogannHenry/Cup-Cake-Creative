import { createContext } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";

const CupCakeContext = createContext({
    cupCakesContext: fakeMenu,
    setCupCakesContext: () => {},

    selectedCupCakeContext: "",
    setSelectedCupCakeContext: () => {}
});

export default CupCakeContext;
