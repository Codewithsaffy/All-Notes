import { useState } from "react";
import { getUserDetail } from "../Redux/userDetail";
import { useDispatch } from "react-redux";

function Login() {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const dispatch = useDispatch();

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(getUserDetail({ name: userName, password: userPassword }));
  };
  return (
    <div>
      <input
        type="text"
        name="userName"
        // value={user.name}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        // value={user.password}
        name="userPassword"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default Login;
