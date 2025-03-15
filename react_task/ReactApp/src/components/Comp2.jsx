import { Component } from "react";
class Comp2 extends Component{
    constructor(){
        super();
        this.state ={
            num :100
        };
    }
    render(){
        return(
            <>
            <h1>{this.state.num}</h1>
            </>
        )
    }



}
export default Comp2;