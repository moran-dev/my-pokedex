import React, { Component } from 'react'
import Header from './common/Header'


export default class Home extends Component {
  render() {
    if (navigator.onLine) {
      console.log('Online')
    }
    else {
      alert('Modo Offline')
    }
    return (
      <div className="App">
        <Header />
        <div className="home">

          <div className="container">
            <div className="row background">
              <div className="page-content col-md-12">
                <h1>Sejam Bem-Vindos Treinadores, este é o Software de Cadastro para o Torneio</h1>
                <p>Se caso tiver dúvidas sobre as especialidades, vá para o link</p>
                <div className="button-especialidades">
                  <a href="" target="_blank" rel="noopener noreferrer"><span>Ir para o site</span></a>
                </div>
              </div>
              <div className="torneio-img">
                <img src={logo} alt="LogoTorneio" height='100px' rel="noopener noreferrer" />
              </div>
            </div>
          </div>
          <div>

          </div>


        </div>

      </div>
    );
  }
}

