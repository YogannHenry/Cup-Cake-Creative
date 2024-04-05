import SbCard from "../reusableUX/Card";
import { formatPrice } from "../../utils/maths";
import styled from "styled-components";
import { theme } from "../../assets/theme/index";

export default function CupCake({ cupcake }) {
  const cupcakePrice = formatPrice(cupcake.price);

const SbCardStyled = styled.div`
color:${theme.colors.primary_cake};
`;

  return (
    <SbCardStyled>
    <SbCard
      key={cupcake.id}
      image={cupcake.imageSource}
      title={cupcake.title}
      price={cupcakePrice}
      width={"220px"}
      height={"280px"}
      button={true}
      shadow={true}
      buttonTitle={"Ajouter"}
      fontFamily={"Pacifico"}
    />
    </SbCardStyled>
  );
}
