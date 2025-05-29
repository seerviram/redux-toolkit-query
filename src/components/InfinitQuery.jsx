import axios from 'axios'
import {useInfiniteQuery} from 'react-query'
import { Link } from 'react-router-dom'

function fetchColor ({pageParam=1}){
    return axios("http://localhost:4000/colors?_limit=2&_page="+pageParam)
}
export default function InfiniteColors(){
   const {data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage} = useInfiniteQuery(['colors'],
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