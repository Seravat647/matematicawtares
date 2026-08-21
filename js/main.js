/* =======================================================
   W. T. Ares — Matemática | main.js
   Menu mobile, revelação de seções, busca no site e
   inscrição de newsletter.
   ======================================================= */

/* -------- Índice de busca do site --------
   Sempre que publicar um novo livro ou página, adicione uma
   entrada aqui — a busca já passa a encontrá-la. */
const SITE_INDEX = [
  { title: "Início", url: "index.html", snippet: "Página inicial — Curso de Cálculo I, II e III, de W. T. Ares." },
  { title: "Sobre o Autor", url: "autor.html", snippet: "Bacharel em Matemática, professor de cursos regulares e preparatórios." },
  { title: "O Livro — Curso de Cálculo I", url: "livro.html#calculo-1", snippet: "Limites, derivadas e os fundamentos do cálculo diferencial." },
  { title: "O Livro — Curso de Cálculo II", url: "livro.html#calculo-2", snippet: "Técnicas de integração, sequências, séries e equações diferenciais." },
  { title: "O Livro — Curso de Cálculo III", url: "livro.html#calculo-3", snippet: "Em preparação — cálculo em várias variáveis." },
  { title: "A Coleção Completa", url: "livro.html#colecao", snippet: "Os três volumes do Curso de Cálculo, lado a lado." },
  { title: "Como Adquirir", url: "adquirir.html", snippet: "Compre na Amazon (Kindle) ou na Loja UICLAP." },
  { title: "Contato", url: "contato.html", snippet: "contato@wtaresmatematica.com — Instagram, LinkedIn, YouTube." }
];

document.addEventListener("DOMContentLoaded", () => {

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

  /* -------- Marca o link ativo do menu -------- */
  const current = (location.pathname.split("/").pop() || "index.html");
  document.querySelectorAll("nav.main-links a").forEach(a => {
    const href = a.getAttribute("href").split("#")[0] || "index.html";
    if (href === current || (current === "" && href === "index.html")) {
      a.classList.add("active");
    }
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
      searchResults.innerHTML = '<div class="sr-empty">Nenhum resultado para "' + query + '".</div>';
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
     IMPORTANTE: este formulário ainda não está conectado a um
     serviço de e-mail de verdade. Para ativar o envio real,
     troque a função abaixo pela integração do seu provedor
     (ex.: MailerLite, Mailchimp, Brevo) — veja instruções no
     comentário no final do arquivo. Por enquanto, ele apenas
     confirma visualmente e registra o interesse do visitante. */
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const status = form.querySelector(".newsletter-status");
      const email = emailInput.value.trim();

      if (!email) return;

      /* TODO: substituir por chamada real ao provedor de e-mail. Exemplo (MailerLite embed):
         form.action = "https://assets.mailerlite.com/jsonp/SEU_ID/forms/SEU_FORM_ID/subscribe";
         e permitir o envio nativo do form (remover e.preventDefault() acima). */

      status.textContent = "Obrigado! Assim que o formulário estiver conectado a um serviço de e-mail, você começará a receber nossas novidades.";
      status.classList.remove("err");
      status.classList.add("ok", "show");
      emailInput.value = "";
    });
  });

});
