import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import api from "../utils/axios-util";


const fetchUser = ({queryKey})=> {
    const id = queryKey[1]
    return  api("/superheroes/"+id)
}
export default function SuperHeroDataPage(){
    const queryClient = useQueryClient()
    const {heroId} = useParams();
    const {data, isLoading} = useQuery(["super-hero",parseInt(heroId)], fetchUser, {
        initialData: ()=> {
            let userData = queryClient.getQueryData('super-heros')
            const updatedUser = userData.data.find(user=> user.id === (heroId))
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