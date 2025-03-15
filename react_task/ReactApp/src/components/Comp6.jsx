import { Component } from "react";
class Comp6 extends Component{
    render(){
        return(
            <>
            <h1>Comp6 : {this.props.num}</h1>
            <h2> This is Child</h2>
            </>
        )
    }
}
export default Comp6;