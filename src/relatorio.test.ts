import { describe, expect, it } from "vitest";
import {descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from "./relatorio.js";

import type { Despesa } from "./tipos.js";


describe("descricaoCategoria", () => {
  it("deve retornar o nome da categoria", () => {
    expect(descricaoCategoria("alimentação")).toBe("Alimentação");
  });
});

describe("matrizCategoriaMes", () => {
  it("deve criar uma matriz com 4 linhas e 12 colunas", () => {
    const despesas: Despesa[] = [];

    const resultado = matrizCategoriaMes(despesas);

    expect(resultado.length).toBe(4);
    expect(resultado[0]!.length).toBe(12);
  });
});

describe("formatarRelatorio", () => {
  it("deve gerar o relatório", () => {
    const despesas: Despesa[] = [
      {
        id: 1,
        descricao: "Almoço",
        valor: 30,
        categoria: "alimentação",
        mes: 1
      }
    ];

    const resultado = formatarRelatorio(despesas);

    expect(resultado).toContain("RELATÓRIO");
  });
});