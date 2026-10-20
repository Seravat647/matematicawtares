/* =======================================================
   W. T. Ares — Matemática | main.js
   Menu mobile, revelação de seções, busca no site,
   inscrição de newsletter, barra de progresso, botão
   voltar ao topo e botão flutuante de WhatsApp.
   ======================================================= */

/* -------- Número de WhatsApp para contato --------
   Formato: código do país + DDD + número, sem espaços,
   traços ou o sinal de "+". */
const WHATSAPP_NUMBER = "5521971431679";
const WHATSAPP_MESSAGE = "Olá! Vi o site do Curso de Cálculo e gostaria de mais informações.";

/* -------- Índice de busca do site --------
   Sempre que publicar um novo livro ou página, adicione uma
   entrada aqui — a busca já passa a encontrá-la. */
const SITE_INDEX = [
 { title: "Início", url: "index.html", snippet: "Página inicial — Curso de Cálculo I, II, III e Equações Diferenciais de W. T. Ares." },
 { title: "Sobre o Autor", url: "autor.html", snippet: "Bacharel em Matemática, professor de cursos regulares e preparatórios." },
 { title: "O Livro — Curso de Cálculo I", url: "livro.html#calculo-1", snippet: "Limites, derivadas e os fundamentos do cálculo diferencial." },
 { title: "O Livro — Curso de Cálculo II", url: "livro.html#calculo-2", snippet: "Técnicas de integração, sequências, séries e equações diferenciais." },
 { title: "O Livro — Curso de Cálculo III", url: "livro.html#calculo-3", snippet: "Cálculo em várias variáveis, derivadas parciais e integrais múltiplas." },
 { title: "O Livro — Volume IV: Equações Diferenciais", url: "livro.html#calculo-4", snippet: "Quarto volume da coleção, dedicado às equações diferenciais." },
 { title: "A Coleção Completa", url: "livro.html#colecao", snippet: "Os volumes do Curso de Cálculo, lado a lado." },
 { title: "Equações Diferenciais (livro)", url: "livro.html#equacoes-diferenciais", snippet: "Didático para dominar os fundamentos das equações diferenciais, aplicando cálculo diferencial e integral." },
 { title: "Como Adquirir", url: "adquirir.html", snippet: "Compre na Amazon (Kindle) ou na Loja UICLAP." },
 { title: "Trilha de Estudo e Teste de Nível", url: "trilha.html", snippet: "Descubra seu nível e siga a ordem ideal de estudo, do pré-cálculo às equações diferenciais." },
 { title: "Exercícios Resolvidos", url: "exercicios.html", snippet: "Listas de exercícios com resolução passo a passo, por nível de dificuldade." },
 { title: "Exercícios — Cálculo I", url: "exercicios-calculo1.html", snippet: "Exercícios resolvidos de limites, derivadas e aplicações." },
 { title: "Exercícios — Cálculo II", url: "exercicios-calculo2.html", snippet: "Exercícios resolvidos de integrais, técnicas de integração, sequências e séries." },
 { title: "Exercícios — Cálculo III", url: "exercicios-calculo3.html", snippet: "Exercícios resolvidos de várias variáveis, derivadas parciais e integrais múltiplas." },
 { title: "Exercícios — Equações Diferenciais", url: "exercicios-equacoes-diferenciais.html", snippet: "Exercícios resolvidos de EDOs de 1ª e 2ª ordem." },
 { title: "Formulário de Cálculo", url: "formulario.html", snippet: "Fórmulas do pré-cálculo às equações diferenciais: limites, derivadas, integrais, séries." },
 { title: "Formulário de Funções e Curvas", url: "formulario-funcoes.html", snippet: "Funções, gráficos e curvas: propriedades e fórmulas." },
 { title: "Ferramentas Interativas", url: "ferramentas.html", snippet: "Laboratório de Cálculo com derivada, Riemann, Taylor, gradiente, EDO, limites, integral dupla e passo a passo." },
 { title: "Ferramenta — Derivada e reta tangente", url: "ferramentas.html#der", snippet: "Arraste o ponto e veja a reta tangente acompanhar a curva." },
 { title: "Ferramenta — Somas de Riemann", url: "ferramentas.html#rie", snippet: "Aproxime a área sob a curva com retângulos e veja o erro cair." },
 { title: "Ferramenta — Série de Taylor", url: "ferramentas.html#tay", snippet: "Aproxime uma função por um polinômio de grau n." },
 { title: "Ferramenta — Gradiente", url: "ferramentas.html#gra", snippet: "Cálculo III: o gradiente sobre as curvas de nível." },
 { title: "Ferramenta — Campo de direções (EDO)", url: "ferramentas.html#edo", snippet: "Campo de direções e solução numérica de equações diferenciais." },
 { title: "Ferramenta — Limites e continuidade", url: "ferramentas.html#lim", snippet: "Dê zoom no ponto e veja o limite aparecer." },
 { title: "Ferramenta — Integral dupla e volume", url: "ferramentas.html#dup", snippet: "Some colunas sobre retângulos e veja o volume." },
 { title: "Ferramenta — Passo a passo", url: "ferramentas.html#pas", snippet: "Derivadas e integrais explicadas regra por regra." },
 { title: "Tópicos de Cálculo", url: "topicos.html", snippet: "Explicações passo a passo dos principais tópicos." },
 { title: "Regra da cadeia", url: "regra-da-cadeia.html", snippet: "Como derivar funções compostas, com exemplos." },
 { title: "Integração por partes", url: "integracao-por-partes.html", snippet: "Fórmula, passo a passo e exemplos." },
 { title: "Série de Taylor e de Maclaurin", url: "series-de-taylor.html", snippet: "Fórmula, séries de eˣ, sen x e ln(1+x), erro e convergência." },
 { title: "Regra de L'Hôpital", url: "regra-de-lhopital.html", snippet: "Indeterminações 0/0 e ∞/∞, passo a passo e quando falha." },
 { title: "Integrais impróprias", url: "integrais-improprias.html", snippet: "Intervalo infinito, função ilimitada, teste p e comparação." },
 { title: "Convergência de séries", url: "convergencia-de-series.html", snippet: "Testes da razão, comparação, série p e alternada." },
 { title: "Como calcular limites", url: "como-calcular-limites.html", snippet: "Indeterminações, fatoração e limites fundamentais." },
 { title: "EDO linear de 1ª ordem", url: "edo-linear-primeira-ordem.html", snippet: "Fator integrante passo a passo." },
 { title: "Derivadas parciais e gradiente", url: "derivadas-parciais.html", snippet: "Como calcular com exemplos." },
 { title: "Cálculo na Prática", url: "calculo-na-pratica.html", snippet: "Onde o cálculo aparece de verdade: engenharia, física, saúde e calculadoras." },
 { title: "História da Matemática", url: "historia-da-matematica.html", snippet: "Os grandes matemáticos da história, linha do tempo e suas contribuições." },
 { title: "Contato", url: "contato.html", snippet: "tavareswagner21@gmail.com — Instagram, LinkedIn, YouTube, Facebook." }
];

