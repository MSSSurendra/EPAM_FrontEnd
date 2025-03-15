import global1 from "../context/global1";
import { useContext } from "react";
const Comp4 = ()=>{
    const msg = useContext(global1);
    return(
        <>
            <h1>{msg}</h1>
        </>
    )
}
export default Comp4;