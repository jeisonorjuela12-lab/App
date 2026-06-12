# Juegos del repo

Dos juegos completos, cada uno en **un solo archivo HTML**, sin motores ni
librerías. Se abren con doble clic en cualquier navegador.

## ⚽ Héroe del Barrio (`heroe.html`)

Prototipo v0 de un simulador de carrera futbolística:

- **Decisiones semanales**: entrenar, descansar o salir de farra. Cada una
  mueve tu forma, energía y moral — y la farra puede terminar en escándalo.
- **Partidos jugables**: tus oportunidades de gol se juegan en un minijuego de
  definición (apuntas dónde rematar y paras la barra de precisión). El arquero
  mejora cada fecha y **te estudia**: si remates siempre al mismo palo, te lee.
- **El mundo reacciona**: después de cada partido, la hinchada opina en un feed
  de redes sociales — te idolatra o te destroza según tu calificación — y el
  club presiona: si el DT pierde la confianza, te rescinden el contrato.
- **Finales distintos**: fichaje europeo, renovación, temporada para el olvido
  o despido, según tus goles, tu reputación y la confianza del DT.

# Esquiva (`index.html`) — mi primer juego

Un juego arcade mínimo que muestra las piezas que tiene cualquier juego por
dentro.

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
