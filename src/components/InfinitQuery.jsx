import {useInfiniteQuery} from 'react-query'
import api from '../utils/axios-util'

function fetchColor ({pageParam=1}){
    return api("/colors?_limit=2&_page="+pageParam)
}
export default function InfiniteColors(){
   const {data, isLoading, hasNextPage, fetchNextPage} = useInfiniteQuery(['colors'],
     fetchColor, {
        getNextPageParam: (_lastpage, pages)=> {
        if(pages.length<4){
            return pages.length+1
        } else {
            return undefined
        }
    }
   })


    if(isLoading){
        return <div>Loading..</div>
    }
    console.log('pages',data.pages)
  return( <>
    {data?.pages.map((group,i)=><>
    {group.data.map((color)=> <div>{color.label}</div>)}
    </>)}
    <button onClick={fetchNextPage} disabled={!hasNextPage}>Load More</button>
   </>)
    
}