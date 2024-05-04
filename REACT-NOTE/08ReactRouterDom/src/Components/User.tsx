import { useParams } from "react-router-dom"
function User() {
    const  {userName}  = useParams()
  return (
    <div className='text-white text-center bg-slate-800 p-4 mt-10 w-full  '>
      UserName: {userName}
    </div>
  )
}

export default User
