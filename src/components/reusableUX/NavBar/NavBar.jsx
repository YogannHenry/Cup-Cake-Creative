import NavBarLeft from "./NavBarComponents/NavBarLeft";
import NavBarRight from "./NavBarComponents/NavBarRight";
import styled from "styled-components";
import ToastAdmin from "../ToastAdmin";



// eslint-disable-next-line react/prop-types
export default function NavBar({ userName }) {

 

  return (
    userName && (
      <NavBarStyled>
        <NavBarLeft />
        <ToastAdmin />
        <NavBarRight userName={userName} />
      </NavBarStyled>
    )
  );
}



// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //
const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: white;
  color: white;
  height: 60px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

`;

// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //
