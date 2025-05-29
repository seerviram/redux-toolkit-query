import * as React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from "./cakeSlice";

export default function CakeView(){
 const cakeQty = useSelector((state)=> state.cake.numOfCakes)
 const dispatch = useDispatch()
    return (<>
    <h2>Cake Quantity - {cakeQty} </h2>
    <button onClick={()=> dispatch(ordered())}>Order Cake</button>
    <button onClick={()=> dispatch(restocked(6))}>restock Cake</button>
    </>)
}