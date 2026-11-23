const DADOS = {
  nome: "Ana Karollyne",
  papel: ["desenvolvedora", "estudante & builder", "curiosa por tecnologia"],
  status: "disponível para projetos",

  bio: " Eu me chamo Ana Karollyne, atualmente estou cursando Técnico em Desencolvimento de Sistemas, gosto de trabalhar em Front-End.",

  sobre:{
      paragrafo1: "Estando no 9°Ano do Ensino Fundamental o colégio ofereceu o novo Ensino Médio integrado com curso técnico de Desenvolvimento de Sistemas, assim, iniciei o curso no 1°Ano. Escolhi este curso pela velocidade com que a área evolui. O mercado de tecnologia exige aprendizado constante, e essa dinâmica de nunca ficar parado é exatamente o que busco para minha carreira. Gosto de desenvolver sites comerciais.",
      paragrafo2: "Este portfólio foi desenvolvido com o objetivo de apresentar os projetos realizados ao longo da minha trajetória e evolução no curso de Desenvolvimento de Sistemas. Atualmente, busco aprimorar meus conhecimentos para ingressar e atuar com excelência nessa área.",
      timeline: [
          {data: "2024", texto: "Início do curso de <strong>Desenvolvimento de Sistemas </strong>."},
          {data: "2024", texto: "Primeiro projeto trabalhado: <strong>Barbearia</strong>."},
          {data: "2025", texto: "Desenvolvimento de projeto: <strong>Alura-Plus</strong/>"},
          {data: "2025", texto: "Desenvolvimento de projeto: <strong>Sonho Suave</strong/>"},
          {data: "2025", texto: "Desenvolvimento de projeto: <strong>Delícia Gourmet - Restaurante Italiano</strong/>"},
          {data: "2026", texto: "Desenvolvimento de projeto: <strong>Mecânica-WH</strong/>"},
          {data: "2026", texto: "Aprofundamento da matéria: <strong>Back-End</strong/>"},
          {data: "2026", texto: "Aprofundamento da matéria: <strong>Front-End</strong/>"},
          {data: "2026", texto: "Desenvolvimento de projeto: <strong>Portfólio Pessoal</strong/>"},
      ]
  },

  curriculoUrl: "curriculo.png",

  email: "anakarollyne175@gmail.com",

  redes: [
    {nome:"GitHub", url:"https://github.com/anakarollyne-png"},
    {nome:"Linkdin", url:"https://www.linkedin.com/in/ana-karollyne-siqueira-machado-4b5334445/?isSelfProfile=true"},
    {nome:"Instagram", url:"https://www.instagram.com/ana_karollyne866?exln=MTZ0OTQweG1sdWxiYw=="},
  ],

  projetos: [
      {
          versao: "v1.0",
          titulo: "Alura Plus",
          data: "Mai 2025",
          descricao: "descrição curta do projeto: o problema que resolve e como  voce construiu.",
          tags: ["HTML", "CSS", ],
          imagem: "alura.png",
          linkDemo: "https://alura-plus-chi-hazel.vercel.app/",
          linkRepo: "https://github.com/rihmilena/alura-plus",
      },
      {
          versao: "v1.0",
          titulo: "Sonho Suave",
          data: "Mar 2025",
          descricao: "descrição curta do projeto: o problema que resolve e como  voce construiu.",
          tags: ["HTML", "CSS"],
          imagem: "sonhosuave.png",
          linkDemo: "https://sonho-suave.vercel.app/",
          linkRepo: "https://github.com/rihmilena/sonho_suave",
      },
      {
          versao: "v1.0",
          titulo: "Mecânica WH",
          data: "Agosto 2026",
          descricao: "descrição curta do projeto: o problema que resolve e como  voce construiu.",
          tags: ["HTML", "CSS", ],
          imagem: "mecânicawh.png",
          linkDemo: "https://mec-nica-w-h.vercel.app/",
          linkRepo: "https://github.com/rihmilena/Mec-nica-W-H",
      },
  ],

  skills: [
      { categoria: "Front-end", itens: ["Html", "CSS", "JavaScript"]},
      { categoria: "Back-end", itens: ["Java", "PHP", "C#"]},
      { categoria: "Dados", itens: ["SQL SERVER", "MySQL", "SupaBase"],},
      { categoria: "Ferramentas", itens: ["Git", "GitHub", "VS Code", "Vercel", "Canva"],},
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  renderConteudo();
  iniciarTema();
  iniciarMenuMobile();
  iniciarTypingEfeito();
  iniciarFiltroDeProjetos();
  iniciarCopiarEmail();
  iniciarBotaoTopo();
  iniciarLogAnimado();
});

