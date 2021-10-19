import React, { Component } from 'react'
import logo from '../assets/img/logo-fatec.png'

export default class Footer extends Component{
    render(){
        
        return <footer><div className="footer" style={{backgroundColor: 'grey' }}>
            
        <div className="row">
            <div className="texto col-md-10">
                <p>Sistema Desenvolvido por Vitor Moran Souza</p>
                <p>Por meio do uso do React com MongoDB, a ideia é criar um sistema de cadastro para Treinadores Pokemon</p>
                <p>Fatec Bragança Paulista - Curso de React da ACCT</p>
                <p>Administrado por: Gabriel e Gustavo</p>
            </div>
            <div className="brasao col-md-2">
                <img src={logo} alt="LogoTorneio" height='100px' />
            </div>
        </div>
    </div>
    </footer>
    }
}

