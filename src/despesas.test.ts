import { describe, expect, it } from "vitest";
import { adicionarDespesa,removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas.js"; //IMPORTANTO FUNCTION
import type { Despesa } from "./tipos.js";
import { matrizCategoriaMes } from "./relatorio.js";

describe("adicionarDespesa", () => {
  it("deve adicionar uma despesa", () => {
    const despesas: Despesa[] = [];  //Isso significa que é vazio essa array

    const nova: Despesa = {
      id: 1,
      descricao: "Almoço",
      valor: 30,
      categoria: "alimentação",
      mes: 1
    };

    const resultado = adicionarDespesa(despesas, nova);

    expect(resultado).toEqual([nova]); //EXPCT = Resultado esperado
  });
});

describe("removerDespesa", () => {
  it("deve remover uma despesa", () => {
    const despesas: Despesa[] = [
      {
        id: 1,
        descricao: "Almoço",
        valor: 30,
        categoria: "alimentação",
        mes: 1
      }
    ];

    const resultado = removerDespesa(despesas, 1);

    expect(resultado).toEqual([]);
  });
});


describe("despesasDaCategoria", () => {
  it("deve encontrar despesas da categoria", () => {
    const despesas: Despesa[] = [
      {
        id: 1,
        descricao: "Almoço",
        valor: 30,
        categoria: "alimentação",
        mes: 1
      }
    ];

    const resultado = despesasDaCategoria(despesas, "alimentação");

    expect(resultado).toEqual(despesas);
  });
});


describe("totalGasto", () => {
  it("deve somar as despesas", () => {
    const despesas: Despesa[] = [
      {
        id: 1,
        descricao: "Almoço",
        valor: 30,
        categoria: "alimentação",
        mes: 1
      },
      {
        id: 2,
        descricao: "Cinema",
        valor: 20,
        categoria: "lazer",
        mes: 2
      }
    ];

    expect(totalGasto(despesas)).toBe(50);
  });
});


describe("maiorDespesa", () => {
  it("deve encontrar a maior despesa", () => {
    const despesas: Despesa[] = [
      {
        id: 1,
        descricao: "Almoço",
        valor: 30,
        categoria: "alimentação",
        mes: 1
      },
      {
        id: 2,
        descricao: "Aluguel",
        valor: 800,
        categoria: "moradia",
        mes: 1
      }
    ];

    expect(maiorDespesa(despesas)).toEqual(despesas[1]);
  });
});