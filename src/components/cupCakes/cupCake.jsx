import SbCard from "../reusableUX/Card";
import { formatPrice } from "../../utils/maths";

export default function CupCake({ cupcake }) {
  console.log("cupcake:", cupcake);
  const cupcakePrice = formatPrice(cupcake.price);
  console.log("cupcakePrice:", cupcakePrice);
  const width = "220px";
  const height = "280px";
  const buttonTitle = "Ajouter";

  return (
    <SbCard
      key={cupcake.id}
      image={cupcake.imageSource}
      title={cupcake.title}
      price={cupcakePrice}
      width={width}
      height={height}
      button={true}
      shadow={true}
      buttonTitle={buttonTitle}
    />
  );
}
