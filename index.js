import { Diretor } from "./funcionarios/Diretor.js"
import { Gerente } from "./funcionarios/Gerente.js"
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js"
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Fernando", 10000, 12345678910);
const gerente = new Gerente("Ana", 6000, 98765432101);

const cliente1 = new Cliente("fulano", 12345678954, "1212")

diretor.cadastrarSenha("123456");

const estaLogado = SistemaDeAutenticacao.login(diretor, "123456");
const clinte1Logado = SistemaDeAutenticacao.login(cliente1, "1212");
console.log(estaLogado, clinte1Logado);