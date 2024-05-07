/* eslint-disable react/prop-types */
import styled from "styled-components";

const AdminBarContainer = styled.div`
  position: fixed;
  left: 60px;
  background-color: #ffffff;
  width: 92%;
  color: black;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s ease;
  border: 1px solid #b9b9b9;
`;

const AdminBarButton = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 200px;
  height: max-content;
  border-radius: 10px 10px 0 0;
  top: 10px;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }

  &:focus {
    background-color: black;
    color: white;
  }
`;

const AdminBarTabsContainer = styled.div`
 display: flex;
`;

const AdminBarContent = styled.div`
  padding: 50px;
  width: 100%;
`;

const AdminBar = ({ onArrowClick, isExpanded, children, onTabChange }) => {
  
  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

   
  return (
    <div style={{ position: "relative" }}>
      <AdminBarContainer
        style={{
          height: isExpanded ? "33vh" : 0,
          bottom: isExpanded ? "20px" : "65px",
        }}
      >
        <AdminBarTabsContainer >
          <AdminBarButton onClick={onArrowClick}>
            <span>↑</span>
          </AdminBarButton>
          <AdminBarButton onClick={() => handleTabClick("AddProductForm")}>
        <span>+ Ajouter un produit</span>
      </AdminBarButton>
      <AdminBarButton onClick={() => handleTabClick("ModifyProductForm")}>
        <span>- Modifier un produit</span>{" "}
      </AdminBarButton>
        </AdminBarTabsContainer>
        {isExpanded && (
        <AdminBarContent>{children}</AdminBarContent>
      )}
      </AdminBarContainer>
        
       
    </div>
  );
};

export default AdminBar;
