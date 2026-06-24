# Buy Before Flight · 3 propuestas de diseño

Tres versiones de la página de BBF, partiendo de la identidad de marca
(negro + dorado, aviación, "el producto es el héroe") y resolviendo dos cosas
que pedía el cliente: que **el producto resalte** (antes el negro lo apagaba) y
que **comprar sea de un toque por WhatsApp**.

## Cómo verlas

Abre **`index.html`** — es el comparador con las 3 versiones, sus diferencias y
una tabla. Desde ahí entras a cada una.

| Archivo | Versión | Paleta | Idea |
|---|---|---|---|
| `v1-cabina-clara.html` | 1 · Cabina Clara | Crema + negro + oro | Clara y luminosa, el producto resalta al máximo |
| `v2-cielo-abierto.html` | 2 · Cielo Abierto | Azul cielo + oro | La más viva, con **carrito** acumulable |
| `v3-oro-noche.html` | 3 · Oro Noche | Negro grafito + oro | Fiel al manual, refinada |

## Estructura

```
bbf/
├─ index.html              comparador (empieza aquí)
├─ v1-cabina-clara.html
├─ v2-cielo-abierto.html
├─ v3-oro-noche.html
└─ assets/
   ├─ catalog-data.js      catálogo real: 46 piezas, 10 categorías
   ├─ store-core.js        motor compartido (render, filtros, carrito, WhatsApp)
   └─ catalog-imgs/        imágenes de producto
```

## Pendiente antes de publicar

1. **Número de WhatsApp.** Hoy está el de ejemplo `573000000000` en cada
   archivo (en el bloque `<script>` final y en `store-core.js`). Reemplázalo por
   el número real (formato internacional, sin `+` ni espacios).
2. **Bot de WhatsApp.** Por ahora el botón abre WhatsApp con el pedido ya
   escrito. El siguiente paso es conectar un bot que responda dudas y confirme
   stock. Se monta cuando se elija la versión.
