/* ============================================================================
   BBF · Asistente (bot en la página)
   ----------------------------------------------------------------------------
   Responde dudas frecuentes al instante (envíos, pagos, cómo comprar, precios),
   ayuda a encontrar productos usando window.BBF_CATALOG y cierra pasando a
   WhatsApp con el mensaje pre-armado (window.BBF.waLink).
   Uso:  BBFBot.init({ waNumber:"57..." });
   ============================================================================ */
(function () {
  "use strict";
  const CFG = { waNumber: "573189945406" };

  const fmt = (n) => (window.BBF && BBF.fmt ? BBF.fmt(n) : "$ " + n);
  const wa = (t) =>
    window.BBF && BBF.waLink
      ? BBF.waLink(t)
      : "https://wa.me/" + CFG.waNumber + "?text=" + encodeURIComponent(t);

  let logEl, quickEl, panel, fab, opened = false;

  // ---- utilidades de catálogo ----
  const catalog = () => window.BBF_CATALOG || [];
  const cats = () => window.BBF_CATEGORIES || [];
  const norm = (s) =>
    (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  function catCount(id) {
    return catalog().filter((p) => p.cat === id).length;
  }
  function catMin(id) {
    const ps = catalog().filter((p) => p.cat === id && p.price > 0);
    return ps.length ? Math.min(...ps.map((p) => p.price)) : 0;
  }

  // ---- UI helpers ----
  function bubble(text, who) {
    const d = document.createElement("div");
    d.className = "bbf-bot__msg bbf-bot__msg--" + (who || "bot");
    d.innerHTML = text;
    logEl.appendChild(d);
    logEl.scrollTop = logEl.scrollHeight;
    return d;
  }
  function typing(cb) {
    const t = document.createElement("div");
    t.className = "bbf-bot__msg bbf-bot__msg--bot bbf-bot__typing";
    t.innerHTML = "<span></span><span></span><span></span>";
    logEl.appendChild(t);
    logEl.scrollTop = logEl.scrollHeight;
    setTimeout(() => { t.remove(); cb(); }, 420);
  }
  function botSay(html) { typing(() => bubble(html, "bot")); }

  function setQuick(options) {
    quickEl.innerHTML = "";
    options.forEach((o) => {
      const b = document.createElement("button");
      b.className = "bbf-bot__chip" + (o.wa ? " is-wa" : "");
      b.innerHTML = o.label;
      b.addEventListener("click", () => {
        if (o.userEcho !== false) bubble(o.label, "user");
        if (o.wa) { window.open(wa(o.wa), "_blank"); return; }
        if (o.run) o.run();
      });
      quickEl.appendChild(b);
    });
  }

  // ---- flujos ----
  function home() {
    setQuick([
      { label: "🛍️ Ver productos", run: showCats },
      { label: "🏷️ Precios", run: prices },
      { label: "🚚 Envíos", run: shipping },
      { label: "💳 Cómo comprar", run: howto },
      { label: "🧑‍✈️ Hablar con un asesor", wa: "¡Hola BBF! ✈️ Quiero hablar con un asesor." },
    ]);
  }

  function greet() {
    botSay(
      "¡Hola! ✈️ Soy el asistente de <b>Buy Before Flight</b>. " +
      "Te ayudo a elegir tu pieza, resolver dudas y cerrar tu compra por WhatsApp. ¿Qué necesitas?"
    );
    setTimeout(home, 460);
  }

  function showCats() {
    botSay("Estas son nuestras categorías. Toca una y te cuento:");
    const opts = cats().map((c) => ({
      label: c.label,
      userEcho: true,
      run: () => catInfo(c),
    }));
    opts.push({ label: "← Volver", run: home, userEcho: false });
    setTimeout(() => setQuick(opts), 460);
  }

  function catInfo(c) {
    const n = catCount(c.id), min = catMin(c.id);
    botSay(
      "<b>" + c.label + "</b> — " + c.tagline + ".<br>" +
      "Tenemos <b>" + n + " piezas</b>" +
      (min ? " desde <b>" + fmt(min) + "</b>" : "") + "."
    );
    setTimeout(() => setQuick([
      { label: "👀 Ver " + c.label + " en el catálogo", userEcho: false, run: () => gotoCat(c.id) },
      { label: "🛒 Pedir por WhatsApp", wa: "¡Hola BBF! ✈️ Me interesan sus piezas de " + c.label + ". ¿Me asesoran?" },
      { label: "← Otras categorías", userEcho: false, run: showCats },
    ]), 460);
  }

  function gotoCat(id) {
    close();
    // en el archivo único: si estamos en la vista Historia, volver al catálogo
    if (location.hash === "#historia") location.hash = "#catalogo";
    const chip = document.querySelector('#bbf-catnav .bbf-chip[data-cat="' + id + '"]');
    if (chip) chip.click();
    const sec = document.getElementById("cat-" + id) || document.getElementById("catalogo");
    if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function prices() {
    botSay(
      "Nuestros rangos (COP):<br>" +
      "• Pines desde <b>$ 10.000</b><br>" +
      "• Bag tags <b>$ 15.000–$ 20.000</b><br>" +
      "• Llaveros <b>$ 15.000–$ 20.000</b><br>" +
      "• Joyería <b>$ 18.000–$ 35.000</b><br>" +
      "• Modelos a escala <b>$ 65.000–$ 95.000</b><br><br>" +
      "¿Buscas algo puntual? Escríbeme el nombre (ej. <i>“pin A320”</i>) y te digo precio y disponibilidad."
    );
    setTimeout(() => setQuick([
      { label: "🛍️ Ver productos", run: showCats },
      { label: "← Menú", run: home, userEcho: false },
    ]), 460);
  }

  function shipping() {
    botSay(
      "🚚 Enviamos a <b>toda Colombia</b> desde Bogotá. " +
      "El costo y tiempo dependen de tu ciudad — lo confirmamos al toque por WhatsApp. " +
      "También puedes recoger en Bogotá o comprar a bordo."
    );
    setTimeout(() => setQuick([
      { label: "📍 Coordinar mi envío", wa: "¡Hola BBF! ✈️ Quiero saber el envío a mi ciudad." },
      { label: "← Menú", run: home, userEcho: false },
    ]), 460);
  }

  function howto() {
    botSay(
      "Comprar es muy fácil:<br>" +
      "1️⃣ Agrega tus piezas al carrito (botón <b>+ Agregar</b>).<br>" +
      "2️⃣ Abre el carrito y toca <b>Finalizar por WhatsApp</b>.<br>" +
      "3️⃣ Un asesor confirma stock, envío y pago. ¡Listo para volar! ✈️"
    );
    setTimeout(() => setQuick([
      { label: "🛍️ Ver productos", run: showCats },
      { label: "🛒 Comprar por WhatsApp", wa: "¡Hola BBF! ✈️ Quiero hacer un pedido." },
      { label: "← Menú", run: home, userEcho: false },
    ]), 460);
  }

  // ---- búsqueda de producto por texto ----
  function search(q) {
    const nq = norm(q);
    const words = nq.split(/\s+/).filter((w) => w.length > 2);
    let res = catalog()
      .map((p) => {
        const hay = norm(p.name + " " + p.sku + " " + p.cat);
        let score = 0;
        if (hay.includes(nq)) score += 5;
        words.forEach((w) => { if (hay.includes(w)) score += 2; });
        return { p, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || (b.p.stock > 0) - (a.p.stock > 0));
    return res.slice(0, 4).map((x) => x.p);
  }

  function productCard(p) {
    const estado = p.stock === 0 ? "❌ Agotado" : p.stock <= 3 ? "⚠️ Últimas " + p.stock : "✅ Disponible";
    const msg = "¡Hola BBF! ✈️\nQuiero comprar: " + p.name + " (" + p.sku + ") — " + (p.priceLabel || fmt(p.price)) + ".\n¿Me ayudan?";
    return (
      '<div class="bbf-bot__prod">' +
      '<div class="bbf-bot__prodtop"><b>' + p.name + "</b><span>" + (p.priceLabel || fmt(p.price)) + "</span></div>" +
      '<div class="bbf-bot__prodmeta">' + p.sku + " · " + estado + "</div>" +
      '<a class="bbf-bot__prodbuy" href="' + wa(msg) + '" target="_blank">Pedir por WhatsApp →</a>' +
      "</div>"
    );
  }

  function handleText(q) {
    const nq = norm(q);
    if (/(envio|envios|entrega|domicilio|ciudad)/.test(nq)) return shipping();
    if (/(pago|pagar|transferencia|efectivo|contra ?entrega|nequi|daviplata)/.test(nq))
      return (botSay("💳 El pago se coordina con el asesor por WhatsApp (transferencia, Nequi/Daviplata o contra entrega según tu ciudad)."),
        setTimeout(() => setQuick([{ label: "💳 Coordinar pago", wa: "¡Hola BBF! ✈️ ¿Qué medios de pago manejan?" }, { label: "← Menú", run: home, userEcho:false }]), 460));
    if (/(como compro|como comprar|comprar|pedido|carrito)/.test(nq)) return howto();
    if (/(precio|precios|cuanto|vale|cuesta)/.test(nq) && nq.split(" ").length <= 2) return prices();
    if (/(ubicacion|donde estan|direccion|bogota|tienda|local)/.test(nq))
      return (botSay("📍 Estamos en <b>Bogotá</b>. Vendemos por WhatsApp, Instagram y a bordo, con envíos a todo el país."),
        setTimeout(() => setQuick([{ label: "🧑‍✈️ Hablar con asesor", wa: "¡Hola BBF! ✈️ ¿Dónde puedo verlos en Bogotá?" }, { label: "← Menú", run: home, userEcho:false }]), 460));
    if (/(hola|buenas|buenos dias|buenas tardes)/.test(nq)) return (botSay("¡Hola! 👋 ¿Buscas una pieza en especial o te muestro las categorías?"), setTimeout(home, 460));

    // búsqueda de producto
    const found = search(q);
    if (found.length) {
      botSay("Encontré esto para ti:");
      setTimeout(() => {
        bubble(found.map(productCard).join(""), "bot");
        setQuick([{ label: "🛍️ Ver todo el catálogo", run: () => gotoCat("all"), userEcho:false }, { label: "← Menú", run: home, userEcho:false }]);
      }, 460);
    } else {
      botSay("No encontré esa pieza por el nombre 🤔. Puedo mostrarte las categorías o te paso con un asesor.");
      setTimeout(() => setQuick([
        { label: "🛍️ Ver categorías", run: showCats },
        { label: "🧑‍✈️ Hablar con asesor", wa: "¡Hola BBF! ✈️ Busco un producto, ¿me ayudan?" },
      ]), 460);
    }
  }

  // ---- montaje ----
  function open() {
    opened = true; panel.classList.add("is-open"); fab.classList.add("is-open");
    if (!logEl.dataset.started) { logEl.dataset.started = "1"; greet(); }
  }
  function close() { opened = false; panel.classList.remove("is-open"); fab.classList.remove("is-open"); }

  function mount() {
    fab = document.createElement("button");
    fab.className = "bbf-bot-fab";
    fab.setAttribute("aria-label", "Abrir asistente");
    fab.innerHTML =
      '<span class="bbf-bot-fab__open">💬</span><span class="bbf-bot-fab__label">¿Dudas?</span>';
    document.body.appendChild(fab);

    panel = document.createElement("div");
    panel.className = "bbf-bot";
    panel.innerHTML =
      '<header class="bbf-bot__head">' +
      '<span class="bbf-bot__ava">BBF</span>' +
      '<div class="bbf-bot__id"><b>Asistente BBF</b><span>Aviación en cada detalle ✈️</span></div>' +
      '<button class="bbf-bot__close" aria-label="Cerrar">✕</button></header>' +
      '<div class="bbf-bot__log"></div>' +
      '<div class="bbf-bot__quick"></div>' +
      '<form class="bbf-bot__form"><input type="text" placeholder="Escribe tu pregunta…" autocomplete="off">' +
      '<button type="submit" aria-label="Enviar">➤</button></form>';
    document.body.appendChild(panel);

    logEl = panel.querySelector(".bbf-bot__log");
    quickEl = panel.querySelector(".bbf-bot__quick");

    fab.addEventListener("click", () => (opened ? close() : open()));
    panel.querySelector(".bbf-bot__close").addEventListener("click", close);
    panel.querySelector(".bbf-bot__form").addEventListener("submit", (e) => {
      e.preventDefault();
      const inp = panel.querySelector(".bbf-bot__form input");
      const q = inp.value.trim();
      if (!q) return;
      bubble(q, "user"); inp.value = "";
      handleText(q);
    });
  }

  window.BBFBot = {
    init(opts) {
      Object.assign(CFG, opts || {});
      const start = () => mount();
      if (document.readyState === "loading")
        document.addEventListener("DOMContentLoaded", start);
      else start();
    },
  };
})();
