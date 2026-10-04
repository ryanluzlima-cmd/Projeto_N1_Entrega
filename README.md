# Projeto_N1_Entrega
Esse projeto é a versão final dos teste para envio, sendo um projeto foca em testar o testes do Ts e os comandos do Ts.

## Controle de gastos do Mês

## Comandos para instalar, rodar e testar o projeto
1. npm init -y;                                       / npm install - para instalar as pastas
2. npm i -D typescript;                               / npm test - para executar os testes
3. npm i -D tsx;                                      / npm run dev - para executar o programa
4. npm i -D vitest;
5. npm i -D @types/node;
6. npx tsc --init;
7. npx tsc;
8. npx vitest run;
9.dir;
10.cd;
11.npm run dev;
12.npx tsx src/index.ts;

2. Arquivos de Configuração
 -package.json: contém as informações do projeto, dependências e scripts utilizados.
 -tsconfig.json: define as configurações do TypeScript.
 -.gitignore: define arquivos e pastas que não devem ser enviados para o Git.
 -node_modules: pasta que armazena as dependências e bibliotecas instaladas pelo projeto através do npm.

3.
## Registro de Uso de IA

| Função | Prompt enviado | Código gerado funcionou de primeira? | Ajuste manual necessário |
| :--- | :--- | :--- | :--- |
| `adicionarDespesa` | Implementar a função para adicionar uma nova despesa sem alterar o array original. | Sim | Não |
| `removerDespesa` | Implementar a função para remover uma despesa pelo ID. | Não | Houve problemas para ajustar o comando de identificação
| `despesasDaCategoria` | Implementar a função para filtrar despesas por categoria. | Sim | Não |
| `totalGasto` | Implementar a função para calcular o total das despesas. | Sim | Não |
| `maiorDespesa` | Implementar a função para encontrar a maior despesa. | Sim | Não |
| `descricaoCategoria` | Implementar a função utilizando switch para retornar o nome da categoria. | Sim | Não |
| `matrizCategoriaMes` | Implementar uma matriz de categorias e meses utilizando apenas for. | Não | Foi necessário ajustar o acesso aos elementos da matriz. |
| `formatarRelatorio` | Implementar a função para gerar o relatório dos gastos. | Não | Houve problemas no proprio teste por "underfined" juntamente com o codigo "{descricaoCategoria(categoria*!*)}"

4.
## Reflexão 
Durante o desenvolvimento, a IA ajudou na orientação para as funções e na criação dos testes.
Foi necessário revisar o código gerado para verificar se ele seguia as regras do projeto, tendo problemas para seguir alguns determinados passos como, "Não gerar o codigo pra test.ts", sendo usado apenas para consultar como funciona so comandos e sua construção no codigo
Na função "matrizCategoriaMes", foi necessário ajustar o acesso aos elementos da matriz devido às verificações do TypeScript.
Também foi importante conferir se os arrays originais não eram alterados pelas funções.
Os testes ajudaram a identificar erros antes de finalizar as implementações.
Além dos testes normais, foram considerados testes para situações como arrays vazios, valores limites e valores indeterminados.
Sendo necessario uma constante revisão do código para que chega-se no resultado desejado.
 -Sendo necessario criar outros documentos para conseguir realizar o passo a passo sem que houvesse problemas.

Atividade: Ryan Brayan Luz de Lima