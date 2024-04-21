import { useState } from "react";

function StateExample(){
    let [data,setData] = useState(0);
    return <>
        <h1>{data}</h1>
        <button onClick={()=>{setData(data+1)}}>Click</button>
    </>
}
export default StateExample