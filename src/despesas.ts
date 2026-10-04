import type { Despesa, categoria } from "./tipos.js";

export function adicionarDespesa(
  despesas: Despesa[],
  nova: Despesa
): Despesa[] {
  return [...despesas, nova];
}

export function removerDespesa(
  despesas: Despesa[],
  id: number
): Despesa[] {
  return despesas.filter(despesa => despesa.id !== id);
}

export function despesasDaCategoria(
  despesas: Despesa[],
  categoria: categoria
): Despesa[] {
  return despesas.filter(despesa => despesa.categoria === categoria);
}

export function totalGasto(despesas: Despesa[]): number {
  return despesas.reduce((total, despesa) => total + despesa.valor, 0);
}

export function maiorDespesa(
  despesas: Despesa[]
): Despesa | undefined {
  if (despesas.length === 0) {
    return undefined;
  }

  return despesas.reduce((maior, despesa) =>
    despesa.valor > maior.valor ? despesa : maior
  );
}