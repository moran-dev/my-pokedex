import React, { Component } from 'react'
import Header from './common/Header'
import './assets/css/styles.css'
import CadastroSecao from './common/cadastros/CadastroSecao'
import CadastroColecao from './common/cadastros/CadastroColecao'
import CadastroObra from './common/cadastros/CadastroObra'



export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Treinador: true,
            Pokemons: true

        }
    }
    mudarCadastro = (change) => {
        switch (change) {
            case 'Treinador':
                this.setState({ obra: false })
                this.setState({ secao: true })
                this.setState({ colecao: true })
                break;
            case 'Pokemon':
                this.setState({ obra: true })
                this.setState({ secao: false })
                this.setState({ colecao: true })
                break;
            default :
                this.setState({ obra: true })
                this.setState({ secao: true })
                this.setState({ colecao: false })
                break;
        }

    }
    render() {
        if (navigator.onLine) {
            console.log('online')
        }
        else {
            alert('[SEM CONEXÂO] Você está usando o site em modo offline')
        }

        return (
            <div className="App" >
            <Header/>
                <div className="cadastrar">
                    
                    <div className="container" style={{overflowX: 'hidden'}} >
                        <div className="page-content col-md-12">
                            <ul className="abas">
                                <li className="obra" onClick={()=>{
                                    this.mudarCadastro('obra')
                                }}>Obras</li>
                                <li className="secao" onClick={()=>{
                                    this.mudarCadastro('secao')
                                }}>Seção</li>
                                <li className="colecao" onClick={()=>{
                                    this.mudarCadastro('colecao')
                                }}>Coleção</li>
                            </ul>
                        </div>
                        <div className="Holder">
                        <CadastroObra hidden={this.state.obra} />
                        <CadastroColecao hidden={this.state.colecao} />
                        <CadastroSecao hidden={this.state.secao} />
                        </div>
                    </div>
                
                </div>
                 
            </div>
            

        )
    }
}