import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/reusableUX/NavBar/NavBar";
import { theme } from "../../assets/theme/index";
import CupCakes from "../../components/cupCakes/cupCakes";
import AdminBar from "../reusableUX/AdminBar/AdminBar";
import { useIsAdmin } from '../../Contexts/IsAdminContext';
import AddProductForm from "./ProductManagement/AddProductForm";
import ModifyProductForm from "./ProductManagement/ModifyProductForm";
import { useContext, useState } from "react";
import CupCakeContext from "../../Contexts/CupCakeContext";
import { fakeMenu } from "../../fakeData/fakeMenu";
import SbButton from "../reusableUX/button";
import { ShoppingCartProvider } from "../../Contexts/ShoppingCartContext";
import ShoppingCart from "./ShoppingCart/ShoppingCart";


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
  const { isAdmin } = useIsAdmin(); 
  const [tabs, setTabs] = useState("");
  const [cupCakesContext, setCupCakesContext] = useState(fakeMenu);
  const [selectedCupCakeContext, setSelectedCupCakeContext] = useState(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const HandleCollapseMenuAdmin = () => {
    setIsCollapse(!isCollapse);

  };

  const handleTabClick = (selectedTab) => {
    setTabs(selectedTab);
  };



  const cupCakesContextValue = {
    cupCakesContext,
    setCupCakesContext,
    selectedCupCakeContext,
    setSelectedCupCakeContext,
    isCollapse,
    setIsCollapse,
  };

  const handleOpenAdminMenuToAddProductWhenMenuIsEmpty = () => {
    setTabs('AddProductForm');
    setIsCollapse(!isCollapse);

  }


  return (
    <ShoppingCartProvider>
    <CupCakeContext.Provider value={cupCakesContextValue}>
      <WrapperStyled>
        <OrderPageStyled>

          <NavBar userName={userName} />

          { cupCakesContext.length <= 0 && ( 
            <>
          <h3>Il n'y a pas de cupcakes</h3>
          <SbButton title="Ajouter un cupcake" onClick={handleOpenAdminMenuToAddProductWhenMenuIsEmpty}/> 
          </>
        )}

        <ShoppingCart />

          <CupCakes CupCake={cupCakesContext} />
          {isAdmin && (
            <div>
              <AdminBar 
                onArrowClick={HandleCollapseMenuAdmin} 
                isExpanded={isCollapse} 
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
    </ShoppingCartProvider>
  );
}

export default Login;
