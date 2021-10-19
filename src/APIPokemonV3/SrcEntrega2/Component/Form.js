import React, { Component } from 'react'


class Form extends Component {
    state = {
        firstName: '',
        email: '',
        numberPhone: '',
        description: ''
    }

    changeInfo = (value, changedInput) => {
        switch (changedInput) {
            case 'firstName':
                this.setState({ firstName: value })
                break;
            case 'email':
                this.setState({ email: value })
                break;
            case 'numberPhone':
                this.setState({ numberPhone: value })
                break;
            default:
                this.setState({ description: value })
        }
    }

    validateEmail = () => {
        const email = this.state.email
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
        if (re.test(email)) {
            console.log('O e-mail é válido')
            return true
        } else {
            console.error('O e-mail não é válido')
            return false
        }
    }

    validatePhone = () => {
        const numberPhone = this.state.numberPhone
        const np = /^[0-9]{4,5}[0-9]{4}$/
        if (np.test(numberPhone)) {
            console.log('O telefone é válido')
            return true
        }
        else {
            console.error('O telefone não é válido')
        }
        return false
    }

    handleSubmit = () => {
        if (this.validateEmail() && this.validatePhone()) {
            const form = {
                firstName: this.state.firstName,
                email: this.state.email,
                numberPhone: this.state.numberPhone,
                description: this.state.description
            }
            this.props.changeInfo(form)
            alert(`Obrigado ${this.state.firstName} dados enviados com sucesso`)
        } else {
            alert("Email ou telefone inválido")
        }
    }

    render() {
        return (
            <div className="campos">
                <li> <label>Nome</label>
                    <input type="text" minLength="3" onChange={event => {
                        this.changeInfo(event.target.value, 'firstName')
                    }} required="required" placeholder="Digite seu nome" />
                </li>
                <br />
                <li><label>E-mail</label>
                    <input type="Email" onChange={event => {
                        this.changeInfo(event.target.value, 'email')
                    }} required placeholder="Digite seu e-mail" />
                </li>
                <br />
                <li><label>Telefone</label>
                    <input type="Tel" maxLength="9" onChange={event => {
                        this.changeInfo(event.target.value, 'numberPhone')
                    }} required placeholder="Digite seu numero de telefone" />
                </li>
                <br />
                <ul><label>Descrição</label>
                    <input type="text" onChange={event => {
                        this.changeInfo(event.target.value, 'description')
                    }} required placeholder="Descrição" />

                    <br />
                    <input className="botao" type="submit" onClick={this.handleSubmit} />
                </ul>
            </div>
        )
    }
}
export default Form
