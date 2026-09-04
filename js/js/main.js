/* =======================================================
   W. T. Ares — Matemática | main.js
   Menu mobile, revelação de seções, busca no site e
   inscrição de newsletter.
   ======================================================= */

/* -------- Índice de busca do site --------
   Sempre que publicar um novo livro ou página, adicione uma
   entrada aqui — a busca já passa a encontrá-la. */
const SITE_INDEX = [
  { title: "Início", url: "index.html", snippet: "Página inicial — Curso de Cálculo I, II, III e Equações Diferenciais de W. T. Ares." },
{ title: "Sobre o Autor", url: "autor.html", snippet: "Bacharel em Matemática, professor de cursos regulares e preparatórios." },
{ title: "O Livro — Curso de Cálculo I", url: "livro.html#calculo-1", snippet: "Limites, derivadas e os fundamentos do cálculo diferencial." },
{ title: "O Livro — Curso de Cálculo II", url: "livro.html#calculo-2", snippet: "Técnicas de integração, sequências, séries e equações diferenciais." },
{ title: "O Livro — Curso de Cálculo III", url: "livro.html#calculo-3", snippet: "Cálculo em várias variáveis, derivadas parciais e integrais múltiplas." },
{ title: "A Coleção Completa", url: "livro.html#colecao", snippet: "Os três volumes do Curso de Cálculo, lado a lado." },
{ title: "Equações Diferenciais", url: "equacoes-diferenciais.html", snippet: "Didático para dominar os fundamentos das equações diferenciais, aplicando cálculo diferencial e integral." },
{ title: "Como Adquirir", url: "adquirir.html", snippet: "Compre na Amazon (Kindle) ou na Loja UICLAP." },
{ title: "História da Matemática", url: "historia-da-matematica.html", snippet: "Os grandes matemáticos da história e suas contribuições para o desenvolvimento da matemática." },
{ title: "Contato", url: "contato.html", snippet: "tavareswagner21@gmail.com — Instagram, LinkedIn, YouTube, Facebook." }
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
     Conectado ao MailerLite (grupo de inscritos do site). */
  const MAILERLITE_ENDPOINT = "https://assets.mailerlite.com/jsonp/2556502/forms/194912156395767351/subscribe";

  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const status = form.querySelector(".newsletter-status");
      const submitBtn = form.querySelector('button[type="submit"]');
      const email = emailInput.value.trim();

      if (!email) return;

      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";

      const body = new URLSearchParams();
      body.append("fields[email]", email);
      body.append("ml-submit", "1");
      body.append("anticsrf", "true");

      fetch(MAILERLITE_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      })
        .then(() => {
          status.textContent = "Inscrição confirmada! Obrigado por se inscrever — em breve você recebe novidades por e-mail.";
          status.classList.remove("err");
          status.classList.add("ok", "show");
          emailInput.value = "";
        })
        .catch(() => {
          status.textContent = "Não foi possível concluir a inscrição agora. Tente novamente em instantes.";
          status.classList.remove("ok");
          status.classList.add("err", "show");
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "Inscrever-se";
        });
    });
  });

});
