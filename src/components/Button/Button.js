import React, { Component } from 'react';

class Button extends Component{
    render(){
        const { onClick } = this.props
        return(
            <button className="btn btn-primary" onClick={onClick}>
                Add to my shelf
            </button>
        )
    }
}

export default Button;