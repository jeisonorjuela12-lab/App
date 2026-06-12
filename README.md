# Esquiva — mi primer juego

Un juego arcade completo en **un solo archivo HTML**, sin motores ni librerías.
Sirve como ejemplo de las piezas que tiene cualquier juego por dentro.

## Cómo jugarlo

Abre `index.html` en cualquier navegador (doble clic y ya). Funciona en
computador (flechas ⬅️ ➡️ o teclas A/D) y en celular (arrastra el dedo).

El objetivo: esquivar los bloques que caen. Cada bloque que pasa suma un punto
y la velocidad sube sola. El récord se guarda en el navegador.

## Las 4 piezas de todo juego

El código está organizado y comentado para mostrar la anatomía universal de un
juego, sea este de 200 líneas o un AAA de millones:

1. **Estado** — variables que describen el mundo: posición del jugador, lista
   de obstáculos, puntaje, velocidad.
2. **Entrada** — leer el teclado y la pantalla táctil.
3. **Actualizar** — mover todo un poquito cada frame: física, aparición de
   bloques, detección de colisiones, dificultad creciente.
4. **Dibujar** — pintar el estado en el canvas.

Un **game loop** (`requestAnimationFrame`) repite actualizar + dibujar unas 60
veces por segundo. Eso es un juego: todo lo demás es contenido encima de este
esqueleto.

## Siguientes pasos naturales

- Sonidos (Web Audio API) y música.
- Power-ups: escudo, cámara lenta, imán de puntos.
- Tabla de récords en línea (necesita un backend pequeño).
- Migrar a un motor real cuando el proyecto crezca: **Godot** (gratis, ideal
  para empezar), **Phaser** (juegos web en JS) o **Unity** (móvil/PC, el más
  usado comercialmente).
