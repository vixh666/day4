import React,{ Component } from  'react'
export default class PropsClass extends Component{
    render(){
        return(
            <div>
                <h1>
                    This from propclass {this.props.college}
                </h1>
            </div>
        )
    }
}