import userContext from "../Context/ContextUser";
import Button from "./Button";
import Button2 from "./Button2";
// import { useState } from "react";
import { useContext } from "react";
function Card() {
  const { countUser } = useContext(userContext);

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5 p-5 text-center rounded-lg  border-slate-300 border-2 bg-slate-100 hover:bg-slate-200 hover:border-slate-400 hover:shadow hover:shadow-slate-400  ">
      <h2 className="card-title">{countUser}</h2>
      <h2 className="card-title">Card Title</h2>
      <Button />
      <Button2 />
    </div>
  );
}

export default Card;
