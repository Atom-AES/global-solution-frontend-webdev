# Atom — Adaptive Electrodynamic Shield

Projeto acadêmico desenvolvido para as disciplinas de **Front-End Design** e **Web Development** do curso de **Engenharia de Software** da **FIAP - Faculdade de Informática e Administração Paulista**, turma 2026.

---

## Sobre o Projeto

A Atom é uma empresa fictícia criada para contextualizar e dar propósito real ao desenvolvimento deste projeto (e de muitos outros). Ela nasce da premissa de que toda tecnologia de impacto começa com um problema genuíno - neste caso, a perda silenciosa de eficiência em painéis solares causada pelo acúmulo de poeira.

Um dos produtos centrais da Atom é o **AES (Adaptive Electrodynamic Shield)**, uma tecnologia eletrostática originalmente desenvolvida para missões espaciais e reinterpretada para uso terrestres em instalações fotovoltaicas. O site apresenta a solução, seus benefícios, aplicações e a equipe responsável - tudo em um design imersivo e coerente com o universo temático escolhido.

O site foi pensado como um produto real, com atenção à experiência do usuário, fluxo de informação, responsividade e interatividade.

---

## Estrutura do Projeto

```
projeto/
├── assets/
│   ├── css/
│   │   ├── interacao.css      
│   │   └── style.css
│   └── js/
│       ├── quiz.js
│       └── script.js
├── pages/
│   └── contato.html            
├── src/
│   ├── img/                             #demais arquivos de imagem
│   └── media/                           #vídeos
├── index.html
├── integrantes.txt
└── README.md
```

---

## Funcionalidades

**Página principal (`index.html`)**

- Navbar fixa com destaque da seção ativa por scroll
- Animações de entrada por IntersectionObserver
- Carrossel de aplicações com transições suavizadas
- Grade de benefícios e cards de equipe com hover elaborado
- Seção CTA com redirecionamento para a página de interações

**Página de interação (`interacao.html`)**

- Formulário completo com validação de todos os campos obrigatórios: nome, e-mail corporativo, segmento de atuação e mensagem. Nenhum campo obrigatório pode ser enviado vazio, e o e-mail é validado por formato.
- Quiz de 10 perguntas sobre energia solar e o AES, com feedback explicativo por questão, barra de progresso, contagem de acertos em tempo real e resultado final categorizado em quatro níveis de desempenho.
- Seletor de temas com três opções visuais — Cosmos (padrão), Aurora e Solar — com persistência via `localStorage`.

---

## Temas Disponíveis

| Tema | Acento principal | Acento secundário | Perfil |
|---|---|---|---|
| Cosmos | Ciano `#00c8ff` | Âmbar `#f5a623` | Espacial, profundo |
| Aurora | Lavanda `#a78bfa` | Esmeralda `#34d399` | Etéreo, suave |
| Solar | Laranja `#fb923c` | Dourado `#fbbf24` | Quente, enérgico |

---

## Tecnologias Utilizadas

- **HTML5** - estrutura semântica e acessível
- **CSS3** - variáveis customizadas, Grid, Flexbox, animações e media queries
- **JavaScript (ES6+)** - manipulação de DOM, IntersectionObserver, localStorage e lógica de quiz sem dependências externas
- **Google Fonts** - Playfair Display e DM Sans
- **Formato AVIF** - imagens de alta qualidade com compressão superior para as seções de fundo

Nenhum framework ou biblioteca externa foi utilizado. Todo o código é nativo.

---

## Como Executar

O projeto não requer instalação ou servidor de build. Basta abrir o arquivo `index.html` em qualquer navegador moderno.

Para uma experiência completa com carregamento correto das imagens e fontes, recomenda-se usar um servidor local simples. Com a extensão **Live Server** no VS Code, basta clicar em "Go Live" na barra de status.

```bash
# Alternativamente, com Python instalado:
python -m http.server 5500
```

Em seguida, acesse `http://localhost:5500` no navegador.

---

## Equipe

| Nome | RM | Área de atuação no projeto |
|---|---|---|
| Gabriel Almeida | 573690 | Desenvolvimento front-end, estrutura HTML e JavaScript |
| Kaue Tsuyoshi | 571192 | Desenvolvimento front-end, Python e lógica de dados |
| Diego Rayham | 569129 | Desenvolvimento front-end, Kotlin e integração |
| Roberto Dantas | 566716 | Design de interface, CSS e experiência do usuário |

---

## Contexto Acadêmico

Este projeto foi desenvolvido exclusivamente para fins acadêmicos, como avaliação parcial das disciplinas de Front-End Design e Web Development do curso de Engenharia de Software da FIAP. A empresa Atom, o produto AES e todos os dados apresentados no site são fictícios e criados para dar coerência narrativa ao projeto.

Qualquer semelhança com produtos, empresas ou tecnologias reais é coincidência.

---

## Observações Finais

O projeto foi construído com atenção à qualidade do código e à coerência visual. Optamos por não utilizar frameworks para demonstrar domínio das tecnologias base exigidas pelas disciplinas, mantendo todo o controle sobre estrutura, estilo e comportamento da aplicação.
Agradecemos aos professores pelo acompanhamento ao longo do semestre.

---

*FIAP — Faculdade de Informática e Administração Paulista*  
*Engenharia de Software — 2026*
