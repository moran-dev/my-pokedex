import React, { Component } from 'react'

const Input = props => {
    return (
        <input type="number" onChange={event => {
            props.changePrice(event.target.value)
        }} />
    )
}

export default Input