    /* ══ TROCA DE TEMA ══ */
    var temasBtns = document.querySelectorAll('.tema-btn');
    temasBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tema = this.dataset.tema;
        document.body.dataset.tema = tema;
        temasBtns.forEach(function(b) { b.classList.remove('ativo'); });
        this.classList.add('ativo');
        localStorage.setItem('atom-tema', tema);
      });
    });

    (function() {
      var salvo = localStorage.getItem('atom-tema');
      if (salvo) {
        document.body.dataset.tema = salvo;
        temasBtns.forEach(function(b) {
          b.classList.toggle('ativo', b.dataset.tema === salvo);
        });
      }
    })();

    /* ══ TABS ══ */
    var tabBtns   = document.querySelectorAll('.tab-btn');
    var paineis   = { contato: document.getElementById('painel-contato'), quiz: document.getElementById('painel-quiz') };

    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        tabBtns.forEach(function(b) { b.classList.remove('ativo'); b.setAttribute('aria-selected', 'false'); });
        Object.values(paineis).forEach(function(p) { p.classList.remove('ativo'); });
        this.classList.add('ativo');
        this.setAttribute('aria-selected', 'true');
        paineis[this.dataset.tab].classList.add('ativo');
      });
    });

    /* ══ FORMULÁRIO — VALIDAÇÃO ══ */
    var form = document.getElementById('form-contato');

    function validarEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    function setErro(campo, erroId, msg) {
      campo.classList.toggle('erro', !!msg);
      document.getElementById(erroId).textContent = msg || '';
    }

    function limparErro(campo, erroId) {
      campo.classList.remove('erro');
      document.getElementById(erroId).textContent = '';
    }

    ['f-nome','f-email','f-segmento','f-mensagem'].forEach(function(id) {
      var el = document.getElementById(id);
      el.addEventListener('input', function() { limparErro(el, 'err-' + id.replace('f-','')); });
      el.addEventListener('change', function() { limparErro(el, 'err-' + id.replace('f-','')); });
    });

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var valido = true;

      var nome = document.getElementById('f-nome');
      if (!nome.value.trim() || nome.value.trim().length < 3) {
        setErro(nome, 'err-nome', 'Informe seu nome completo (mínimo 3 caracteres).'); valido = false;
      } else { limparErro(nome, 'err-nome'); }

      var email = document.getElementById('f-email');
      if (!email.value.trim()) {
        setErro(email, 'err-email', 'O e-mail é obrigatório.'); valido = false;
      } else if (!validarEmail(email.value.trim())) {
        setErro(email, 'err-email', 'Informe um e-mail válido.'); valido = false;
      } else { limparErro(email, 'err-email'); }

      var seg = document.getElementById('f-segmento');
      if (!seg.value) {
        setErro(seg, 'err-segmento', 'Selecione um segmento.'); valido = false;
      } else { limparErro(seg, 'err-segmento'); }

      var msg = document.getElementById('f-mensagem');
      if (!msg.value.trim() || msg.value.trim().length < 10) {
        setErro(msg, 'err-mensagem', 'Mensagem muito curta (mínimo 10 caracteres).'); valido = false;
      } else { limparErro(msg, 'err-mensagem'); }

      if (!valido) return;

      document.getElementById('alerta-sucesso').classList.add('visivel');
      form.reset();
      setTimeout(function() {
        document.getElementById('alerta-sucesso').classList.remove('visivel');
      }, 6000);
    });

    /* ══ QUIZ ══ */
    var perguntas = [
      {
        enunciado: 'Qual é o principal problema que o AES (Adaptative Electrodynamic Shield) resolve nos painéis solares?',
        opcoes: ['Superaquecimento dos painéis', 'Acúmulo de poeira que reduz a eficiência', 'Corrosão por água da chuva', 'Falhas elétricas internas'],
        certa: 1,
        feedback: 'O AES foi projetado especificamente para eliminar a deposição de partículas de poeira, que é o principal inimigo silencioso da geração fotovoltaica.'
      },
      {
        enunciado: 'Em quanto a poeira pode reduzir a eficiência de painéis solares sem proteção adequada?',
        opcoes: ['Até 5%', 'Até 10%', 'Até 30%', 'Até 60%'],
        certa: 2,
        feedback: 'A poeira pode derrubar a geração de energia em até 30%, uma perda silenciosa que não dispara alarmes mas corrói o investimento continuamente.'
      },
      {
        enunciado: 'De qual ambiente de pesquisa foi originalmente adaptada a tecnologia do AES?',
        opcoes: ['Submarinos de profundidade', 'Missões espaciais e instrumentos lunares', 'Aceleradores de partículas', 'Plataformas de petróleo offshore'],
        certa: 1,
        feedback: 'O AES foi desenvolvido originalmente para proteger instrumentos sensíveis de missões espaciais contra deposição de poeira, especialmente em ambientes lunares.'
      },
      {
        enunciado: 'Qual é a estimativa de redução dos custos de manutenção operacional com o uso do AES?',
        opcoes: ['20%', '50%', '70%', '80%'],
        certa: 3,
        feedback: 'O AES reduz em média 80% dos custos operacionais associados à manutenção de painéis solares, eliminando limpezas periódicas.'
      },
      {
        enunciado: 'Quantos litros de água o processo eletrostático do AES consome durante a limpeza?',
        opcoes: ['50 litros por ciclo', '10 litros por ciclo', '1 litro por ciclo', 'Zero litros'],
        certa: 3,
        feedback: 'O processo eletrostático do AES dispensa completamente o uso de água, tornando-o ideal para regiões áridas onde a energia solar é mais abundante.'
      },
      {
        enunciado: 'Qual é a vida útil estimada dos componentes do AES?',
        opcoes: ['5 anos', '10 anos', 'Mais de 25 anos', '50 anos'],
        certa: 2,
        feedback: 'Os componentes do AES têm vida útil superior a 25 anos, compatíveis com os principais fabricantes de painéis fotovoltaicos do mercado.'
      },
      {
        enunciado: 'Em qual tipo de ambiente o AES entrega sua máxima performance?',
        opcoes: ['Ambientes úmidos e costeiros', 'Regiões polares com neve', 'Regiões áridas e semi-áridas com alta irradiação', 'Florestas com muita sombra'],
        certa: 2,
        feedback: 'Regiões áridas possuem maior irradiação solar, mas também maior deposição de poeira — exatamente onde o AES brilha com sua máxima performance.'
      },
      {
        enunciado: 'Qual é o principal foco de mercado (segmento) da Atom com o AES?',
        opcoes: ['B2C — consumidor final', 'B2B — empresas e geradoras', 'B2G — governo e municípios', 'B2B2C — distribuidoras'],
        certa: 1,
        feedback: 'O AES foi desenvolvido com foco principal em B2B, atendendo geradoras de energia, integradoras solares, usinas fotovoltaicas e grandes instalações industriais.'
      },
      {
        enunciado: 'Qual é a meta de capacidade protegida pelo AES até 2030?',
        opcoes: ['50 MW', '100 MW', '500 MW', '1 GW'],
        certa: 2,
        feedback: 'A Atom tem como objetivo proteger 500 MW de capacidade instalada até 2030, com foco em escala nacional e expansão regional.'
      },
      {
        enunciado: 'Comparado a sistemas convencionais, em quanto o AES pode acelerar o retorno do investimento (ROI)?',
        opcoes: ['10% mais rápido', '20% mais rápido', '40% mais rápido', '100% mais rápido'],
        certa: 2,
        feedback: 'O AES permite retorno do investimento até 40% mais rápido em comparação com sistemas convencionais, graças ao aumento contínuo de geração e redução de custos operacionais.'
      }
    ];

    var atual    = 0;
    var acertos  = 0;
    var respondeu = false;

    var progInner   = document.getElementById('prog-inner');
    var quizNumEl   = document.getElementById('quiz-num');
    var quizPontosEl= document.getElementById('quiz-pontos');
    var enunciadoEl = document.getElementById('enunciado');
    var listaEl     = document.getElementById('lista-opcoes');
    var feedbackEl  = document.getElementById('feedback-quiz');
    var btnProx     = document.getElementById('btn-proximo');
    var blocoQuiz   = document.getElementById('bloco-quiz');
    var resultadoEl = document.getElementById('resultado-quiz');

    function renderPergunta() {
      respondeu = false;
      var p = perguntas[atual];
      progInner.style.width = (atual / perguntas.length * 100) + '%';
      quizNumEl.textContent  = 'Pergunta ' + String(atual + 1).padStart(2,'0') + ' de ' + perguntas.length;
      quizPontosEl.textContent = acertos + ' acerto' + (acertos !== 1 ? 's' : '');
      enunciadoEl.textContent = p.enunciado;
      feedbackEl.textContent  = '';
      btnProx.classList.remove('visivel');
      listaEl.innerHTML = '';

      p.opcoes.forEach(function(op, i) {
        var li  = document.createElement('li');
        var btn = document.createElement('button');
        btn.className = 'opcao-btn';
        btn.textContent = op;
        btn.addEventListener('click', function() { responder(i); });
        li.appendChild(btn);
        listaEl.appendChild(li);
      });
    }

    function responder(idx) {
      if (respondeu) return;
      respondeu = true;
      var p = perguntas[atual];
      var botoes = listaEl.querySelectorAll('.opcao-btn');
      botoes.forEach(function(b) { b.disabled = true; });

      if (idx === p.certa) {
        acertos++;
        botoes[idx].classList.add('certa');
        feedbackEl.textContent = '✓ Correto! ' + p.feedback;
        feedbackEl.style.color = '#34d399';
      } else {
        botoes[idx].classList.add('errada');
        botoes[p.certa].classList.add('certa');
        feedbackEl.textContent = '✗ Incorreto. ' + p.feedback;
        feedbackEl.style.color = '#ff6868';
      }
      quizPontosEl.textContent = acertos + ' acerto' + (acertos !== 1 ? 's' : '');
      btnProx.classList.add('visivel');
    }

    btnProx.addEventListener('click', function() {
      atual++;
      if (atual < perguntas.length) {
        renderPergunta();
      } else {
        mostrarResultado();
      }
    });

    function mostrarResultado() {
      progInner.style.width = '100%';
      blocoQuiz.style.display = 'none';
      resultadoEl.classList.add('visivel');

      var pct = Math.round(acertos / perguntas.length * 100);
      document.getElementById('res-nota').textContent = acertos + '/' + perguntas.length;

      var icone, titulo, desc;
      if (acertos >= 9) {
        icone = '🚀'; titulo = 'Expert em AES!'; desc = 'Impressionante! Você domina completamente a tecnologia AES e o universo da energia solar. A Atom agradece sua atenção ao conteúdo.';
      } else if (acertos >= 7) {
        icone = '⚡'; titulo = 'Muito Bom!'; desc = 'Você tem sólido conhecimento sobre o AES. Revise os pontos em que errou e você estará pronto para qualquer conversa sobre energia solar.';
      } else if (acertos >= 5) {
        icone = '🌤️'; titulo = 'Bom começo!'; desc = 'Você tem um conhecimento razoável, mas ainda há bastante para descobrir. Que tal explorar o site novamente e tentar de novo?';
      } else {
        icone = '🌱'; titulo = 'Continue aprendendo'; desc = 'Nada mal para um primeiro contato! Explore as seções do site sobre o AES e tente novamente — a curva de aprendizado é rápida.';
      }

      document.getElementById('res-icone').textContent = icone;
      document.getElementById('res-titulo').textContent = titulo;
      document.getElementById('res-desc').textContent   = desc;

      setTimeout(function() {
        document.getElementById('barra-acerto-inner').style.width = pct + '%';
      }, 200);
    }

    document.getElementById('btn-refazer').addEventListener('click', function() {
      atual   = 0;
      acertos = 0;
      resultadoEl.classList.remove('visivel');
      blocoQuiz.style.display = '';
      document.getElementById('barra-acerto-inner').style.width = '0%';
      renderPergunta();
    });

    renderPergunta();