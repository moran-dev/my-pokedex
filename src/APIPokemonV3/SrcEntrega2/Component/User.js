import React, { Component } from 'react'

class User extends Component {

    render() {
        return (
            <div className={`name-${this.props.name}`}>
                {this.props.children}
            </div>
        )
    }

}

export default User
