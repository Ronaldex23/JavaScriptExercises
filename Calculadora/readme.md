# Calculadora WEB 📱

## 📄 Visão Geral do Projeto

Projeto de uma calculadora simples feita em HTML, CSS e JavaScript. A calculadora fornece operações aritméticas básicas (soma, subtração, multiplicação e divisão), exibição dos números no visor e funcionalidades para limpar dígitos, limpar tudo e calcular o resultado.

## Estrutura de Arquivos

`index.html` : página principal com a interface da calculadora.
`script.js`  : lógica em JavaScript (captura de eventos, armazenamento de números, cálculo e formatação do resultado).
`css/`       : pasta com os estilos.
  - `main.css`   : estilos gerais e import do arquivo de botões.
  - `button.css` : estilos relacionados aos botões da calculadora.

## 🌟 Comportamentos e Funcionalidades

- Inserção de números: clique nos botões de número para compor o valor mostrado no visor.
- Operadores: clique em `+`, `-`, `*`, `/` para definir a operação.
- `Backspace`: remove o último dígito do visor; se for o último dígito, reinicia para `0`.
- `CE`: limpa todos os valores e reseta o visor para `0`.
- `=`: realiza o cálculo entre `n1` e `n2` conforme o operador selecionado e exibe o resultado.

Formato do resultado:
- Divisões são formatadas com duas casas decimais (`toFixed(2)`).
- Resultados muito longos (mais de 9 caracteres) são abreviados em notação simples (ex.: `1,2345e8`).

## 📋 Notas sobre a Implementação (arquivo `script.js`)

- Variáveis Principais:
  - `n1`, `n2`: armazenam operandos como `Number`.
  - `operacao`: string com o operador atual (`+`, `-`, `*`, `/`).
  - `Visor` (elemento `#exibicao`): onde os valores são mostrados.

- Fluxo:
  1. Inserção de dígitos com `Inserir()` atualiza o `Visor` e chama `ArmazenarNumero()` para atualizar `n1` ou `n2`.
  2. Ao clicar em um operador, se o último caractere for outro operador, o último é removido antes de inserir o novo.
  3. `Calcular()` verifica validade via `PodeCalcular()` e usa funções arrow locais para cada operação.

- Tratamentos Existentes:
  - Prevenção de divisão por zero com mensagem de alerta.
  - Validação de presença de `n1`, `n2` e uma operação antes de calcular.

## 🛠️ Limitações e Sugestões de Melhoria

- Suporte a teclas do teclado (input via teclado) não está implementado.
- Encadeamento de operações (ex.: `2 + 3 * 4`) não respeita precedência — o projeto atual trata apenas um operador entre dois operandos por vez; transformar a entrada em expressão e usar `eval()` com sanitização ou um parser seria necessário para expressões mais complexas.
- Formatação do visor e controle de ponto decimal (número de casas, evitar múltiplos pontos) podem ser melhorados.
- Internacionalização: separar formatos numéricos para suportar `,` como separador decimal, se desejado.
- Testes automatizados não estão incluídos.

## 🚀 Como Usar

- Abra o arquivo `index.html` em seu navegador;

## 🙌 Como Contribuir

1. Fork ou copie o repositório para seu ambiente.
2. Faça alterações em uma branch separada.
3. Teste abrindo `index.html` no navegador.
4. Abra um pull request descrevendo as mudanças.
