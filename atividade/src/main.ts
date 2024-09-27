import { Produto } from './models/Produto.ts';
import { Carrinho } from './models/Carrinho.ts';
import { Vitrine } from './models/Vitrine.ts';
import { Checkout } from './models/Checkout.ts';
import {Roupa} from "./models/Roupa.ts"

const produto1 = new Produto('Camisa', 'Roupas', 1, 50, 'foto1.jpg');
const produto2 = new Produto('Tênis', 'Calçados', 2, 200, 'foto2.jpg');

// Testando Carrinho
const carrinho = new Carrinho();
carrinho.adicionar(produto1, 2);
carrinho.adicionar(produto2, 1);
carrinho.listar();

// Checkout
const checkout = new Checkout('Rua ABC, 123', 'Cartão de Crédito', carrinho);
checkout.processarPagamento();
checkout.atualizaEstoque();

// Testando a Vitrine
const vitrine = new Vitrine();
vitrine.adicionarDestaque(produto1);
vitrine.adicionarCategoria('Roupas', produto1);
vitrine.adicionarCategoria('Calçados', produto2);

// Listando os produtos da vitrine
vitrine.listarDestaque();
vitrine.listarCategoria('Roupas');
vitrine.listarCategoria('Calçados');

console.log("Testando Herança Class Roupa");

const roupa = new Roupa('Camiseta',"Roupa", 1, 60, 'fotoCamiseta.jpg','Tamanho g', "Preta");
const camisa = new Roupa("Camisa", "Masculino", 1, 49.99, "foto1.jpg", "M", "Azul");
const calca = new Roupa("Calça", "Feminino", 2, 89.99, "foto2.jpg", "G", "Preta");

roupa.mostrarDetalhes();
camisa.mostrarDetalhes();
calca.mostrarDetalhes();

console.log(Roupa.descricaoGenerica());
console.log(Roupa.totalDeRoupasCriadas());