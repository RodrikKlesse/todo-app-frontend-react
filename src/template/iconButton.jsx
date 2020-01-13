import React from 'react'
import If from './if'

export default props => (
    // Primeiro exmplo de solução
    // if(props.hide){
    //     return null
    // } else {
    //     return (
    // <button className={'btn btn-'+ props.style}
    // onClick={props.onClick}>
    //     <i className={'fa fa-'+ props.icon}></i>
    // </button>
    //     )
    // }

    <If test={!props.hide}>
        <button className={'btn btn-'+ props.style} 
            onClick={props.onClick}>
            <i className={'fa fa-'+ props.icon}></i>
        </button>
    </If>
)