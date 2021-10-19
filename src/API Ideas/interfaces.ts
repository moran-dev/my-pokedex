interface Campo {
    tipo: [];
}


interface Pokemon {
    name: string;
    pokemonId: any;
    type: string;

}

interface Treinador extends Pokemon {
    nome: string;
    city: string;
    especialidade: string;
    idade: number;
    pokemonId: any;
    register();
    
}

