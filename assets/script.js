const site = window.SITE_DATA;

function ext(href, label, className = "text-link") {
  return `<a class="${className}" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderHeader(activeKey) {
  const items = site.site.nav
    .map((item) => {
      const active = item.key === activeKey ? " is-active" : "";
      return `<a class="nav-link${active}" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="header-topline"></div>
      <div class="header-shell">
        <a class="brandmark" href="index.html">
          <span class="brandmark-kicker">Литературный проект</span>
          <span class="brandmark-title">Война и мир</span>
          <span class="brandmark-subtitle">Лев Толстой</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="main-nav" id="main-nav">${items}</nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-ornament"></div>
      <div class="footer-shell">
        <div class="school-badge">
          <img src="${site.site.schoolLogo}" alt="Логотип IQanat">
          <div>
            <p class="footer-label">Школьный знак</p>
            <h3>${site.site.schoolName}</h3>
            <p>Литературный сайт, посвященный роману «Война и мир».</p>
          </div>
        </div>
        <div class="creator-badge">
          <p class="footer-label">Создатель</p>
          <strong>${site.site.creator}</strong>
          <p>Оформление выдержано в духе старинного альбома и большой семейной хроники.</p>
        </div>
      </div>
    </footer>
  `;
}

function renderHero({ kicker, title, lead, quote, quoteAuthor, image, alt, wide = false }) {
  return `
    <section class="hero-panel${wide ? " hero-panel--wide" : ""} reveal">
      <div class="hero-copy">
        <p class="section-kicker">${kicker}</p>
        <h1>${title}</h1>
        <p class="hero-lead">${lead}</p>
        ${quote ? `<blockquote class="hero-quote">${quote}<span>${quoteAuthor || ""}</span></blockquote>` : ""}
      </div>
      ${
        image
          ? `<div class="hero-figure">
               <img src="${image}" alt="${alt || title}" loading="eager">
             </div>`
          : ""
      }
    </section>
  `;
}

function renderFactNav(activeHref) {
  const links = [
    { href: "novel-facts.html", label: "О романе" },
    { href: "tolstoy.html", label: "О Толстом" },
    { href: "creation.html", label: "История создания" }
  ];

  return `
    <aside class="fact-nav reveal">
      <p class="fact-nav-title">Связанные страницы</p>
      ${links
        .map((item) => {
          const active = item.href === activeHref ? " is-active" : "";
          return `<a class="fact-nav-link${active}" href="${item.href}">${item.label}</a>`;
        })
        .join("")}
    </aside>
  `;
}

function renderHome() {
  return `
    <section class="hero-panel hero-panel--wide hero-panel--home reveal">
      <div class="hero-copy">
        <p class="section-kicker">Роман-эпопея Льва Толстого</p>
        <h1>Сайт по «Войне и миру»</h1>
        <p class="hero-lead">Большой многостраничный проект о героях, истории создания, рецензиях, экранизациях, ключевых главах и локальном онлайн-чтении романа.</p>
        <blockquote class="hero-quote">${site.home.quote}<span>Школьный литературный проект</span></blockquote>
        <div class="hero-actions">
          <a class="hero-button" href="summary.html">Открыть краткий сюжет</a>
          <a class="hero-button hero-button--ghost" href="read.html">Читать онлайн</a>
        </div>
      </div>
      <div class="hero-collage">
        <figure class="collage-main">
          <img src="assets/images/gallery/tolstoy-portrait.jpg" alt="Лев Толстой за работой" loading="eager">
        </figure>
        <figure class="collage-small collage-small--one">
          <img src="assets/images/characters/natasha-woodcut.jpg" alt="Наташа Ростова">
        </figure>
        <figure class="collage-small collage-small--two">
          <img src="assets/images/characters/pierre-borodino.jpg" alt="Пьер Безухов">
        </figure>
      </div>
    </section>

    <section class="stats-ribbon reveal">
      ${site.home.stats
        .map(
          (item) => `
            <div class="stat-block">
              <strong>${item.value}</strong>
              <span>${item.label}</span>
            </div>
          `
        )
        .join("")}
    </section>

    <section class="grid-section reveal">
      ${site.home.highlights
        .map(
          (item) => `
            <article class="paper-card">
              <h2>${item.title}</h2>
              <p>${item.text}</p>
              <a class="text-link" href="${item.href}">Перейти к разделу</a>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="split-section reveal">
      <div class="stacked-copy">
        ${site.home.sections
          .map(
            (item) => `
              <article class="chapter-card">
                <p class="section-kicker">${item.eyebrow}</p>
                <h2>${item.title}</h2>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
      <aside class="school-plaque">
        <img src="${site.site.schoolLogo}" alt="IQanat">
        <div>
          <p class="section-kicker">Школьная подпись проекта</p>
          <h3>${site.site.schoolName}</h3>
          <p>Cоздатель проекта: <strong>${site.site.creator}</strong>.</p>
        </div>
      </aside>
    </section>

    <section class="timeline-section reveal">
      <div class="section-heading">
        <p class="section-kicker">Время романа и время работы над ним</p>
        <h2>Короткая шкала</h2>
      </div>
      <div class="timeline-list">
        ${site.home.timeline
          .map(
            (item) => `
              <article class="timeline-item">
                <span class="timeline-year">${item.year}</span>
                <div>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="quote-ribbon reveal">
      ${site.home.quoteCards
        .map(
          (item) => `
            <article class="quote-card">
              <p>${item}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderCharacters() {
  return `
    ${renderHero({
      kicker: "Герои романа",
      title: "Лица, семьи и нравственные центры «Войны и мира»",
      lead: "Толстой строит роман не вокруг одной фигуры, а вокруг нескольких домов, характеров и духовных траекторий. Эта страница объединяет главных персонажей, семейные линии и быстрый ориентир по важным второстепенным героям.",
      image: "assets/images/gallery/family-tree.jpg",
      alt: "Семейное древо героев романа",
      wide: true
    })}

    <section class="grid-section reveal">
      ${site.characters.houses
        .map(
          (item) => `
            <article class="paper-card house-card">
              <h2>${item.title}</h2>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="feature-grid reveal">
      ${site.characters.featured
        .map(
          (item) => `
            <article class="character-card">
              ${
                item.image
                  ? `<div class="character-image"><img src="${item.image}" alt="${item.alt || item.name}"></div>`
                  : `<div class="character-monogram">${item.monogram}</div>`
              }
              <div class="character-copy">
                <h2>${item.name}</h2>
                <p class="character-role">${item.role}</p>
                <p class="character-accent">${item.accent}</p>
                <p>${item.text}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="split-section reveal">
      <article class="image-panel">
        <img src="assets/images/gallery/family-tree.jpg" alt="Схема родственных связей в Войне и мире">
        <p class="image-caption">Упрощенное семейное древо помогает не потеряться в линиях Безуховых, Ростовых, Болконских и Курагиных.</p>
      </article>
      <article class="paper-card">
        <p class="section-kicker">Важные второстепенные фигуры</p>
        <h2>Кого еще важно помнить</h2>
        <ul class="ornate-list">
          ${site.characters.supporting.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    </section>
  `;
}

function renderSummary() {
  return `
    ${renderHero({
      kicker: "Краткое содержание",
      title: "Общий сюжет романа без потери масштаба",
      lead: "Эта страница дает цельный пересказ «Войны и мира» крупными смысловыми блоками: от салонов и первых военных кампаний до Бородина, пожара Москвы и семейного эпилога.",
      image: "assets/images/gallery/natasha-and-andrei.jpg",
      alt: "Наташа и Андрей",
      quote: "Роман движется от внешней истории к внутренней: чем грандиознее события, тем внимательнее Толстой смотрит на душу человека.",
      quoteAuthor: "Ключ к чтению «Войны и мира»"
    })}

    <section class="stacked-copy reveal">
      ${site.summary.sections
        .map(
          (item) => `
            <article class="chapter-card">
              <h2>${item.title}</h2>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="grid-section reveal">
      ${site.summary.themes
        .map(
          (item) => `
            <article class="paper-card">
              <h2>${item.title}</h2>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderChapters() {
  return `
    ${renderHero({
      kicker: "Главы и части",
      title: "Конспект по томам и ключевым главам",
      lead: site.chapters.note,
      image: "assets/images/gallery/fire-of-moscow.jpg",
      alt: "Пожар Москвы"
    })}

    <section class="accordion-section reveal">
      ${site.chapters.parts
        .map(
          (part, index) => `
            <details class="chapter-detail"${index === 0 ? " open" : ""}>
              <summary>
                <span>${part.label}</span>
                <strong>${part.subtitle}</strong>
              </summary>
              <div class="chapter-detail-body">
                <p>${part.summary}</p>
                <ul class="ornate-list">
                  ${part.points.map((point) => `<li>${point}</li>`).join("")}
                </ul>
              </div>
            </details>
          `
        )
        .join("")}
    </section>
  `;
}

function renderRead() {
  return `
    ${renderHero({
      kicker: "Читать онлайн",
      title: "Локальный PDF встроен прямо в сайт",
      lead: "В проект был добавлен существовавший в директории файл первой книги романа. На этой странице он встроен для чтения в браузере, а также доступен в отдельной вкладке.",
      image: "assets/images/gallery/tolstoy-portrait.jpg",
      alt: "Лев Толстой"
    })}

    <section class="split-section reveal">
      <article class="paper-card">
        <h2>Что находится внутри</h2>
        <p>Файл <code>war-and-peace-book-1.pdf</code> соответствует первой книге и включает тома I–II. Если позже понадобится полный комплект томов III–IV, его можно добавить в ту же структуру сайта без переработки дизайна.</p>
        <div class="button-row">
          <a class="hero-button" href="assets/pdf/war-and-peace-book-1.pdf" target="_blank" rel="noreferrer">Открыть PDF</a>
          <a class="hero-button hero-button--ghost" href="assets/pdf/war-and-peace-book-1.pdf" download>Скачать файл</a>
        </div>
      </article>
      <article class="paper-card">
        <h2>Быстрый ориентир</h2>
        <ul class="ornate-list">
          <li>Том I: знакомство с героями, светские салоны, первая военная линия.</li>
          <li>Том II: мирная жизнь, масонство Пьера, любовь Андрея и Наташи, линия Анатоля.</li>
          <li>Для полного сюжета параллельно можно использовать страницы «Сюжет» и «Главы».</li>
        </ul>
      </article>
    </section>

    <section class="reader-frame reveal">
      <iframe title="Война и мир — чтение онлайн" src="assets/pdf/war-and-peace-book-1.pdf#page=1"></iframe>
    </section>
  `;
}

function renderFactPage(data, activeHref, imageSrc, imageAlt) {
  return `
    ${renderHero({
      kicker: data.hero.kicker,
      title: data.hero.title,
      lead: data.hero.lead,
      image: imageSrc,
      alt: imageAlt
    })}
    <section class="fact-layout">
      ${renderFactNav(activeHref)}
      <div class="fact-grid reveal">
        ${data.facts
          .map((item) => {
            const prefix = item.year ? `<span class="fact-year">${item.year}</span>` : "";
            return `
              <article class="paper-card">
                ${prefix}
                <h2>${item.title}</h2>
                <p>${item.text}</p>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderReviews() {
  return `
    ${renderHero({
      kicker: site.reviews.hero.kicker,
      title: site.reviews.hero.title,
      lead: site.reviews.hero.lead,
      image: "assets/images/gallery/tolstoy-portrait.jpg",
      alt: "Лев Толстой"
    })}

    <section class="section-heading reveal">
      <p class="section-kicker">Исторические отзывы</p>
      <h2>Критики XIX века</h2>
    </section>
    <section class="grid-section reveal">
      ${site.reviews.historical
        .map(
          (item) => `
            <article class="paper-card review-card">
              <div class="review-meta">
                <span>${item.critic}</span>
                <span>${item.year}</span>
              </div>
              <h2>${item.tone}</h2>
              <p>${item.text}</p>
              <blockquote class="mini-quote">${item.quote}</blockquote>
              ${ext(item.link, "Смотреть источник")}
            </article>
          `
        )
        .join("")}
    </section>

    <section class="section-heading reveal">
      <p class="section-kicker">Позднейшее восприятие</p>
      <h2>Почему спор продолжается</h2>
    </section>
    <section class="grid-section reveal">
      ${site.reviews.modern
        .map(
          (item) => `
            <article class="paper-card">
              <h2>${item.title}</h2>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderAdaptations() {
  return `
    ${renderHero({
      kicker: site.adaptations.hero.kicker,
      title: site.adaptations.hero.title,
      lead: site.adaptations.hero.lead,
      image: "assets/images/characters/pierre-and-natasha-1956.jpg",
      alt: "Экранизации Войны и мира",
      wide: true
    })}

    <section class="adaptation-grid reveal">
      ${site.adaptations.items
        .map(
          (item) => `
            <article class="adaptation-card">
              <div class="adaptation-image">
                <img src="${item.image}" alt="${item.alt}">
              </div>
              <div class="adaptation-copy">
                <div class="review-meta">
                  <span>${item.title}</span>
                  <span>${item.year}</span>
                </div>
                <h2>${item.format}</h2>
                <p>${item.description}</p>
                <p class="character-accent">${item.special}</p>
                <div class="button-row">
                  ${ext(item.trailer, item.trailerLabel, "hero-button")}
                  ${ext(item.extra, item.extraLabel, "hero-button hero-button--ghost")}
                </div>
              </div>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="paper-card reveal">
      <p class="section-kicker">Как выбирать версию для просмотра</p>
      <h2>Короткий ориентир</h2>
      <ul class="ornate-list">
        ${site.adaptations.compareTips.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderGallery() {
  return `
    ${renderHero({
      kicker: site.gallery.hero.kicker,
      title: site.gallery.hero.title,
      lead: site.gallery.hero.lead,
      image: "assets/images/gallery/rostovs-trip.jpg",
      alt: "Галерея по Войне и миру"
    })}

    <section class="gallery-grid reveal">
      ${site.gallery.images
        .map(
          (item) => `
            <figure class="gallery-card">
              <img src="${item.src}" alt="${item.alt}">
              <figcaption>${item.caption}</figcaption>
            </figure>
          `
        )
        .join("")}
    </section>

    <section class="grid-section reveal">
      ${site.gallery.legacy
        .map(
          (item) => `
            <article class="paper-card">
              <h2>${item.title}</h2>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </section>

    <section class="paper-card reveal">
      <p class="section-kicker">Идеи для сообщества и фан-арта</p>
      <h2>Что еще можно сделать на основе романа</h2>
      <ul class="ornate-list">
        ${site.gallery.prompts.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderSources() {
  const renderSourceGroup = (title, items) => `
    <article class="paper-card source-group">
      <h2>${title}</h2>
      <ul class="source-list">
        ${items.map((item) => `<li>${ext(item.href, item.label)}</li>`).join("")}
      </ul>
    </article>
  `;

  return `
    ${renderHero({
      kicker: "Материалы проекта",
      title: "Источники текста, изображений, видео и локальных файлов",
      lead: "Все основные внешние материалы, использованные при подготовке сайта, собраны здесь отдельными списками. Иллюстрации взяты из открытых или лицензируемых источников, а PDF хранится локально в проекте.",
      image: "assets/images/gallery/family-tree.jpg",
      alt: "Источники и материалы",
      wide: true
    })}

    <section class="grid-section reveal">
      ${renderSourceGroup("Текстовые источники", site.sources.text)}
      ${renderSourceGroup("Источники иллюстраций", site.sources.images)}
      ${renderSourceGroup("Видео и трейлеры", site.sources.video)}
      ${renderSourceGroup("Локальные материалы", site.sources.local)}
    </section>
  `;
}

function renderPage(pageKey) {
  switch (pageKey) {
    case "home":
      return renderHome();
    case "characters":
      return renderCharacters();
    case "summary":
      return renderSummary();
    case "chapters":
      return renderChapters();
    case "read":
      return renderRead();
    case "novel-facts":
      return renderFactPage(site.novelFacts, "novel-facts.html", "assets/images/gallery/fire-of-moscow.jpg", "Пожар Москвы");
    case "tolstoy":
      return renderFactPage(site.tolstoy, "tolstoy.html", "assets/images/gallery/tolstoy-portrait.jpg", "Лев Толстой");
    case "creation":
      return renderFactPage(site.creation, "creation.html", "assets/images/characters/pierre-borodino.jpg", "Пьер Безухов");
    case "reviews":
      return renderReviews();
    case "adaptations":
      return renderAdaptations();
    case "gallery":
      return renderGallery();
    case "sources":
      return renderSources();
    default:
      return renderHome();
  }
}

function initUi() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

document.addEventListener("DOMContentLoaded", () => {
  const pageKey = document.body.dataset.page || "home";
  const root = document.getElementById("page-root");

  root.innerHTML = `
    ${renderHeader(pageKey)}
    <main class="site-main">${renderPage(pageKey)}</main>
    ${renderFooter()}
  `;

  initUi();
});