document.addEventListener("DOMContentLoaded", () => {

  /* -------- Barra de progresso de rolagem -------- */
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.appendChild(progressBar);
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* -------- Botão voltar ao topo -------- */
  const backToTop = document.createElement("button");
  backToTop.className = "back-to-top";
  backToTop.setAttribute("aria-label", "Voltar ao topo");
  backToTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(backToTop);
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 480);
  }, { passive: true });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* -------- Botão flutuante do WhatsApp -------- */
  if (WHATSAPP_NUMBER) {
    const waLink = document.createElement("a");
    waLink.className = "whatsapp-float";
    waLink.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
    waLink.target = "_blank";
    waLink.rel = "noopener noreferrer";
    waLink.setAttribute("aria-label", "Fale pelo WhatsApp");
    waLink.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39c1.44.79 3.06 1.2 4.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.91 6.45 17.5 2 12.04 2zm5.9 14.02c-.25.7-1.25 1.29-2.03 1.46-.54.12-1.24.21-3.6-.77-3.02-1.25-4.97-4.32-5.12-4.52-.15-.2-1.22-1.62-1.22-3.1 0-1.47.77-2.19 1.05-2.49.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.68.51.25.6.86 2.07.93 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.48.13.66-.08.18-.2.76-.88.96-1.19.2-.3.4-.25.68-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.75-.17 1.44z"/></svg>';
    document.body.appendChild(waLink);
  }

  /* -------- Revelação escalonada de cartões e listas -------- */
  const staggerGroups = document.querySelectorAll(
    ".collection-grid, .store-grid, .timeline, .book-list"
  );
  staggerGroups.forEach(group => {
    const items = group.querySelectorAll(":scope > *");
    items.forEach((item, i) => {
      item.classList.add("stagger-item");
      item.style.transitionDelay = Math.min(i * 90, 450) + "ms";
    });
  });
  const volDetails = document.querySelectorAll(".vol-detail");
  volDetails.forEach(item => item.classList.add("stagger-item"));

  if ("IntersectionObserver" in window) {
    const staggerIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          staggerIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".stagger-item").forEach(el => staggerIo.observe(el));
  } else {
    document.querySelectorAll(".stagger-item").forEach(el => el.classList.add("in"));
  }

  /* -------- Menu mobile -------- */
  const navToggle = document.getElementById("navToggle");
  const mainLinks = document.getElementById("mainLinks");
  if (navToggle && mainLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
    });
    mainLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      mainLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", false);
    }));
  }

  /* -------- Submenus (Livro, Estudar) --------
     Abrem por clique ou Enter/Espaço; no computador também por
     passagem do mouse (CSS). Esc ou clicar fora fecham. */
  const navGroups = document.querySelectorAll(".nav-group");
  function setGroup(g, open) {
    g.classList.toggle("open", open);
    const b = g.querySelector(".nav-drop");
    if (b) b.setAttribute("aria-expanded", open ? "true" : "false");
  }
  navGroups.forEach(g => {
    const b = g.querySelector(".nav-drop");
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !g.classList.contains("open");
      navGroups.forEach(o => setGroup(o, false));
      setGroup(g, willOpen);
    });
    g.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { setGroup(g, false); b.focus(); }
      if (e.key === "Tab") {
        setTimeout(() => { if (!g.contains(document.activeElement)) setGroup(g, false); }, 0);
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-group")) navGroups.forEach(o => setGroup(o, false));
  });

  /* -------- Marca o link ativo do menu --------
     Além da página exata, aceita data-prefix (ex.: exercicios-*)
     e data-also (páginas filhas, como os tópicos). O botão do grupo
     também fica destacado quando um link dentro dele está ativo. */
  const current = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll("nav.main-links a").forEach(a => {
    const href = a.getAttribute("href").split("#")[0] || "index.html";
    const also = (a.dataset.also || "").split(" ").filter(Boolean);
    const prefix = a.dataset.prefix;
    if (href === current || also.includes(current) || (prefix && current.startsWith(prefix))) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });
  navGroups.forEach(g => {
    if (g.querySelector("a.active")) g.querySelector(".nav-drop").classList.add("active");
  });

  /* -------- Revelação suave ao rolar -------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  /* -------- Busca no site -------- */
  const searchInput = document.getElementById("siteSearch");
  const searchResults = document.getElementById("searchResults");

  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function runSearch(query) {
    const q = normalize(query.trim());
    if (!q) {
      searchResults.classList.remove("open");
      searchResults.innerHTML = "";
      return;
    }
    const matches = SITE_INDEX.filter(item =>
      normalize(item.title).includes(q) || normalize(item.snippet).includes(q)
    );
    if (matches.length === 0) {
      const safe = query.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
      searchResults.innerHTML = '<div class="sr-empty">Nenhum resultado para "' + safe + '".</div>';
    } else {
      searchResults.innerHTML = matches.map(item =>
        `<a href="${item.url}">
           <div class="sr-title">${item.title}</div>
           <div class="sr-snippet">${item.snippet}</div>
         </a>`
      ).join("");
    }
    searchResults.classList.add("open");
  }

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (e) => runSearch(e.target.value));
    searchInput.addEventListener("focus", (e) => { if (e.target.value) runSearch(e.target.value); });
    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove("open");
      }
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { searchResults.classList.remove("open"); searchInput.blur(); }
    });
  }

  /* -------- Formulário de newsletter --------
     Conectado ao MailerLite via script no <head> de cada
     página. Este trecho apenas dá feedback visual ao
     visitante após o envio. */
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const status = form.querySelector(".newsletter-status");
      const email = emailInput.value.trim();

      if (!email) return;

      status.textContent = "Obrigado! Em breve você receberá nossas novidades.";
      status.classList.remove("err");
      status.classList.add("ok", "show");
      emailInput.value = "";
    });
  });

});

/* Aviso de cookies (LGPD): o Google Analytics só mede após o aceite. */
(function(){
  if(typeof window.gtag!=="function") return;
  var KEY="wt-consent", saved=null;
  try{ saved=localStorage.getItem(KEY); }catch(e){}
  if(saved) return;
  var bar=document.createElement("div");
  bar.className="cookie-bar"; bar.setAttribute("role","dialog"); bar.setAttribute("aria-label","Aviso de cookies");
  bar.innerHTML='<p>Usamos cookies de estatística (Google Analytics) para entender quais conteúdos ajudam mais. Só medimos se você aceitar. <a href="politica-de-privacidade.html">Política de Privacidade</a></p><div><button type="button" class="btn btn-primary" data-c="granted">Aceitar</button><button type="button" class="btn btn-ghost" data-c="denied">Recusar</button></div>';
  bar.addEventListener("click",function(e){
    var v=e.target.getAttribute&&e.target.getAttribute("data-c"); if(!v) return;
    try{ localStorage.setItem(KEY,v); }catch(err){}
    if(v==="granted") window.gtag("consent","update",{analytics_storage:"granted"});
    bar.remove();
  });
  document.body.appendChild(bar);
})();
