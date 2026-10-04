import type { Despesa, categoria } from "./tipos.js";
import  { CATEGORIAS } from "./tipos.js";

export function descricaoCategoria(categoria: categoria): string {
  switch (categoria) {          //utilizando a função switch para retornar resultados
    case "alimentação":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "moradia":
      return "Moradia";
    case "lazer":
      return "Lazer";
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  for (let i = 0; i < 4; i++) {
    matriz[i] = [];

    for (let j = 0; j < 12; j++) {
      matriz[i]![j] = 0;
    }
  }

  for (let i = 0; i < despesas.length; i++) {
    const despesa = despesas[i]!;

    const linha = CATEGORIAS.indexOf(despesa.categoria);
    const coluna = despesa.mes - 1;

    matriz[linha]![coluna]! += despesa.valor;
  }

  return matriz;
}


export function formatarRelatorio(despesas: Despesa[]): string {
  let relatorio = "RELATÓRIO DE GASTOS\n";

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const categoria = CATEGORIAS[i];
    let total = 0;

    for (let j = 0; j < despesas.length; j++) {
      if (despesas[j]!.categoria === categoria) {
        total += despesas[j]!.valor;
      }
    }

    relatorio += `${descricaoCategoria(categoria!)}: R$ ${total.toFixed(2)}\n`;
  }

  return relatorio;
}