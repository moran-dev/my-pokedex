

interface Campos {
    tipo: string[];
}


interface Pokemon{
    name: string;
    pokemonId: any;
    tipo: string;

}

interface Treinador extends Pokemon {
    nome: string;
    city: string;
    especialidade: string;
    idade: number;
    pokemonId: any;
    register();
    
}

