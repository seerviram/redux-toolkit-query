import axios from "axios";
import { useMutation, useQueryClient } from "react-query";


const addMutation = (hero)=> {
    return axios.post("http://localhost:4000/superheroes", hero)
}
export const useAddMutation=()=> {
  const queryClient = useQueryClient()
  return useMutation(addMutation,{
    // onSuccess: (data)=> {
    //     // queryClient.invalidateQueries("super-heros")
    //     queryClient.setQueriesData('super-heros', (oldqueryData)=> {
    //         return {
    //             ...oldqueryData,
    //             data: [...oldqueryData.data, data.data]
    //         }
    //     } )
    // }
    onMutate: async(hero)=> {
            await queryClient.cancelQueries('super-heros');
             const previousData = queryClient.getQueryData('super-heros')
              queryClient.setQueryData('super-heros', (prevData)=> {
                 return {
                    ...prevData,
                    data: [...prevData.data, {id: prevData.data.length+1, ...hero}]
                 }
              })
              console.log("before", previousData)
             return {
                previousData
             };
    },
    onError:(_a,_b,context)=> {
        console.log('eror', context)
     queryClient.setQueryData('super-heros', context.previousData)

    },
    onSettled: ()=> {
        console.log('called')
        queryClient.invalidateQueries('super-heros');
    }
  })
}