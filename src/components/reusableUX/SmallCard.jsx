/* eslint-disable react/prop-types */
import styled from "styled-components";
import { theme } from "../../assets/theme/index";

const SbSmallCard = ({
  shadow,
  width,
  height,
  fontFamily,
  radius,
  flexDirection,
  children,
}) => {

  return (
    <StyledCard
      shadow={shadow}
      width={width}
      height={height}
      fontFamily={fontFamily}
      radius={radius}
      flexDirection={flexDirection}
    >
      {children}
    </StyledCard>
  );
};

// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //

const StyledCard = styled.div`
  background-color: ${(props) =>
    props.cardIsSelectedByUSer ? theme.colors.primary_cake : "white"};
  border-radius: ${(props) => (props.radius ? "12px" : "0")};
  padding: 20px;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection === "column" ? "column" : "row"};
  justify-content: space-between;
  gap: 10px;
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "80px")};
  box-shadow: ${(props) =>
    props.shadow ? "-8px 8px 20px 0px rgb(0 0 0 / 20%)" : "none"};

  h3 {
    font-family: ${(props) =>
      props.fontFamily ? props.fontFamily : "Open-sans"};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-container {
    width: 80px;
  }
`;

// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //

export default SbSmallCard;
