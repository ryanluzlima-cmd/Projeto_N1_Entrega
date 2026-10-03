import type { Despesa, categoria } from "./tipos.js";

export function adicionarDespesa(
  despesas: Despesa[],
  nova: Despesa
): Despesa[] {
  throw new Error("não implementadoiu");
}

export function removerDespesa(
  despesas: Despesa[],
  id: number
): Despesa[] {
  throw new Error("não implementado");
}

export function despesasDaCategoria(
  despesas: Despesa[],
  categoria: categoria
): Despesa[] {
  throw new Error("não implementado");
}

export function totalGasto(despesas: Despesa[]): number {
  throw new Error("não implementado");
}

export function maiorDespesa(
  despesas: Despesa[]
): Despesa | undefined {
  throw new Error("não implementado");
}