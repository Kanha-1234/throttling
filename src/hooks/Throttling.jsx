import { useEffect, useRef, useState } from "react";

export default function Throttling(value,delay){
    const [throttle,setThrottle]  = useState(value);
    const flagRef = useRef(true);
 useEffect(()=>{
if(flagRef.current){
    setThrottle(value);
flagRef.current =false;
setTimeout(()=>{flagRef.current = true},delay)
}


 },[value,delay])
    return throttle
}