import React, { Component } from 'react'
import app from './Connection'
import './assets/css/styles.css'
import Header from './common/Header'
import Modal from 'react-responsive-modal';
import pencil from './assets/img/pencil.png'
import menos from './assets/img/menos.png'


export default class Consulta extends Component {
    constructor(props) {
        super(props)

        this.state = {
            secoesList: [],
            colecoesList: [],
            obrasList: [],
            sectionSelected: "",
            colectionSelected: "",
            saveArray: [],

            open: false,

            text: "",
            obrasId: "",
            obrasOne: {},

            pesquisa: []


        }

    }

    componentDidMount() {
        this.loadSections()
        this.loadColections()
        this.loadObras()
    }

    //SEÇÕES
    loadSections = async () => {
        const secoes = await app.get('/CadastroSecao').catch((error) => {
            throw error;
        })
        this.setState({ secoesList: secoes.data })
        // console.log(this.state.secoesList)
    }

    //OBRAS
    loadObras = async () => {
        const obras = await app.get('/CadastroObra').catch((error) => {
            throw error;
        })
        this.setState({ obrasList: obras.data })
        // console.log(this.state.obrasList)

    }

    //COLEÇÕES
    loadColections = async () => {
        const colecoes = await app.get('/CadastroColecao').catch((error) => {
            throw error;
        })
        this.setState({ colecoesList: colecoes.data })

    }
    //Teste pra ver se o SetState Atualizava imediatamente fora do Render() -- não funcionou
    StateChanger = (value, where) =>{
        switch(where){
            default:
                    this.setState({saveArray : value})
                    
            break;
        }
    }

    TwoFunctions = (event) => {
        this.FindOne(event)
        this.onOpenModal()
    }
    //Deleta a seção
    deleteObra = async (value) => {
        const id = value
        await app.delete(`/CadastroObra/${id}`).then(function (response) {
            console.log(response)
        }).catch((error) => {
            console.log(error)
            alert("Não funcionou")
        })

    }

    //Função pra encontrar uma obra pelo ID
    FindOne = (event) => {
        const find = this.state.obrasList.find((item) => {
            return item._id === event;
        })
        this.setState({ obrasId: event })
        this.setState({ obrasOne: find })


    }
    //Abre a caixa de edição
    onOpenModal = () => {

        this.setState({ open: true });

    };

    //Fecha a caixa de edição
    onCloseModal = () => {
        this.setState({ open: false });
    };

