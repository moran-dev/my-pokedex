import React, { Component } from 'react'
import User from './User'

class WelcomeDialog extends Component {

    render() {
        const { firstName } = this.props

        return (
            <User name={firstName.toLowerCase()}>
                <h1 className="Dialog-title">
                    Bem-vindo {firstName}
                </h1>
                <p className="Dialog-message">
                    Obrigado por nos visitar!
                </p>
            </User>
        );
    
    }

} 

export default WelcomeDialog
