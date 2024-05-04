import { useSelector } from "react-redux";
import { UserDetailType } from "../Redux/userDetail";

function Profile() {
  const user = useSelector((state: UserDetailType) => state);
  if (user.name === "" && user.password === "") return <h1>Please Login</h1>;

  return <h2>Welcome {user.name}</h2>;
}

export default Profile;
