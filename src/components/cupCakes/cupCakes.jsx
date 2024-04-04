import { fakeMenu } from "../../fakeData/fakeMenu";
import { useEffect, useState } from "react";
import styled from "styled-components";

import SbCard from "../reusableUX/Card";
import CupCake from "./cupCake"

const CupCakesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93%;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 50px;
    padding: 20px;
    align-items: center;
  }
`;

export default function CupCakes() {
  console.log("fakeSmallMenu:", fakeMenu);

  const [cupcakes, setCupcakes] = useState([]);

  const fetchCupcakes = () => {
    setCupcakes(fakeMenu);
  };
  useEffect(() => {
    fetchCupcakes();
  }, []);

  console.log("cupcakes:", cupcakes);

  return (
    <CupCakesStyled>
      <div className="grid-container">
        {cupcakes.map((cupcake) => (
          <CupCake
            key={cupcake.id}
            cupcake={cupcake}
          />
        ))}
      </div>
    </CupCakesStyled>
  );
}
