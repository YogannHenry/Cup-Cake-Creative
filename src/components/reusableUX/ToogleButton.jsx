/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../assets/theme";

const ToggleButton = ({ value, setValue, onClick }) => {
  const textInputValue = value ? "Désactiver mode admin" : "Activer mode admin";

  const handleClick = () => {
    setValue(!value);
    onClick();
  };

  return (
    <Wrapper>
      <Button active={value} onClick={handleClick}>
        <BallEffect active={value} />
        <textInput  >{textInputValue}</textInput>
      </Button>
    </Wrapper>
  );
};

export default ToggleButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Button = styled.button`
  position: relative; /* Added to establish positioning context for absolute elements */
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  color: ${(props) => (props.active ? theme.colors.primary_cake : "#ffffff")};
  border: 1px solid ${theme.colors.primary_cake};
  border-radius: 25px;
  padding: 0 15px;
  background-color: ${(props) =>
    props.active ? "#ffffff" : theme.colors.primary_cake};

  justify-content: center;
`;

const BallEffect = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${theme.colors.primary_cake};
  position: absolute;
  transition: transform 0.3s;
  transform: translateX(${(props) => (props.active ? "-110px" : "110px")});
  box-shadow: inset 0 0 4px 4px rgba(255, 255, 255, 0.6);
  z-index: 0;
`;


