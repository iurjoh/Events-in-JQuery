# jQuery events

[English](README.md)

## Ideia e processo

Código educacional revisado em 01/10/2026. Não foram encontrados plano datado, wireframes ou diário pessoal nos arquivos revisados. Este README registra o exercício implementado, sem inventar histórico. A estrutura revisada não tem backend ou banco.

## Arquitetura e design

Cards-jquery.html carrega jQuery 3.2.1 por CDN, style.css e script.js. Três handlers removem o destaque de todos os streams e destacam o selecionado. Soluções de desafio de parágrafo/título/mouse estão comentadas, não ativas. CSS usa cards flex com quebra e breakpoint de navegação em 700px. Textos, imagens e marca de curso são demonstração, não serviço real.

## Preview local

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000/Cards-jquery.html`. Arquivos estáticos revisados não exigem instalação de pacotes; fontes/bibliotecas externas precisam de rede. Comando não executado nesta atualização.

## Testes e limites

Nenhuma suíte automatizada encontrada na listagem revisada da raiz. Comportamento no navegador não testado e nenhum deploy público confirmado aqui. Teste cada stream e confirme destaque só nos cards correspondentes. Verifique telas estreitas, CDN/imagens e teclado. Controles de navegação são itens de lista, não botões; links vazios são placeholders. Revise acessibilidade antes de reutilizar.

## Capturas

Nenhuma captura de aplicação verificada ou adicionada. Capturas futuras devem usar arquivos datados em `docs/assets/`, mostrar estados inicial/alterado em desktop/mobile e identificar o exercício de aula. Só adicione links após as imagens existirem.

## Créditos e licença

Baseado no [template Gitpod do Code Institute](https://github.com/Code-Institute-Org/gitpod-full-template) e exercícios do curso. Direitos de código, imagens e bibliotecas de terceiros preservados, sem nova licença. README original mantido no [apêndice em inglês](README.md#original-readme), como referência histórica.
