import Profile from "../../Profile";

// eslint-disable-next-line react/prop-types
export default function NavBarRight({ userName }) {

    console.log("profileName:", userName);
    return (
      <Profile userName={userName} />
    );
}
