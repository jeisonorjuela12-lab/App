# Juegos del repo

Dos juegos completos, cada uno en **un solo archivo HTML**, sin motores ni
librerías. Se abren con doble clic en cualquier navegador.

## ⚽ Héroe del Barrio v1 (`heroe.html`)

Carrera de futbolista con partidos jugables en una cancha 2D:

- **Jugabilidad real**: en cada jugada de ataque controlas a tu jugador en la
  cancha — arrastras para correr y regatear, los defensas te persiguen con IA
  (y mejoran cada fecha), tocas un compañero para el pase (te la devuelve
  cuando te desmarcas) y tocas el arco para rematar contra un arquero que se
  lanza y te lee.
- **Historia y personajes**: Don Iván el empresario, tu mamá, Míster Salazar
  el DT, y Maicol Restrepo, el suplente que quiere tu puesto. Con decisiones:
  renegociar el contrato a mitad de temporada, y el clásico contra Real Cumbia
  donde todo vale doble.
- **Liga de 10 clubes** con tabla de posiciones real que avanza cada fecha.
- **Plata**: salario semanal, prima por gol, y una tienda (la moto, la cadena,
  la casa para tu mamá).
- **El mundo reacciona**: feed de redes sociales que te idolatra o te destroza,
  presión del club, y despido si el DT pierde la paciencia.
- **Finales distintos**: campeón y fichado por Europa, renovación, temporada
  para el olvido o rescisión de contrato.

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
