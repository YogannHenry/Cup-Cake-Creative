/* eslint-disable react/prop-types */
import SbCard from "../reusableUX/Card";
import styled from "styled-components";
import { theme } from "../../assets/theme/index";
import { useShoppingCart } from "../../Contexts/ShoppingCartContext";

export default function CupCake({ cupcake }) {

const { addToCart } = useShoppingCart();

  return (
    <SbCardStyled>
    <SbCard
      key={cupcake.id}
      id={cupcake.id}
      image={cupcake.imageSource}
      title={cupcake.title}
      price={cupcake.price}
      width={"220px"}
      height={"280px"}
      button={true}
      shadow={true}
      buttonTitle={"Ajouter"}
      fontFamily={"Pacifico"}
      addProduct={addToCart}

    />
    </SbCardStyled>
  );
}

// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //
const SbCardStyled = styled.div`
color:${theme.colors.primary_cake};
`;

// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //