import { describe, expect, it } from "vitest";
import { adicionarDespesa } from "./despesas.js";
import type { Despesa } from "./tipos.js";

describe("adicionarDespesa", () => {
  it("deve adicionar uma despesa", () => {
    const despesas: Despesa[] = [];

    const nova: Despesa = {
      id: 1,
      descricao: "Almoço",
      valor: 30,
      categoria: "alimentação",
      mes: 1
    };

    const resultado = adicionarDespesa(despesas, nova);

    expect(resultado).toEqual([nova]);
  });
});