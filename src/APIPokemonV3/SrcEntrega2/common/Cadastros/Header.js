import React, { Component } from 'react'
import img from "../assets/img/user-icon.png"
import '../assets/css/styles.css'
import {Link} from 'react-router-dom'


export default class Header extends Component {
    
    render() {

        return (
            <header style={{position:'static'}}>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="user col-md-3">
                        </div>
                        <div className="navbar col-lg-12 col-md-12">
                            <ul>
                                <li className="item1" ><Link to={'/'}>Tela Inicial</Link></li>
                                <li className="item2" ><Link to={'/Cadastro'}>Cadastrar Treinador</Link></li>
                                <li className="item3"><Link to={'/Consulta'}>Consultar Participantes/Pokemons</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

