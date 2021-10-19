

class Campo implements Campos {
    tipo: string[] = ["Fogo", "Agua", "Terra", "Grama"];
}

class User implements Treinador {
    tipo: string;
    login: string;
    password: string;
    name: string;
    type: string;
    nome: string;
    city: string;
    especialidade: string;
    idade: number;
    pokemonId: any;

    constructor(login: string,
        password: string,
        nome: string,
        city: string,
        especialidade: string,
        idade: number,
        pokemonId: any) 
        {
        this.nome = nome;
        this.city = city;
        this.idade = idade;
        this.especialidade = especialidade;
        this.login = login;
        this.pokemonId = pokemonId;
        this.password = password;

        console.log("USer Created: " + this.nome);

    }
    register() {
        console.log(this.name + " " + this.password, ' is now registered');
    }
    updatedPokemons(){

    }
    removePokemons(){

    }
    


}