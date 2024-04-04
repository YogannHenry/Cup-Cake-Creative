import SbCard from '../reusableUX/Card';
import {formatPrice} from '../../utils/maths';

export default function CupCake({ cupcake }) {

    console.log("cupcake:", cupcake);
   const cupcakePrice = formatPrice(cupcake.price);
   console.log("cupcakePrice:", cupcakePrice);

    return (
                <SbCard key={cupcake.id} image={cupcake.image} title={cupcake.title} price={cupcakePrice} button={cupcake.button} />
    );
}
