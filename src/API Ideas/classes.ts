
class Campo {
    tipo: [string] = ["Fogo", "Agua", "Terra", "Grama"];
}

class User implements Treinador{
    name: string;
    type: string;
    nome: string;
    city: string;
    especialidade: string;
    idade: number;
    pokemonId: any;

    constructor(nome: string, city:string, idade:number){
        this.nome = nome;
        this.city = city;
        this.idade = idade;
        
        console.log("USer Created: " +this.nome);

    }
    register(){
        console.log(this.nome+ ' is now registered');
    }
}