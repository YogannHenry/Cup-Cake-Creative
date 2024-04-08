import styled from "styled-components";

const AdminBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: calc(100vw / 3);
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const AdminBarButton = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  height: max-content;
  border-radius: 10px 10px 0 0;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const AdminBar = ({ onArrowClick, isExpanded }) => {
  return (
    <>
    <AdminBarContainer>

      <AdminBarButton onClick={onArrowClick}>
        <span>↑</span> {/* Flèche vers le haut */}
      </AdminBarButton>
      <AdminBarButton>
        <span>+ Ajouter un produit</span> {/* Plus pour ajouter un produit */}
      </AdminBarButton>
      <AdminBarButton>
        <span>- Modifier un produit</span>{" "}
        {/* Moins pour modifier un produit */}
      </AdminBarButton>
    <div style={{ height: isExpanded ? '33vh' : 0, width: '100vw', backgroundColor: 'white', position: 'fixed', bottom: 0, left: 0, transition: 'height 0.3s ease' }}/>

    </AdminBarContainer>
    </>
  );
};

export default AdminBar;
