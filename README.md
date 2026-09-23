# 🍷 Vinheria Agnello

Site institucional da **Vinheria Agnello**, empresa familiar de vinhos com mais de 15 anos em São Paulo, dirigida por Giulio e sua filha Bianca. Primeiro projeto web do grupo **Fiapos** (FIAP).

## Sobre o projeto

A página apresenta a vinheria e é o primeiro passo para levar a experiência da loja física ao ambiente digital (futuro e-commerce).

Conteúdo da página:

- **Header** com logotipo e mensagem de boas-vindas
- **Banner** principal
- **Sobre a Vinheria**: história e atendimento personalizado
- **Sistema de Gerenciamento de Vinhos**: controle financeiro, compras, estoque e vendas
- **Nossos Vinhos**: rótulos nacionais e internacionais e cuidados de armazenamento
- **Tradição que atravessa gerações**: a família Agnello
- **Mapa** (Google Maps) com a localização
- **Rodapé** com link de início e e-mail de contato

### Cadastro de vinho (JavaScript)

Ao abrir a página, o `script.js` pede os dados de um vinho via `prompt()`:

1. Nome
2. Tipo (Tinto, Branco ou Rosé)
3. Ano da safra
4. Quantidade em estoque

Depois exibe um `alert()` de confirmação e mostra os dados no **console** do navegador (F12 → Console).

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Estrutura

```
vinharia-agnello/
├── index.html
└── src/
    ├── assets/
    │   └── imgs/        # logo, banner e imagens da página
    ├── css/
    │   └── style.css    # estilos da página
    └── js/
        └── script.js    # cadastro de vinho via prompt
```

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/projeto-web-development/vinharia-agnello.git
   ```
2. Abra o `index.html` no navegador (ou use a extensão **Live Server** do VS Code).
3. Responda às perguntas do cadastro e confira o resultado no console.

## Equipe

![Nosso primeiro site](/src/assets/imgs/screenshot.png)

Grupo **Fiapos** 

---

© 2026 Fiapos. Primeiro projeto Web.