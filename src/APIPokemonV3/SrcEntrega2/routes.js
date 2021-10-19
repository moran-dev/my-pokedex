import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'
import Consulta from './Consulta'
import Cadastro from './Cadastro'
import Footer from './common/Footer'

class Routes extends Component {
    render() {
        return (
            <div >
            <BrowserRouter>
                <div>
                <Route exact path='/' component={Home} />
                <Route path='/Cadastro' component={Cadastro} />
                <Route path='/Consulta' component={Consulta} />
                </div>
                 
            </BrowserRouter>
            <Footer/>
            </div>
        )
    }
}
 export default Routes