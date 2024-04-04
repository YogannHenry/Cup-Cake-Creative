import styled from 'styled-components';
import { theme } from '../../assets/theme/index'

const StyledButton = styled.button`
  background-color: ${theme.colors.primary_cake};
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
    font-family: "open sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    border-radius: ${props => props.radius ? '8px' : '0'};
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
    cursor: pointer;
    border: 1px solid ${theme.colors.primary_cake};
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: white;
    color: ${theme.colors.primary_cake};
    border: 1px solid ${theme.colors.primary_cake};
  }
`;

const Icon = styled.span`
  width: 24px;
  height: 24px;
`;

const SbButton = ({ title, icon, radius, onClick }) => {
  return (
    <StyledButton radius={radius} onClick={onClick}>
      {title}
      {icon && <Icon>{icon}</Icon>}
    </StyledButton>
  );
};

export default SbButton;
