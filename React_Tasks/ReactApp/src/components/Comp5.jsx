import { Component } from "react";
import Comp6 from "./Comp6";

class Comp5 extends Component{
    constructor(){
        super();
        this.state={
            num:100
        }
    }

    render(){
        return(
            <>
            <Comp6 num={this.state.num}></Comp6>
            
            </>
        )
    }
}
export default Comp5;