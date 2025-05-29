import axios from "axios";
import { use } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom"


const fetchUser = ({queryKey})=> {
    const id = queryKey[1]
    return  axios("http://localhost:4000/superheroes/"+id)
}
export default function SuperHeroDataPage(){
    const queryClient = useQueryClient()
    const {heroId} = useParams();
    const {data, isLoading} = useQuery(["super-hero",parseInt(heroId)], fetchUser, {
        initialData: ()=> {
            let userData = queryClient.getQueryData('super-heros')
            const updatedUser = userData.data.find(user=> user.id === (heroId))
            console.log("user", updatedUser)
           updatedUser.name='bholaram';
            return {
                data: updatedUser
            };
        }
    })
    if(isLoading)
    return <div>Loading...</div>

    return (
        <>
        {data?.data.name && ( <div>{data.data.name}</div>)}
        </>
    )
}