import global1 from "../context/global1";
import Comp4 from "./Comp4";
Comp4
const Comp3 = ()=>{
    return(

        <>
        
        <global1.Provider value={"welcome to Satemngt"}>
            <Comp4 />

        </global1.Provider>
        
        </>
    )

}

export default Comp3;