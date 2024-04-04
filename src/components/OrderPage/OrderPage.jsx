import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/reusableUX/NavBar/NavBar";
import { theme } from "../../assets/theme/index";
import CupCakes from "../../components/cupCakes/cupCakes";


const WrapperStyled = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px 50px;
  background-color: ${theme.colors.primary};
`

const OrderPageStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.2);

  h3 {
    color: #000;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    border-radius: 5px;
  }
`;

function Login() {
  const location = useLocation();
  console.log("loc:", location);
  console.log("state:", location.state);
  const userName = location.state?.userName || ""; 

  
  return (
    <WrapperStyled>
      <OrderPageStyled>
        <NavBar userName={userName} />
        <CupCakes />
      </OrderPageStyled>
    </WrapperStyled>
  );
}

export default Login;
