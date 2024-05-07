import styled from 'styled-components';
import SbButton  from './button';
import CupCakeContext from "../../Contexts/CupCakeContext";
import { useContext } from 'react';
import { useIsAdmin } from '../../Contexts/IsAdminContext';
import { theme } from '../../assets/theme/index'




const StyledCard = styled.div`
    background-color: ${props => props.cardIsSelectedByUSer ? theme.colors.primary_cake : 'white'};
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: ${props => props.width ? props.width : '200px'};
    height: ${props => props.height ? props.height : '280px'};
    box-shadow: ${props => props.shadow ? '-8px 8px 20px 0px rgb(0 0 0 / 20%)' : 'none'};

    h3 {
        font-family: ${props => props.fontFamily ? props.fontFamily : "Open-sans" };

    }

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

// eslint-disable-next-line react/prop-types
const SbCard = ({ image, title, buttonTitle, price, button, shadow, width, height, fontFamily, id, cardIsSelectedByUSer }) => { 
    const { cupCakesContext, setCupCakesContext, setSelectedCupCakeContext, selectedCupCakeContext } = useContext(CupCakeContext);
  const { isAdmin } = useIsAdmin(); 
    
    const handleDelete = (cupCakesId) => {
        setCupCakesContext((cupCakes) => {
            return cupCakes.filter((cupCake) => cupCake.id !== cupCakesId);
        });
    }

    const handleCupCakeSelection = () => {
        const cupCake = cupCakesContext.find((cupCake) => cupCake.id === id);
        setSelectedCupCakeContext(cupCake)
    };

    const imageCupCake = `/src/assets${image}`;
    return (
        <StyledCard 
        shadow={shadow} 
        width={width} 
        height={height}
        fontFamily={fontFamily}
        cardIsSelectedByUSer={cardIsSelectedByUSer}
        onClick={handleCupCakeSelection}>
            {/* <img src={cupCakeImg} alt="card" /> */}
            {isAdmin && (
            <SbButton title="Delete" onClick={() => handleDelete(id)} radius={true}/>
        )}
            {image && <img src={imageCupCake} alt="card" />}
            <h3>{title}</h3>
            <footer>
                <p>{price}</p>
                <div className="button-container">
                { button && <SbButton title={buttonTitle} onClick={button.onClick} radius={true}/>}
                </div>
            </footer>
        </StyledCard>
    );
};

export default SbCard;
