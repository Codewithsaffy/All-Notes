import React, { createContext } from "react";

type Count = number ;
interface UserContext {
  countUser: Count;
  setUserCount: React.Dispatch<React.SetStateAction<Count>>;
}
const userContext = createContext<UserContext>({countUser: 0, setUserCount: () => {}} as UserContext);
export default userContext

