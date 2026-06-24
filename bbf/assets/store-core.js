/* ============================================================================
   BBF · Store Core  —  motor compartido por las 3 versiones
   ----------------------------------------------------------------------------
   Renderiza el catálogo (window.BBF_CATALOG / window.BBF_CATEGORIES),
   los filtros por categoría, el carrito opcional y el flujo de compra
   por WhatsApp (con un mensaje pre-armado, listo para que un bot responda).

   Cada versión llama a:  BBF.init({ ...config })
   ============================================================================ */
(function () {
  "use strict";

  // ----- Configuración por defecto (cada versión la sobre-escribe) -----------
  const CFG = {
    // Número de WhatsApp de BBF en formato internacional, SIN + ni espacios.
    // 57 = Colombia.  >>> CAMBIAR por el número real del negocio <<<
    waNumber: "573000000000",
    currency: "COP",
    cart: false,        // ¿mostrar carrito acumulable?
    waFab: true,        // ¿botón flotante de WhatsApp?
    quickAdd: true,     // ¿botón "Agregar" en cada tarjeta? (requiere cart)
    catNav: true,       // ¿barra de filtros por categoría?
    mount: "#bbf-catalog",
  };

  const fmt = (n) =>
    "$ " + Number(n).toLocaleString("es-CO", { maximumFractionDigits: 0 });

  const cart = []; // {id, name, sku, price, qty}

  // ----- Helpers de WhatsApp -------------------------------------------------
  function waLink(text) {
    return "https://wa.me/" + CFG.waNumber + "?text=" + encodeURIComponent(text);
  }

  function buyOne(p) {
    const msg =
      "¡Hola BBF! ✈️\n\n" +
      "Quiero comprar esta pieza:\n" +
      "• " + p.name + "\n" +
      "• SKU: " + p.sku + "\n" +
      "• Precio: " + (p.priceLabel || fmt(p.price)) + "\n\n" +
      "¿Me ayudan con la compra y el envío?";
    window.open(waLink(msg), "_blank");
  }

  function buyCart() {
    if (!cart.length) {
      window.open(
        waLink("¡Hola BBF! ✈️ Quiero asesoría para escoger una pieza."),
        "_blank"
      );
      return;
    }
    let total = 0;
    let lines = cart.map((c) => {
      total += c.price * c.qty;
      return "• " + c.qty + "× " + c.name + " (" + c.sku + ") — " + fmt(c.price);
    });
    const msg =
      "¡Hola BBF! ✈️\n\nQuiero comprar estas piezas:\n\n" +
      lines.join("\n") +
      "\n\nTotal aprox.: " + fmt(total) + " " + CFG.currency +
      "\n\n¿Me confirman disponibilidad y envío?";
    window.open(waLink(msg), "_blank");
  }

  // ----- Carrito -------------------------------------------------------------
  function addToCart(p) {
    const found = cart.find((c) => c.id === p.id);
    if (found) found.qty++;
    else cart.push({ id: p.id, name: p.name, sku: p.sku, price: p.price, qty: 1 });
    renderCart();
    pulseCartFab();
  }
  function removeFromCart(id) {
    const i = cart.findIndex((c) => c.id === id);
    if (i > -1) cart.splice(i, 1);
    renderCart();
  }
  function changeQty(id, d) {
    const c = cart.find((x) => x.id === id);
    if (!c) return;
    c.qty += d;
    if (c.qty <= 0) removeFromCart(id);
    else renderCart();
  }

  function cartCount() {
    return cart.reduce((s, c) => s + c.qty, 0);
  }

  function renderCart() {
    const badge = document.querySelector(".bbf-cart-fab__count");
    if (badge) {
      badge.textContent = cartCount();
      badge.style.display = cartCount() ? "flex" : "none";
    }
    const body = document.querySelector(".bbf-cart__body");
    const totalEl = document.querySelector(".bbf-cart__total b");
    if (!body) return;
    if (!cart.length) {
      body.innerHTML =
        '<p class="bbf-cart__empty">Tu maleta está vacía. Toca “Agregar” en cualquier pieza.</p>';
      if (totalEl) totalEl.textContent = fmt(0);
      return;
    }
    let total = 0;
    body.innerHTML = cart
      .map((c) => {
        total += c.price * c.qty;
        return (
          '<div class="bbf-cart__row" data-id="' + c.id + '">' +
          '<div class="bbf-cart__rowinfo"><span class="bbf-cart__rowname">' +
          c.name +
          '</span><span class="bbf-cart__rowsku">' + c.sku + " · " + fmt(c.price) + "</span></div>" +
          '<div class="bbf-cart__qty"><button data-act="dec">−</button><span>' +
          c.qty +
          '</span><button data-act="inc">+</button></div>' +
          '<button class="bbf-cart__rm" data-act="rm" title="Quitar">✕</button>' +
          "</div>"
        );
      })
      .join("");
    if (totalEl) totalEl.textContent = fmt(total);
  }

  function pulseCartFab() {
    const fab = document.querySelector(".bbf-cart-fab");
    if (!fab) return;
    fab.classList.remove("is-pulse");
    void fab.offsetWidth;
    fab.classList.add("is-pulse");
  }

  // ----- Render del catálogo -------------------------------------------------
  function card(p) {
    const agotado = p.stock === 0;
    const stockLbl = agotado
      ? "AGOTADO"
      : p.stock <= 3
      ? "ÚLTIMAS " + p.stock
      : "Disponible";
    const variantsLbl = p.variants ? p.variants + " variantes" : "Pieza única";

    const actions =
      '<button class="bbf-buy" ' + (agotado ? "disabled" : "") + ' data-id="' + p.id + '">' +
      (agotado ? "Avísame" : "Comprar por WhatsApp") +
      "</button>" +
      (CFG.cart && CFG.quickAdd && !agotado
        ? '<button class="bbf-add" data-id="' + p.id + '" title="Agregar a la maleta">+ Agregar</button>'
        : "");

    return (
      '<article class="bbf-card' + (agotado ? " is-out" : "") + '" data-cat="' + p.cat + '">' +
      '<div class="bbf-card__media">' +
      '<span class="bbf-card__badge' + (agotado ? " is-out" : p.stock <= 3 ? " is-low" : "") + '">' +
      stockLbl + "</span>" +
      (p.img
        ? '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy">'
        : '<div class="bbf-card__ph">' + p.sku + "</div>") +
      "</div>" +
      '<div class="bbf-card__body">' +
      '<h3 class="bbf-card__name">' + p.name + "</h3>" +
      '<div class="bbf-card__meta"><span>' + p.sku + "</span><span>" + variantsLbl + "</span></div>" +
      '<div class="bbf-card__price">' + (p.priceLabel || fmt(p.price)) + "</div>" +
      '<div class="bbf-card__actions">' + actions + "</div>" +
      "</div>" +
      "</article>"
    );
  }

  function render() {
    const mount = document.querySelector(CFG.mount);
    if (!mount) return;
    const cats = window.BBF_CATEGORIES || [];
    const items = window.BBF_CATALOG || [];

    // Filtros por categoría
    if (CFG.catNav) {
      const nav = document.querySelector("#bbf-catnav");
      if (nav) {
        nav.innerHTML =
          '<button class="bbf-chip is-active" data-cat="all">Todo el catálogo</button>' +
          cats
            .map(
              (c) =>
                '<button class="bbf-chip" data-cat="' + c.id + '">' + c.label + "</button>"
            )
            .join("");
        nav.addEventListener("click", (e) => {
          const b = e.target.closest(".bbf-chip");
          if (!b) return;
          nav.querySelectorAll(".bbf-chip").forEach((x) => x.classList.remove("is-active"));
          b.classList.add("is-active");
          const cat = b.dataset.cat;
          mount.querySelectorAll(".bbf-cat").forEach((sec) => {
            sec.style.display = cat === "all" || sec.dataset.cat === cat ? "" : "none";
          });
        });
      }
    }

    // Secciones por categoría
    mount.innerHTML = cats
      .map((c, idx) => {
        const list = items.filter((i) => i.cat === c.id);
        if (!list.length) return "";
        return (
          '<section class="bbf-cat" data-cat="' + c.id + '" id="cat-' + c.id + '">' +
          '<header class="bbf-cat__head">' +
          '<span class="bbf-cat__num">' + String(idx + 1).padStart(2, "0") + "</span>" +
          '<h2 class="bbf-cat__label">' + c.label + "</h2>" +
          '<span class="bbf-cat__tag">— ' + c.tagline + "</span>" +
          '<span class="bbf-cat__count">' + list.length + " piezas</span>" +
          "</header>" +
          '<div class="bbf-grid">' + list.map(card).join("") + "</div>" +
          "</section>"
        );
      })
      .join("");

    // Delegación de eventos en las tarjetas
    mount.addEventListener("click", (e) => {
      const buy = e.target.closest(".bbf-buy");
      const add = e.target.closest(".bbf-add");
      if (buy && !buy.disabled) {
        const p = items.find((x) => x.id === buy.dataset.id);
        if (p) buyOne(p);
      }
      if (add) {
        const p = items.find((x) => x.id === add.dataset.id);
        if (p) addToCart(p);
      }
    });
  }

  // ----- Botones flotantes y carrito -----------------------------------------
  function mountChrome() {
    // FAB de WhatsApp
    if (CFG.waFab) {
      const wa = document.createElement("a");
      wa.className = "bbf-wa-fab";
      wa.href = waLink("¡Hola BBF! ✈️ Quiero información sobre sus piezas.");
      wa.target = "_blank";
      wa.title = "Escríbenos por WhatsApp";
      wa.innerHTML =
        '<svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor"><path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.2 1.1 1.1-4-.3-.4a10.2 10.2 0 01-1.6-5.5C5.5 9.6 10.2 5 16 5s10.5 4.6 10.5 10.5S21.8 25.8 16 25.8zm5.8-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.7.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/></svg>';
      document.body.appendChild(wa);
    }

    // Carrito
    if (CFG.cart) {
      const fab = document.createElement("button");
      fab.className = "bbf-cart-fab";
      fab.title = "Ver tu maleta";
      fab.innerHTML =
        '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h2l2.4 11.4a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 8H6"/><circle cx="9" cy="20" r="1.3"/><circle cx="18" cy="20" r="1.3"/></svg>' +
        '<span class="bbf-cart-fab__count" style="display:none">0</span>';
      document.body.appendChild(fab);

      const drawer = document.createElement("aside");
      drawer.className = "bbf-cart";
      drawer.innerHTML =
        '<div class="bbf-cart__head"><span>Tu maleta de embarque</span><button class="bbf-cart__close" title="Cerrar">✕</button></div>' +
        '<div class="bbf-cart__body"></div>' +
        '<div class="bbf-cart__foot">' +
        '<div class="bbf-cart__total">Total aprox. <b>$ 0</b></div>' +
        '<button class="bbf-cart__checkout">Finalizar por WhatsApp</button>' +
        '<p class="bbf-cart__note">Un asesor confirma stock y envío. Sin pagos en línea.</p>' +
        "</div>";
      document.body.appendChild(drawer);

      const scrim = document.createElement("div");
      scrim.className = "bbf-scrim";
      document.body.appendChild(scrim);

      const open = () => { drawer.classList.add("is-open"); scrim.classList.add("is-open"); };
      const close = () => { drawer.classList.remove("is-open"); scrim.classList.remove("is-open"); };
      fab.addEventListener("click", open);
      drawer.querySelector(".bbf-cart__close").addEventListener("click", close);
      scrim.addEventListener("click", close);
      drawer.querySelector(".bbf-cart__checkout").addEventListener("click", buyCart);
      drawer.querySelector(".bbf-cart__body").addEventListener("click", (e) => {
        const row = e.target.closest(".bbf-cart__row");
        if (!row) return;
        const id = row.dataset.id;
        const act = e.target.dataset.act;
        if (act === "inc") changeQty(id, 1);
        else if (act === "dec") changeQty(id, -1);
        else if (act === "rm") removeFromCart(id);
      });
      renderCart();
    }
  }

  // ----- API pública ---------------------------------------------------------
  window.BBF = {
    init(opts) {
      Object.assign(CFG, opts || {});
      const start = () => { render(); mountChrome(); };
      if (document.readyState === "loading")
        document.addEventListener("DOMContentLoaded", start);
      else start();
    },
    waLink,
    buyCart,
    fmt,
  };
})();
