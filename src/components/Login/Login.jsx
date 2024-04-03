import Logo from "@/components/reusableUX/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import backgroundImage from "@/assets/images/tarts.jpg";


export default function LoginPage() {
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>
    );
}

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: url(${backgroundImage}) no-repeat center center fixed rgba(0, 0, 0, 0.5);
        background-size: cover;
        background-blend-mode: darken;
    }
`;
