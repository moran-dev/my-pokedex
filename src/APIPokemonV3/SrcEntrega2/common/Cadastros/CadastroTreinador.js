import React, { Component } from 'react'
import app from '../../Connection'
import '../../assets/css/styles.css'

export default class CadastroTreinador extends Component {
    state = {
        nome: "",
        pokemons: [],
        especialidade: "",
        idade: "",
        treinadorId: "",
        pokemonId: "",
        cidade: "",

    }
    componentDidMount() {
        this.loadSections()
        this.loadColections()
    }

    loadSections = async () => {
        const secoes = await app.get('/Cadastro').catch((error) => {
            throw error;
        })
        this.setState({ secoesList: secoes.data })

    }
    loadColections = async () => {
        const colecoes = await app.get('/CadastroPokemon').catch((error) => {
            throw error;
        })
        this.setState({ colecoesList: colecoes.data })

    }
    saveData = (value, where) => {
        switch (where) {
            case 'nome':
                this.setState({ nome: value })
                break;
            case 'pokemons':
                this.setState({ pokemons: value })
                break;
            case 'especialidade':
                this.setState({ especialidade: value })
                break;
            case 'idade':
                this.setState({ idade: value })
                break;
            case 'cidade':
                this.setState({ cidade: value })
                break;
            case 'pokemonId':
                this.setState({ pokemonId: value })
                break;
            case 'treinadorId':
                this.setState({ treinadorId: value })
                break;
            default:
                this.setState({ tecnica: value })
                break;
        }
    }
    idCatcher = (event, where) => {
        switch (where) {
            case 'section':
                this.setState({ treinadorId: event.target.value })
                
                break;
            default :

                this.setState({ pokemonId: event.target.value })
                
                break;
            
        }


    }
    PostData = async () => {
        await app.post('/Cadastro', {
            "nome": this.state.nome,
            "cidade": this.state.cidade,
            "idade": this.state.idade,
            "pokemons": this.state.pokemons,
            "especialidade": this.state.especialidade,
            "treinadorId": this.state.treinadorId

        }).then(async function  (response) {
            
            console.log(response)

        }).catch((error) => {
            console.log(error)
            alert("Opa, algo deu errado")
        })
    }
    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
        console.log(this.state.file)
      }

    render() {
        return (
            <div className="cadastrar" style={{ paddingBottom: 10 }} hidden={this.props.hidden} >
                <h3>Cadastrar Treinador:</h3>
                <div >

                    <div>
                        <label className="col-xl-auto" >
                            <label>
                                <input className="nomeTreinador" placeholder="Nome do Treinador" onChange={event => {
                                    this.saveData(event.target.value, 'nome')
                                }} />

                                <input className="cidadeTreinador" placeholder='Cidade' onChange={event => {
                                    this.saveData(event.target.value, 'cidade')
                                }} />

                                <label className="titulos">Especialidade:
                                    <select id="especialidade" name="item-especialidade" onChange={event => {

                                        this.saveData(event.target.value, 'especialidade')

                                    }}>
                                        <option defaultValue>None</option>
                                        <option>Seavell</option>
                                        <option>Orebound</option>
                                        <option>Psycraft</option>
                                        <option>Volcanic</option>
                                        <option>Naturia</option>
                                        <option>Malefic</option>
                                        <option>Wingeon</option>
                                        <option>Gardestrike</option>
                                        <option>Raibolt</option>
                                    </select>
                                </label>


                                <h5>Origem do Treinador:</h5>
                                <label className="ti">Cidade
                                   <select id="cidades-regiao" name="item-cidades" onChange={event => {
                                        this.saveData(event.target.value, 'cidades')
                                    }} >
                                        <option defaultValue hidden>---</option>
                                        <option value="Pallet">Pallet Town</option>
                                        <option value="Viridian">Viridian</option>
                                        <option value="Pewter">Pewter</option>
                                        <option value="Cerulean">Cerulean</option>
                                        <option value="Vermilion">Vermilion</option>
                                        <option value="Saffron">Saffron</option>
                                        <option value="Celadon">Celadon</option>
                                        <option value="Lavender">Lavender</option>
                                        <option value="Fuchsia">Fuchsia</option>
                                        <option value="Cinnabar">Cinnabar</option>
                                    </select>
                                </label>

                                <label className="titulos">Seção:
                                    <select id="listaSecao" name="item-uf" onChange={event => this.idCatcher(event , 'section')}>
                                        <option defaultValue hidden>---</option>

                                        {this.state.secoesList.map(secao => {

                                            return <option key={secao._id} value={secao._id}>{secao.nome}</option>

                                        })}

                                    </select>
                                </label>
                                <label className="titulos">Coleção:
                                    <select id="uf-obra" name="item-uf" onChange={event => this.idCatcher(event , 'colection') }>
                                        <option defaultValue hidden>---</option>
                                        {this.state.colecoesList.map(colecao => {
                                            if(colecao.idLocal === this.state.sectionSelected){
                                            return <option key={colecao._id} value={colecao._id}>{colecao.nome}</option>
                                            }else{
                                                return null
                                            }
                                        })}
                                    </select>
                                </label>


                                <button className="titulos" style={{ borderRadius: 50, width: 210, height: 50, cursor: "pointer" }} onClick={() => {
                                    if (this.state.titulo === "") {
                                        alert("Título é Obrigatório")
                                    } else
                                        if (this.state.especialidade=== "") {
                                            alert("Especialidade é Obrigatório")
                                        } else
                                            if (this.state.cidade === "") {
                                                alert("Cidade é Obrigatória")
                                            } else

                                                        if (this.state.treinadorId === "") {
                                                            alert("Escolher uma Seção é Obrigatório")
                                                        } else
                                                            if (this.state.pokemonId === "") {
                                                                alert("")
                                                            } else
                                                                {
                                                                    window.confirm("Confirmar Cadastro?") && this.PostData().catch(error => { console.log(error) })
                                                                }

                                }

                                }> Cadastrar</button>
                            </label>
                        </label>
                    </div>
                </div>

            </div>
        )
    }
}