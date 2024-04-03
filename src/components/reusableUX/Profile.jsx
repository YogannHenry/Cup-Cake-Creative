import { UserCircleIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "@/assets/theme/index"

// eslint-disable-next-line react/prop-types
export default function Profile({ userName }) {

  console.log("username:", userName)

  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Salut <b>{userName}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <UserCircleIcon />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    border: 1px solid red;
    height: 100%;
    color: ${theme.colors.greyBlue};
  }
`
