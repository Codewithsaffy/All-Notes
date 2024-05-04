import "./app.css";
export interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Card({ userId, id, title, body }: Props) {
  return (
    <>
      <div className="h-64 w-56 rounded-sm flex flex-col  text-center  card justify-between p-4">
        <h2 className="text-base font-bold text-cyan-400">{title}</h2>
        <p className="text-xs  font-normal text-gray-300">{body}</p>
        <div className=" rounded-full bg-red-500 text-white text-xs font-bold px-2 py-1 ">
          User id: {userId} & Post id: {id}
        </div>
      </div>
    </>
  );
}

export default Card;
