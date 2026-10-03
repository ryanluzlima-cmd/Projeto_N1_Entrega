export type categ = "alimentação" | "transporte" | "moradia" | "lazer";

export interface Despesa {
  id: number;
  descricao: string;
  valor: number;
  categoria: categ;
  mes: number;
  observacao?: string;
}

export const CATEGORIAS: categ[] = [
  "alimentação",
  "transporte",
  "moradia",
  "lazer"
];