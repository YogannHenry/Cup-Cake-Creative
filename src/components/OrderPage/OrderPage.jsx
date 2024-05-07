import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/reusableUX/NavBar/NavBar";
import { theme } from "../../assets/theme/index";
import CupCakes from "../../components/cupCakes/cupCakes";
import AdminBar from "../reusableUX/AdminBar/AdminBar";
import { useIsAdmin } from '../../Contexts/IsAdminContext';
import AddProductForm from "./ProductManagement/AddProductForm";
import ModifyProductForm from "./ProductManagement/ModifyProductForm";
import { useState } from "react";
import CupCakeContext from "../../Contexts/CupCakeContext";
import { fakeMenu } from "../../fakeData/fakeMenu";


const WrapperStyled = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px 50px;
  background-color: ${theme.colors.primary};
`;

const OrderPageStyled = styled.div`
  position: relative;
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
  const userName = location.state?.userName || ""; 
  const [isExpanded, setIsExpanded] = useState(false);
  const { isAdmin } = useIsAdmin(); 
  const [tabs, setTabs] = useState("");
  const [cupCakesContext, setCupCakesContext] = useState(fakeMenu);
  const [selectedCupCakeContext, setSelectedCupCakeContext] = useState(null);

  const handleArrowClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTabClick = (selectedTab) => {
    setTabs(selectedTab);
  };



  const cupCakesContextValue = {
    cupCakesContext,
    setCupCakesContext,
    selectedCupCakeContext,
    setSelectedCupCakeContext,
  };

  return (
    <CupCakeContext.Provider value={cupCakesContextValue}>
      <WrapperStyled>
        <OrderPageStyled>
          <NavBar userName={userName} />
          <CupCakes CupCake={cupCakesContext} />
          {isAdmin && (
            <div>
              <AdminBar 
                onArrowClick={handleArrowClick} 
                isExpanded={isExpanded} 
                onTabChange={handleTabClick}
              >
                {tabs === 'AddProductForm' && <AddProductForm />}
                {tabs === 'ModifyProductForm' && <ModifyProductForm />}
              </AdminBar>
            </div>
          )}
        </OrderPageStyled>
      </WrapperStyled>
    </CupCakeContext.Provider>
  );
}

export default Login;
