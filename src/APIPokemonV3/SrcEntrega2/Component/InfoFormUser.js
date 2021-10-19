import React, { Component } from 'react'


class InfoFormUser extends Component {
    render() {
        return (
            <div className="InfoUser">{this.props.children} </div>
        )
    }
}
export default InfoFormUser
