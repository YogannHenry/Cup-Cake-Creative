import styled from 'styled-components';
// import { theme } from '../../assets/theme/index';
import SbButton  from './button';
// import cupCakeImg from '../../assets/images/cupcake-item.png';


const StyledCard = styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 200px;
    height: 280px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
    }



    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    
    }

    .button-container {
        width: 80px;
    }

`;

const SbCard = ({ image, title, price, button, shadow }) => { 

    // console.log("image:", `../../assets${image}`);
    const imageCupCake = `/src/assets${image}`;
    // console.log("imageCupCake:", imageCupCake);
    // console.log ("cupCakeImg:", cupCakeImg)
    
    return (
        <StyledCard shadow={shadow}>
            {/* <img src={cupCakeImg} alt="card" /> */}
            {image && <img src={imageCupCake} alt="card" />}
            <h3>{title}</h3>
            <footer>
                <p>{price}</p>
                <div className="button-container">
                { button && <SbButton title={"Ajouter"} onClick={button.onClick} radius={true}/>}
                </div>
            </footer>
        </StyledCard>
    );
};

export default SbCard;
