export type categoria = "alimentação" | "transporte" | "moradia" | "lazer";

export interface Despesa {
  id: number;
  descricao: string;
  valor: number;
  categoria: categoria;
  mes: number;
  observacao?: string;
}

export const CATEGORIAS: categoria[] = [
  "alimentação",
  "transporte",
  "moradia",
  "lazer"
];