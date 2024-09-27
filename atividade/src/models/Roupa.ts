import { Produto } from './Produto';

interface Detalhes {
    mostrarDetalhes(): void;
}

export class Roupa extends Produto implements Detalhes {

    static contadorDeRoupas: number = 0;

    constructor(
        nome: string, 
        departamento:string, 
        id: number, 
        preco: number, 
        foto: string, 
        public tamanho: string, 
        public cor: string
    ) {

        super(nome,departamento, id, preco, foto);

        Roupa.contadorDeRoupas++;
    }

    mostrarDetalhes() {  
        console.log(`Nome: ${this.nome} | Tamanho: ${this.tamanho} | Cor: ${this.cor} | Preço: R$ ${this.preco}`);
    }

    static descricaoGenerica(): string {
        return "Roupas são peças de vestuário disponíveis em diferentes tamanhos e cores.";
    }

    static totalDeRoupasCriadas(): number {
        return Roupa.contadorDeRoupas;
    }
}
