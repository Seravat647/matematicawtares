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
  { title: "Início", url: "index.html", snippet: "Página inicial — Curso de Cálculo I, II e III, de W. T. Ares." },
  { title: "Sobre o Autor", url: "autor.html", snippet: "Bacharel em Matemática, professor de cursos regulares e preparatórios." },
  { title: "O Livro — Curso de Cálculo I", url: "livro.html#calculo-1", snippet: "Limites, derivadas e os fundamentos do cálculo diferencial." },
  { title: "O Livro — Curso de Cálculo II", url: "livro.html#calculo-2", snippet: "Técnicas de integração, sequências, séries e equações diferenciais." },
  { title: "O Livro — Curso de Cálculo III", url: "livro.html#calculo-3", snippet: "Cálculo em várias variáveis, derivadas parciais e integrais múltiplas." },
  { title: "A Coleção Completa", url: "livro.html#colecao", snippet: "Os três volumes do Curso de Cálculo, lado a lado." },
  { title: "Como Adquirir", url: "adquirir.html", snippet: "Compre na Amazon (Kindle) ou na Loja UICLAP." },
  { title: "História da Matemática", url: "historia-da-matematica.html", snippet: "Os grandes matemáticos da história e suas contribuições para o desenvolvimento da matemática." },
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
     Envia o e-mail de fato via Web3Forms (gratuito), que
     repassa cada inscrição para tavareswagner21@gmail.com.
     Console.log de depuração incluído propositalmente — abra
     o DevTools (F12) > Console para acompanhar o envio. */
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const status = form.querySelector(".newsletter-status");
      const submitBtn = form.querySelector('button[type="submit"]');
      const email = emailInput.value.trim();

      if (!email) return;

      console.log("[newsletter] enviando inscrição para Web3Forms:", email);

      submitBtn.disabled = true;
      status.classList.remove("ok", "err", "show");

      const formData = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
      })
        .then(res => res.json())
        .then(data => {
          console.log("[newsletter] resposta do Web3Forms:", data);
          if (data.success) {
            status.textContent = "Obrigado! Em breve você receberá nossas novidades.";
            status.classList.add("ok", "show");
            emailInput.value = "";
          } else {
            throw new Error(data.message || "Erro no envio");
          }
        })
        .catch((err) => {
          console.error("[newsletter] erro no envio:", err);
          status.textContent = "Ops, algo deu errado. Tente novamente em instantes.";
          status.classList.add("err", "show");
        })
        .finally(() => {
          submitBtn.disabled = false;
        });
    });
  });

});
