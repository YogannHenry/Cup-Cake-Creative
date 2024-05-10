import styled from "styled-components";
import { useState } from "react";

import CupCakeItem from "./cupCake"; 

const CupCakesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93%;
  z-index: 1;
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 50px;
    padding: 20px;
    align-items: center;
  }
`;

import PropTypes from "prop-types";

CupCakes.propTypes = {
  CupCake: PropTypes.array,
};

export default function CupCakes({ CupCake }) {

  const [ cardIsSelectedByUSer, setCardIsSelectedByUSer ] = useState(false);

  const handleCardClick = () => {
    setCardIsSelectedByUSer(!cardIsSelectedByUSer);
  }

  return (
    <CupCakesStyled>
      <div className="grid-container">
        {CupCake.slice(0, 8).map((cupcake) => ( 
          <CupCakeItem 
            key={cupcake.id}
            cupcake={cupcake}
            cardIsSelectedByUSer={handleCardClick}
            
          />
        ))}
      </div>
    </CupCakesStyled>
  );
}
