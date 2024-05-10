import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SbButton from "../reusableUX/button";
import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { theme } from "@/assets/theme/index";
import styled from "styled-components";
import TextInput from "../reusableUX/TextInput";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setErrorMessages("Ecris ton prénom gros suceur de planctons");
      setUserName("");
      return;
    } else {
      setErrorMessages("");
    }
    setUserName(name);
    navigate("/orderPage", { state: { userName: name } });

    setName("");
  };

  return (
    <LoginFormStyled
    onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <hr/>
      <h2>Connectez-vous</h2>

      <TextInput
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Entrez votre prénom"} 
        icon={<UserCircleIcon />} 
        />

      <SbButton
        type="submit"
        title="Mon espace"
        icon={<ChevronRightIcon />}
        radius={true}
      ></SbButton>

      {userName && <h2>Bonjour {userName}</h2>}
      
      <h3 >{errorMessages}</h3>
    </LoginFormStyled>
  );
};


// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Pacifico", sans-serif;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  h3 {
    color: red;
    padding: 40px;
    font-size: 50px;
    font-family: "Pacifico", sans-serif;
  }

  .icon {
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;

// *************************** CSS *************************** //
// *************************** CSS *************************** //
// *************************** CSS *************************** //


export default LoginForm;
