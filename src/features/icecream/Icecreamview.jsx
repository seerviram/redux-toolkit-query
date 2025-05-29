import * as React from "react";
import {useSelector} from 'react-redux'

export default function IcecreamView(){
    const iceCreams = useSelector(state=> state.icecream.numOfIceCreams)
    return (<>
    <h2>Icecream - {iceCreams}</h2>
    <button>Order ICE cream</button>
    <button>restock Ice cream</button>
    </>)
}