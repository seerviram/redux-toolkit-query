import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export default function UserView(){

    const userstate = useSelector(state=> state.user)
    const dispatch = useDispatch()
  
    React.useEffect(()=> {
 dispatch(fetchUsers())
    },[])
    
    return (<>
    <h2>User view</h2>
   {userstate.loading && <div>Loading...</div>}
   {!userstate.loading && userstate.error && <div>Error...</div>}
   {!userstate.loading && userstate.users.map((user)=> <div>{user.name}</div>)}
    </>)
}