    //PEGA O ID DOS SELECTS
    idCatcher = (event, where) => {
        switch (where) {
            case 'section':
                this.setState({ sectionSelected: event.target.value })

                break;
            default:

                this.setState({ colectionSelected: event.target.value })

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
        const { open } = this.state

        return (
            <div className="App">
                <Header />
                <div className="home">

                    <div className="container">
                        <div className="row background">
                            <div className="page-content col-md-12" style={{ height: 700 }}>

                                <h1>Consultar:</h1>
                                <div className="ReactConsulta">
                                    <div className="ReactOpcoes">


                                        {/* Selection Para as Seções */}
                                        <select id="listaSecao" name="item-uf" onChange={event => this.idCatcher(event, 'section')}>
                                            <option defaultValue >---</option>

                                            {this.state.secoesList.map(secao => {

                                                return <option key={secao._id} value={secao._id}>{secao.nome}</option>

                                            })}

                                        </select>


                                        {/* Selection Para as Coleções */}
                                        <select id="uf-obra" name="item-uf" onChange={event => this.idCatcher(event, 'colection')}>
                                            <option defaultValue >---</option>
                                            {this.state.colecoesList.map(colecao => {
                                                if (colecao.idLocal === this.state.sectionSelected) {
                                                    return <option key={colecao._id} value={colecao._id}>{colecao.nome}</option>
                                                } else {
                                                    return null
                                                }
                                            })}
                                        </select>

                                        <input className="titulos" placeholder='Nome da Obra' onChange={event => {
                                            this.setState({ text: event.target.value })
                                        }} />
                                        <button onClick={() => {
                                            //NENHUM SELECIONADO
                                            if ((this.state.sectionSelected === "" || this.state.sectionSelected === "---") && (this.state.colectionSelected === "" || this.state.colectionSelected === "---") && (this.state.text === "")) {
                                                let teste = this.state.obrasList.map(obras => {
                                                    return <div key={obras._id} className="Texugo">

                                                        <div className="TexugoBoxFirst">
                                                            <h3>{obras.titulo}</h3>
                                                        </div>
                                                        <div className="TexugoBoxSecond">
                                                            <h4>{obras.descricao}</h4>
                                                        </div>

                                                        <div className="TexugoBoxThrd">

                                                            <div><img className="buttonPress" src={pencil} alt="Editar" height={20} onClick={() => {
                                                                this.TwoFunctions(obras._id)
                                                            }} /></div>

                                                            <div><img className="buttonPress" src={menos} alt="Excluir" height={20} onClick={() => {

                                                                window.confirm(`Deseja mesmo deletar a seção: ${obras.titulo}`) && this.deleteObra(obras._id)
                                                                window.location.reload()

                                                            }} /></div>
                                                        </div>

                                                    </div>
                                                })
                                                console.log(this.state.obrasList)
                                                this.setState({ pesquisa: teste })

                                            } else
                                            //SALA SELECIONADA
                                                if ((this.state.colectionSelected === "" || this.state.colectionSelected === "---") && (this.state.text === "")) {
                                                    let filtered = this.state.colecoesList.filter((item) => {
                                                        return item.idLocal === this.state.sectionSelected
                                                    })
                                                    this.StateChanger(filtered, 'sala')
                                                    console.log(filtered)
                                                    console.log(this.state.saveArray)
                                                   
                                                    if(this.state.saveArray !== [] || this.state.saveArray !== null ){
                                                        let resultado = this.state.saveArray.map(item => {
                                                            return <div key={item._id} className="Texugo">
    
                                                                <div className="TexugoBoxFirst">
                                                                    <h3>{item.nome}</h3>
                                                                </div>
                                                                <div className="TexugoBoxSecond">
                                                                    <h4>{item.descricao}</h4>
                                                                </div>
    
                                                                <div className="TexugoBoxThrd">
    
                                                                    {/* <div><img className="buttonPress" src={pencil} alt="Editar" height={20} onClick={() => {
                                                                        this.TwoFunctions(item._id)
                                                                    }} /></div>
    
                                                                    <div><img className="buttonPress" src={menos} alt="Excluir" height={20} onClick={() => {
    
                                                                        window.confirm(`Deseja mesmo deletar a seção: ${item.nome}`) && this.deleteObra(item._id)
                                                                        window.location.reload()
    
                                                                    }} /></div> */}
                                                                </div>
    
                                                            </div>
                                                        })
                                                        this.setState({ pesquisa: resultado })
                                                    }
                                                    
                                                    
                                                }else
                                                //SALA E COLECAO SELECIONADA
                                                if(this.state.text === ""){
                                                    let filtered = this.state.obrasList.filter((item) => {
                                                        return item.idColecao === this.state.colectionSelected
                                                    })
                                                    this.setState(
                                                        {saveArray : filtered}, ()=>{

                                                        console.log(filtered)
                                                        console.log(this.state.saveArray)

                                                    }) 
                                                    
                                                    if(this.state.saveArray !== [] || this.state.saveArray !== null ){
                                                        let resultado = this.state.saveArray.map(item => {
                                                            return <div key={item._id} className="Texugo">
    
                                                                <div className="TexugoBoxFirst">
                                                                    <h3>{item.titulo}</h3>
                                                                </div>
                                                                <div className="TexugoBoxSecond">
                                                                    <h4>{item.descricao}</h4>
                                                                </div>
    
                                                                <div className="TexugoBoxThrd">
    
                                                                    <div><img className="buttonPress" src={pencil} alt="Editar" height={20} onClick={() => {
                                                                        this.TwoFunctions(item._id)
                                                                    }} /></div>
    
                                                                    <div><img className="buttonPress" src={menos} alt="Excluir" height={20} onClick={() => {
    
                                                                        window.confirm(`Deseja mesmo deletar a seção: ${item.nome}`) && this.deleteObra(item._id)
                                                                        window.location.reload()
    
                                                                    }} /></div>
                                                                </div>
    
                                                            </div>
                                                        })
                                                        console.log(resultado)
                                                        this.setState({ pesquisa: resultado })
                                                    }
                                                    
                                                }else
                                                //TODOS SELECIONADOS
                                                {
                                                    let filtered = this.state.obrasList.filter((item) => {
                                                        return (item.idColecao === this.state.colectionSelected) && (item.titulo === this.state.text || item.descricao === this.state.text || item.autor === this.state.text || item.cidade === this.state.text || item.municipio === this.state.text)
                                                    })
                                                    this.setState({saveArray : filtered})
                                                    console.log(filtered)
                                                    console.log(this.state.saveArray)
                                                    if(this.state.saveArray !== [] || this.state.saveArray !== null ){
                                                        let resultado = this.state.saveArray.map(item => {
                                                            return <div key={item._id} className="Texugo">
    
                                                                <div className="TexugoBoxFirst">
                                                                    <h3>{item.titulo}</h3>
                                                                </div>
                                                                <div className="TexugoBoxSecond">
                                                                    <h4>{item.descricao}</h4>
                                                                </div>
    
                                                                <div className="TexugoBoxThrd">
    
                                                                    <div><img className="buttonPress" src={pencil} alt="Editar" height={20} onClick={() => {
                                                                        this.TwoFunctions(item._id)
                                                                    }} /></div>
    
                                                                    <div><img className="buttonPress" src={menos} alt="Excluir" height={20} onClick={() => {
    
                                                                        window.confirm(`Deseja mesmo deletar a seção: ${item.nome}`) && this.deleteObra(item._id)
                                                                        window.location.reload()
    
                                                                    }} /></div>
                                                                </div>
    
                                                            </div>
                                                        })
                                                        this.setState({ pesquisa: resultado })

                                                }

                                            }

                                        }}>Clique ME</button>
                                    </div>


                                    {/* Pesquisas */}
                                    <div className="PaidoTexugo">
                                        {this.state.pesquisa}


                                    </div>

                                    <Modal open={open} onClose={this.onCloseModal} center >
                                        <h2>Detalhes Seção:</h2>

                                      <h4> Titulo: {this.state.obrasOne.titulo} <br/>
                                        Dimensões: {this.state.obrasOne.dimensoes} <br/>
                                        Cidade : {this.state.obrasOne.cidade}<br/>
                                        Estado : {this.state.obrasOne.estado} <br/>
                                        Municipio : {this.state.obrasOne.municipio} <br/>
                                        Descrição : {this.state.obrasOne.descricao} <br/>
                                        Observação : {this.state.obrasOne.observacao} <br/>
                                        Conservação : {this.state.obrasOne.conservacao} <br/>
                                        Data de Criação :  {this.state.obrasOne.dataCriacao} <br/>
                                        Autor:  {this.state.obrasOne.autor} <br/>
                                        Material : {this.state.obrasOne.material} <br/>
                                        Modelo : {this.state.obrasOne.modelo} <br/>
                                        Tecnica : {this.state.obrasOne.tecnica} <br/>
                                        Reserva : {this.state.obrasOne.reserva} <br/></h4> 
                                       


                                        {/* <button onClick={() => {

                                            // for (var i in secoesLista) {
                                            //     if (secoesLista[i]._id === this.state.secaoId) {
                                            //         secoesLista[i].nome = nome
                                            //         secoesLista[i].descricao = description
                                            //         break;
                                            //     }
                                            // }




                                            this.onCloseModal()

                                        }
                                        }>Salvar</button> */}
                                    </Modal>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>


        );
    }
}

