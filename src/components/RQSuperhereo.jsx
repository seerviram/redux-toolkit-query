import axios from 'axios'
import * as  React from 'react'
import {useQuery} from 'react-query'
import { Link } from 'react-router-dom'
import { useAddMutation } from '../hooks/hookfile'
import api from '../utils/axios-util'

function fetchSuperHeros (){
    return api("/superheroes")
}
export default function RQSuperHeroPage(){
 const [name, setName] = React.useState("")
  const [alterEgo, setEgo] = React.useState("")
  const {mutate} = useAddMutation();

   const onSuccess = (data)=> {}
    const {data, isLoading, isError, error, isFetching} = useQuery('super-heros', fetchSuperHeros, {
        onSuccess,
        select: (data)=> {
           // console.log('select data runs first than onsuccess', data)
            return data
        }      
    })

    const addUser = ()=> {
        mutate({name, alterEgo})
    }
    if(isLoading){
        return <div>Loading..</div>
    }


  return <>
  <input type='text' onChange={e=> setName(e.target.value)} value={name}/>
  <input type='text' onChange={e=> setEgo(e.target.value)} value={alterEgo}/>
  <button onClick={addUser}>Add user</button>
  {data?.data.map(el=> <div key={el.id}><Link to={`/super-hero/${el.id}`}>{el.name}</Link></div>)}
   </>
    
}