function renderConteudo(){
  setText("nav-nome", DADOS.nome);
  setText("destaque-nome", DADOS.nome);
  setText("texto-status", DADOS.status);
  setText("destaque-bio", DADOS.bio);
  setText("rodape-nome", DADOS.nome);
  setText("rodape-ano", new Date().getFullYear());
  document.title = `${DADOS.nome} - Portfólio`;

  setText("sobre-paragrafo1", DADOS.sobre.paragrafo1);
  setText("sobre-paragrafo2", DADOS.sobre.paragrafo2);

  const cv = document.getElementById("contato-curriculo");
  if (cv) cv.href = DADOS.curriculoUrl;

  const tl = document.getElementById("sobre-linha-tempo");
  tl.innerHTML = DADOS.sobre.timeline.map(item => `
      <li>
          <span class="linha-data">${item.data}</span>
          <span class="linha-texto">${item.texto}</span>
      </li>
      `).join("");

      const socialsHtml = DADOS.redes.map(r => `<li> <a href="${r.url}" target="_blank" rel="noopener">${r.nome}</a> </li>`).join("");
      document.getElementById("destaque-redes").innerHTML = socialsHtml;
      document.getElementById("contato-redes").innerHTML = socialsHtml;

      const timeline = document.getElementById("projetos-linha-tempo");
      timeline.innerHTML = DADOS.projetos.map((p, i) =>`
          <article class="projeto" data-tags="${p.tags.join(",").toLowerCase()}">
              <div class="projeto__versao">${p.versao}</div>
              <div class="projeto__info">
                  <h3 class="projeto__titulo">${p.titulo}</h3>
                  <p class="projeto__meta">${p.data}</p>
                  <p class="projeto__descricao">${p.descricao}</p>
                  <div class="projeto__tags">
                      ${p.tags.map(t => `<span class="etiqueta">${t}</span>`).join("")}
                  </div>
                  <div class="projeto__links">
                      ${p.linkDemo ? `<a href="${p.linkDemo}" target="_blank" rel="noopener"> Ver demo -> </a>` : ""}
                      ${p.linkRepo ? `<a href="${p.linkRepo}" target="_blank" rel="noopener">Código -> </a>` : ""}
                  </div>
              </div>
              <div class="projeto__miniatura">
                  ${p.imagem ? `<img src="${p.imagem}" alt="Captura de tela de ${p.titulo}">` : `<span>screenshot do projeto</span>`}
              </div>
          </article>
      `).join("");

      const tags  = new Set();
      DADOS.projetos.forEach(p => p.tags.forEach(t => tags.add(t)));
      const filters = document.getElementById("projetos-filtros");
      filters.innerHTML = `<button class="filtro-botao esta-ativo" data-filter="todos">todos</button>` + 
          [...tags].map(t => `<button class="filtro-botao" data-filter="${t.toLowerCase()}">${t} </button>`).join("");

      const skillsWrap = document.getElementById("habilidades-grupos");
      skillsWrap.innerHTML = DADOS.skills.map(g =>`
          <div class="habilidade-grupo">
              <h3>${g.categoria}</h3>
              <div class="habilidade-grupo__tags">
                  ${g.itens.map(i => `<span class="habilidade-etiqueta"> ${i} </span>`).join("")}
              </div>
          </div>
      `).join("");
}

function setText(id, value){
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function iniciarTema(){
  const btn = document.getElementById("alternar-tema");
  const salvo = localStorage.getItem("portfolio-theme");
  if (salvo) document.documentElement.setAttribute("data-theme", salvo);

  btn.addEventListener("click", () => {
      const atual = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      const novo = atual === "light" ? "dark" : "light";
      if (novo === "dark"){
          document.documentElement.removeAttribute("data-theme");
      } else {
          document.documentElement.setAttribute("data-theme", "light");
      }
      localStorage.setItem("portfolio-theme", novo);
  });
}

function iniciarMenuMobile(){
  const burger = document.getElementById("menu-hamburguer");
  const links = document.getElementById("menu-links");

  burger.addEventListener("click", () => {
      const aberto = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!aberto));
      links.classList.toggle("esta-aberto");
  });

  links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
          burger.setAttribute("aria-expanded", "false");
          links.classList.remove("esta-aberto");
      });
  });
}
function iniciarTypingEfeito () {
  const el =document.getElementById("texto-cargo");
  const frases = DADOS.papel;
  let fraseIdx = 0, charIdx = 0, apagando = false;

  function tick(){
      const frase = frases[fraseIdx];

      if (!apagando){
          el.textContent = frase.slice(0, charIdx + 1);
          charIdx++;
          if (charIdx === frase.length){
              apagando = true;
              setTimeout(tick, 1500);
              return;
          }
      } else{
          el.textContent = frase.slice(0, charIdx - 1);
          charIdx--;
          if (charIdx === 0){
              apagando = false;
              fraseIdx = (fraseIdx + 1) % frases.length;
          }
      }
      setTimeout(tick, apagando ? 35 : 65);
  }
  tick();
}
function iniciarFiltroDeProjetos(){
  const chips = document.querySelectorAll(".filtro-botao");
  const projetos = document.querySelectorAll(".projeto");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("esta-ativo"));
      chip.classList.add("esta-ativo");
      const filtro = chip.dataset.filter;

      projetos.forEach(p => {
        const tags = p.dataset.tags.split(",");
        const mostra = filtro === "todos" || tags.includes(filtro);
        p.classList.toggle("esta-oculto", !mostra);
      });
    });
  });
}

function iniciarCopiarEmail(){
  const btn = document.getElementById("copiar-email");
  const label = document.getElementById("copiar-email-texto");

  btn.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(DADOS.email);
      label.textContent = "E-mail copiado!";
    }catch(e){
      label.textContent = DADOS.email;
    }
    setTimeout(() => label.textContent = "Copiar e-mail", 2200);
  });
}

function iniciarBotaoTopo(){
  const btn = document.getElementById("voltar-topo");
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function iniciarLogAnimado(){
  const linhas = DADOS.projetos.slice(-3).map(p => `> deploy ${p.titulo.toLowerCase().replace(/\s+/g, "-")} ${p.versao} ok`);
  const ids = ["linha-log-1", "linha-log-2", "linha-log-3"];

  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el || !linhas[i]) return;
    setTimeout(() => { el.textContent = linhas[i]; }, 900 + i * 450);
  });
}