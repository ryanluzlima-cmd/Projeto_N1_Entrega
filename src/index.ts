import type { Despesa } from "./tipos.js";
import { formatarRelatorio } from "./relatorio.js";

const despesasExemplo: Despesa[] = [
  {
    id: 1,
    descricao: "Almoço",
    valor: 30,
    categoria: "alimentação",
    mes: 1
  },
  {
    id: 2,
    descricao: "Ônibus",
    valor: 10,
    categoria: "transporte",
    mes: 1
  },
  {
    id: 3,
    descricao: "Aluguel",
    valor: 800,
    categoria: "moradia",
    mes: 1
  },
  {
    id: 4,
    descricao: "Cinema",
    valor: 40,
    categoria: "lazer",
    mes: 2
  },
  {
    id: 5,
    descricao: "Mercado",
    valor: 150,
    categoria: "alimentação",
    mes: 2
  },
  {
    id: 6,
    descricao: "Gasolina",
    valor: 100,
    categoria: "transporte",
    mes: 3
  },
  {
    id: 7,
    descricao: "Aluguel",
    valor: 800,
    categoria: "moradia",
    mes: 3
  },
  {
    id: 8,
    descricao: "Jogo",
    valor: 50,
    categoria: "lazer",
    mes: 3
  }
];

const relatorio = formatarRelatorio(despesasExemplo);

console.log(relatorio);