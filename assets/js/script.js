/* ── nav-bar ── */
var todosLinksNav = document.querySelectorAll('.nav-links a');
var todasSecoes   = document.querySelectorAll('section[id]');

function atualizarNavAtiva() {
  var atual = '';
  todasSecoes.forEach(function(sec) {
    var rect = sec.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.45) {
      atual = sec.id;
    }
  });
  todosLinksNav.forEach(function(a) {
    a.classList.toggle('ativo', a.getAttribute('href') === '#' + atual);
  });
}

window.addEventListener('scroll', atualizarNavAtiva, { passive: true });
atualizarNavAtiva();


/* ── SCROLL ANIMAÇÃO  ── */
var observadorReveal = new IntersectionObserver(function(entradas) {
  entradas.forEach(function(entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
      observadorReveal.unobserve(entrada.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.conteudo, .conteudo-cta').forEach(function(el) {
  observadorReveal.observe(el);
});


/* ── slides/carrosel de img ── */
var slides = [
  {
    img:   'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=540&fit=crop&auto=format',
    emblema: 'Residencial',
    titulo: 'Telhados Urbanos',
    corpo:  'O AES protege painéis residenciais contra a deposição de partículas finas, garantindo geração estável ao longo de todas as estações do ano sem qualquer intervenção manual.'
  },
  {
    img:   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=540&fit=crop&auto=format',
    emblema: 'Industrial',
    titulo: 'Usinas de Grande Porte',
    corpo:  'Em fazendas solares de megawatts, o AES elimina a necessidade de frotas de limpeza e reduz perdas por sujeira em ambientes de alta irradiação.'
  },
  {
    img:   'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    emblema: 'Agrovoltaico',
    titulo: 'A junção do Solo e da Energia',
    corpo:  'Sistemas agrovoltaicos combinam produção agrícola com geração de energia - o AES garante que a eficiência não seja comprometida em terrenos expostos ao pó.'
  },
  {
    img:   'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=900&h=540&fit=crop&auto=format',
    emblema: 'Deserto & Semi-árido',
    titulo: 'Ambientes que te levam ao extremo',
    corpo:  'Regiões áridas possuem maior irradiação solar, mas também maior deposição de poeira - exatamente onde o AES entrega sua máxima performance.'
  }
];

var carAtual  = 0;
var carOcupado = false;

var carCartao   = document.getElementById('car-cartao');
var carImg      = document.getElementById('car-img');
var carEmblema  = document.getElementById('car-emblema');
var carTitulo   = document.getElementById('car-titulo');
var carCorpo    = document.getElementById('car-corpo');
var carContagem = document.getElementById('car-contagem');
var carPontos   = document.getElementById('car-pontos');

/* PONTOS DO ATOM */
slides.forEach(function(_, i) {
  var btn = document.createElement('button');
  btn.className = 'ponto' + (i === 0 ? ' ativo' : '');
  btn.setAttribute('aria-label', 'Slide ' + (i + 1));
  btn.addEventListener('click', function() { irParaSlide(i); });
  carPontos.appendChild(btn);
});

function renderizarSlide() {
  var s = slides[carAtual];
  carImg.src             = s.img;
  carImg.alt             = s.titulo;
  carEmblema.textContent = s.emblema;
  carTitulo.textContent  = s.titulo;
  carCorpo.textContent   = s.corpo;
  carContagem.textContent =
    String(carAtual + 1).padStart(2, '0') + ' / ' +
    String(slides.length).padStart(2, '0');

  carPontos.querySelectorAll('.ponto').forEach(function(p, i) {
    p.classList.toggle('ativo', i === carAtual);
  });
}

function irParaSlide(indice) {
  if (carOcupado || indice === carAtual) return;
  carOcupado = true;
  carCartao.classList.add('esmaecendo');
  setTimeout(function() {
    carAtual = ((indice % slides.length) + slides.length) % slides.length;
    renderizarSlide();
    carCartao.classList.remove('esmaecendo');
    carOcupado = false;
  }, 290);
}

document.getElementById('car-anterior').addEventListener('click', function() {
  irParaSlide(carAtual - 1);
});

document.getElementById('car-proximo').addEventListener('click', function() {
  irParaSlide(carAtual + 1);
});

renderizarSlide();