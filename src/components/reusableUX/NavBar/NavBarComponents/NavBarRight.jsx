import Profile from "../../Profile";

// eslint-disable-next-line react/prop-types
export default function NavBarRight({ userName }) {

    return (
      <Profile userName={userName} />
    );
}
