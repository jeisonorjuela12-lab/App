# Asistente Inteligente de Movilidad para Bogotá

## Propuesta de producto — Documento de trabajo

**Versión:** 1.0 · **Fecha:** 28 de julio de 2026
**Preparado por:** Jeison Orjuela
**Propósito:** presentar la idea al equipo, alinear la visión y acordar los siguientes pasos de validación y prototipo.

---

## 1. Resumen ejecutivo

**La idea en una frase:** una app que actúa como **copiloto inteligente de movilidad** para Bogotá: reúne en un solo lugar el tráfico, el clima, los incidentes, los cierres viales, la seguridad ciudadana y las restricciones (como el pico y placa), y usa **inteligencia artificial** para recomendar la mejor decisión de viaje **antes y durante** el recorrido, con una experiencia personalizada por **modo de transporte** (🏍️ moto, 🚗 carro, 🚖 taxi, 🚛 carga, 🚐 furgón; y más adelante 🚌 SITP, 🚍 TransMilenio, 🚲 bicicleta y 🚶 peatón).

**No queremos ser otro Waze ni otro Google Maps.** Esas apps responden *"¿cómo llego?"*. Nosotros respondemos la pregunta que ningún producto responde hoy: *"¿cómo me muevo hoy?"* — ¿a qué hora me conviene salir?, ¿tengo pico y placa?, ¿va a llover durante mi recorrido?, ¿esa zona es segura a esta hora?, ¿hay manifestación, obra o cierre en mi corredor?, ¿me conviene la moto, el carro o TransMilenio?

**El contexto no puede ser mejor (ni peor para los bogotanos):**

- Bogotá fue la **7.ª ciudad más congestionada del mundo** en 2025, con velocidad promedio de **18,9 km/h** (TomTom Traffic Index 2025). Medellín (#11) y Cali (#13) también están en el top mundial: el problema es nacional y regional.
- Cada conductor colombiano perdió en promedio **~148 horas en trancones en 2025** — más de seis días completos (TomTom, 2025).
- En Bogotá se hacen **más de 12,1 millones de viajes diarios** (Encuesta de Movilidad 2023) y el ciudadano promedio invierte **1 hora 15 minutos** en llegar a su destino frecuente (2025).
- La inseguridad condiciona cada trayecto: solo en el primer bimestre de 2025 se registraron **21.088 hurtos a personas** (~350 al día) y en el segundo trimestre de 2025 se robaron **7.556 celulares** en la ciudad.
- Las vías cobran vidas: en Colombia murieron en promedio **14 motociclistas al día** durante 2025.

**La oportunidad:** toda esa información existe, pero está fragmentada en 5-7 fuentes distintas (Waze, apps de clima, X/Twitter de @BogotaTransito, noticieros, TransMi App, grupos de WhatsApp). Nadie la integra, nadie la personaliza y nadie la convierte en una recomendación accionable. Ese es exactamente el espacio que vamos a ocupar con IA.

**La estrategia:** entrar por una cuña estrecha y desatendida — el **motociclista bogotano** (Colombia matriculó un récord de **1,1 millones de motos nuevas en 2025**; ya son el **62% del parque automotor nacional**) — y expandir por modos y por ciudades. Monetización freemium en B2C y, sobre todo, **B2B con flotas** (carga, furgones, mensajería, taxis).

**Estado actual:** idea en fase de validación. Siguiente hito: entrevistas con usuarios + demo navegable.

---

## 2. El problema: moverse en Bogotá hoy

### 2.1 Una congestión de récord mundial

- El **TomTom Traffic Index 2025** ubicó a Bogotá como la **7.ª ciudad más congestionada del mundo**, con una velocidad promedio de **18,9 km/h**. A ese ritmo, cruzar la ciudad puede tomar más de dos horas.
- Cuatro ciudades colombianas (Bogotá, Medellín, Cali y Barranquilla) aparecen entre las más congestionadas del planeta. El promedio nacional de tiempo perdido fue de **~148 horas por conductor en 2025**; en Bogotá las estimaciones van de **117 a 153 horas al año** según la métrica (TomTom / INRIX 2025).
- Las ciudades que lideran el ranking mundial son Ciudad de México y Bengaluru (India), con hasta 180 horas perdidas al año — es decir, Bogotá juega en la "liga" de las peores del mundo.
- Factor agravante: la construcción de la **Línea 1 del Metro** (meta de operación hacia 2028) y decenas de frentes de obra simultáneos seguirán estrangulando corredores clave durante los próximos años. **Los años 2026-2028 serán probablemente los más difíciles de la historia de la movilidad bogotana.**

### 2.2 La escala del movimiento diario

- **Más de 12,1 millones de viajes diarios** en Bogotá (Encuesta de Movilidad 2023).
- **4,2 millones de viajes diarios en transporte público** (35% del total).
- El bogotano promedio invierte **1 hora 15 minutos** en llegar a su destino más frecuente, y hay trayectos reportados de **hasta 2 horas** (Encuesta de Cultura Ciudadana 2025).

### 2.3 La inseguridad condiciona cada decisión de viaje

- En el **primer bimestre de 2025** se registraron **21.088 hurtos a personas** en Bogotá — un promedio cercano a **350 robos al día**. En 2026 la tendencia mejora (−38% en el primer bimestre frente a 2025), pero el volumen sigue siendo enorme.
- Solo en el **segundo trimestre de 2025** se robaron **7.556 celulares**; las localidades más golpeadas: Chapinero, Suba y Engativá.
- La Secretaría de Seguridad ha identificado **una veintena de estructuras delincuenciales** dedicadas al hurto en la ciudad.
- Consecuencia práctica: los bogotanos ya "navegan" con un **mapa mental del miedo** — evitan corredores, cambian horarios, esconden el celular — pero lo hacen **a ciegas, sin datos**. Ninguna app de movilidad les dice qué zonas evitar, a qué hora y por dónde sí.

### 2.4 Las vías cobran vidas — sobre todo de motociclistas y peatones

- En un año típico mueren **más de 500 personas** en las vías de Bogotá. En 2022: 536 víctimas fatales — **36,6% motociclistas, 36,8% peatones y 15,1% ciclistas** (Observatorio de Movilidad de Bogotá).
- En Colombia murieron en promedio **14 motociclistas al día** durante 2025 (El Tiempo, con datos ONSV).
- En 2025 Bogotá logró frenar la tendencia al alza (reducción del orden de 15-20% al cierre del año), pero el motociclista sigue siendo, por lejos, el actor más vulnerable de la vía.

### 2.5 El clima cambia el viaje en minutos

- Bogotá tiene un régimen de lluvias bimodal con aguaceros intensos, granizadas y puntos de encharcamiento recurrentes.
- Para quien va en moto o bicicleta, la lluvia **no es una molestia: cambia la decisión completa del viaje** (salir antes, salir después, cambiar de modo, ponerse el impermeable, evitar deprimidos que se inundan).
- Hoy el pronóstico vive en otra app, desconectado de la ruta y de la hora real de salida.

### 2.6 Las reglas del juego cambian todos los días

- **Pico y placa** para particulares de **6:00 a. m. a 9:00 p. m.** y para taxis desde las 5:30 a. m., con dígitos que rotan según el día, excepciones y la opción de pago (**Pico y Placa Solidario**).
- A esto se suman: día sin carro, restricciones a vehículos de carga por corredor y horario, desvíos por obras, cierres por eventos, ciclovía dominical y manifestaciones frecuentes en corredores clave.
- La información oficial existe, pero hay que "pescarla" cada día en webs, X/Twitter y noticieros. **Nadie la personaliza a TU placa, TU modo de transporte y TU ruta habitual.** Equivocarse cuesta: sanción económica alta e inmovilización del vehículo.

### 2.7 El meta-problema: la información está fragmentada

| Lo que el usuario necesita saber | Dónde está hoy | Problema |
|---|---|---|
| ¿Cómo está el tráfico? | Waze / Google Maps | Solo durante el viaje, pensado para carro |
| ¿Va a llover en mi recorrido? | Apps de clima genéricas | Desconectado de la ruta y la hora de salida |
| ¿Hay cierres, obras, manifestaciones? | X (@BogotaTransito, @SectorMovilidad), noticias | Hay que buscarla manualmente, formato no accionable |
| ¿Esa zona es segura a esta hora? | Datos abiertos (SIEDCO), noticias, rumor, grupos de WhatsApp | Nadie la integra a la ruta; puro "mapa mental" |
| ¿Tengo pico y placa hoy? | Webs oficiales, prensa | Nadie te avisa proactivamente según tu placa |
| ¿Cómo está TransMilenio? | TransMi App, X | Aislado del resto de la movilidad |
| ¿Semáforo dañado, hueco, inundación? | Grupos de WhatsApp de moteros/taxistas | Conocimiento valioso que se pierde en el chat |

**Conclusión:** el bogotano toma entre 2 y 4 decisiones de movilidad al día con información incompleta, dispersa y desactualizada. El costo se paga en horas, en plata y, a veces, en la vida. **El problema no es la falta de información: es la falta de integración e inteligencia sobre ella.**

---

## 3. La problemática en el día a día, por tipo de usuario

- **🏍️ Motociclista** — el más expuesto: riesgo vital (líder en mortalidad vial), lluvia que cambia todo el viaje, robo de motos y celulares, normas cambiantes (restricciones de parrillero por zonas), y **ninguna app del mercado está diseñada para él**. Waze lo trata como un "carrito rápido".
- **🚗 Conductor particular** — pico y placa que rota cada día (con multa e inmovilización si se equivoca), trancones récord, robos en semáforos (celulares, espejos), incertidumbre total sobre a qué hora salir.
- **🚖 Taxista** — vive en la calle 12-14 horas al día: seguridad nocturna, zonas calientes que cambian por franja horaria, pico y placa propio, carreras hacia zonas que no conoce.
- **🚛 Transportador de carga / mulas** — restricciones de circulación por corredor y horario, riesgo de piratería terrestre, cada hora en trancón es plata perdida, planeación de ventanas de cargue/descargue.
- **🚐 Furgones / última milla** — multiparadas en zonas diversas, inseguridad de la mercancía, zonas de cargue escasas, presión de tiempos de entrega.
- **🚌 Usuario de TransMilenio / SITP** *(fase 2)* — 4,2 millones de viajes diarios: hurto y aglomeración en estaciones y buses, frecuencias inciertas, cierres de estaciones sin aviso útil.
- **🚲 Ciclista** *(fase 2)* — una de las redes de ciclorrutas más extensas de América Latina (del orden de 600 km), pero robo de bicicletas, lluvia, oscuridad y tramos inseguros.
- **🚶 Peatón** *(fase 2)* — el actor más numeroso y el más olvidado por las apps: caminar es el principal modo de la ciudad y nadie le informa qué corredores son seguros según la hora.

---

## 4. La solución: nuestra app

### 4.1 Concepto

Un **asistente inteligente de movilidad** — no otro mapa. Una **capa de inteligencia** que se apoya en la cartografía existente y agrega lo que nadie tiene: contexto local, seguridad, clima, normas e IA que decide contigo.

El producto acompaña **tres momentos del viaje**:

1. **ANTES (nuestra gran diferencia):** el "brief de salida" — la app te avisa proactivamente: *"Hoy es martes: tu placa 347 tiene pico y placa hasta las 9 p. m. Lloverá fuerte entre 5 y 7 p. m. en tu ruta al norte. Hay manifestación anunciada en la Av. NQS desde las 4 p. m. Te conviene salir antes de las 3:30 o irte en TransMilenio."*
2. **DURANTE:** alertas en ruta (incidentes, clima, zonas de riesgo por franja horaria) + radar colaborativo para reportar con un toque (o por voz, en moto).
3. **DESPUÉS:** la app aprende tus patrones (rutas habituales, horarios, modo preferido) y afina sus recomendaciones.

### 4.2 Funcionalidades núcleo (v1)

1. **Rutas inteligentes según el medio de transporte** (no es lo mismo moto que furgón).
2. **Estado del tráfico** en tiempo real.
3. **Tiempo estimado de llegada** realista (ajustado por clima y eventos, no solo por tráfico histórico).
4. **Clima en tiempo real y pronóstico durante el recorrido**, integrado a la decisión de ruta y hora de salida.
5. **Incidentes:** accidentes, cierres viales, manifestaciones y obras — integrando fuentes oficiales y reportes ciudadanos.
6. **Capa de seguridad:** historial de hurtos por zona y franja horaria (datos abiertos oficiales SIEDCO/Secretaría de Seguridad) + reportes de la comunidad.
7. **Recomendación de rutas más seguras:** el usuario elige el balance entre "la más rápida" y "la más segura" (clave de noche: corredores iluminados y acompañados).
8. **Radar colaborativo:** reporte en dos toques (o por voz) de accidente, semáforo dañado, hueco, inundación, vía cerrada, zona insegura.
9. **Alertas normativas personalizadas:** pico y placa según TU placa, día sin carro, restricciones de carga por corredor.
10. **Asistente IA:** fusiona todas las señales y responde en lenguaje natural: *"¿Cómo está la Autopista Sur hacia Soacha ahorita?"*, *"¿A qué hora me conviene salir para el aeropuerto?"*

### 4.3 Modos de movilidad: personalización real, no cosmética

Cada modo cambia las rutas, los riesgos, las reglas y las alertas relevantes:

| Modo | Qué cambia en la experiencia |
|---|---|
| 🏍️ **Moto** | Alertas de lluvia con anticipación (impermeable/refugio), huecos y superficies deslizantes, zonas de robo de motos, normas de parrillero, paraderos seguros |
| 🚗 **Carro particular** | Pico y placa personalizado, trancones y rutas alternas, zonas de robo en semáforos, parqueaderos |
| 🚖 **Taxi** | Pico y placa de taxis, mapa de calor de seguridad por franja horaria, corredores nocturnos seguros |
| 🚛 **Carga pesada / mulas** | Corredores autorizados y restricciones horarias, alturas y puentes, riesgo de piratería, ventanas de cargue |
| 🚐 **Furgón / última milla** | Optimización multiparada, zonas de cargue, seguridad de mercancía por zona |
| 🚌🚍 **SITP / TransMilenio** *(fase 2)* | Rutas y frecuencias, estado de estaciones, alertas de hurto/aglomeración por estación y hora |
| 🚲 **Bicicleta** *(fase 2)* | Ciclorrutas, robo de bicis por tramo, lluvia, iluminación |
| 🚶 **Peatón** *(fase 2)* | Corredores seguros según hora, iluminación, cruces peligrosos |

### 4.4 La IA como diferenciador (y no como adorno)

- **Fusión de señales:** tráfico + clima + seguridad + eventos + normas → una sola recomendación explicable ("te sugiero esta ruta **porque**...").
- **Fase 1 (MVP):** motor de reglas + LLM para el brief diario personalizado y preguntas en lenguaje natural. Tecnología madura, barata y rápida de implementar hoy.
- **Fase 2:** modelos propios de predicción — riesgo por corredor/hora, ETA ajustado por lluvia, probabilidad de cierre por manifestación.
- **Fase 3:** personalización profunda por patrones del usuario y de su gremio.

La IA es, además, nuestra defensa competitiva de producto: el valor no está en el mapa (commodity), está en **la calidad de la recomendación**.

### 4.5 Qué NO es (foco)

- **No es otro Waze:** no competimos en cartografía ni en navegación turn-by-turn al inicio; el MVP puede delegar la navegación (deep-link a Waze/Google Maps) mientras nosotros somos el cerebro que decide *qué ruta, cuándo y por qué*.
- **No es una app de denuncias judiciales** ni reemplaza la línea 123; los reportes son informativos y para la comunidad.
- **No es una red social:** la colaboración está al servicio del viaje, no del scroll.

---

## 5. Competencia y diferenciación

### 5.1 Panorama competitivo

Hay competidores fuertes **por función**, pero **nadie integra el paquete completo** y nadie lo personaliza por modo de transporte para Bogotá:

| Solución | Qué hace bien | Qué NO cubre (nuestro espacio) |
|---|---|---|
| **Waze** (Google) | El rey del tráfico colaborativo entre conductores; reportes masivos | Pensada solo para carro; nada de clima-en-ruta, ni seguridad ciudadana, ni pico y placa personalizado, ni modos moto/taxi/carga; no ayuda *antes* del viaje |
| **Google Maps** | Cobertura multimodal global, transporte público | Genérica y global: sin capa de seguridad local, sin normativa bogotana, colaboración limitada, cero personalización por gremio |
| **Moovit** (Intel) | Transporte público colaborativo; alianza con TransMilenio | No cubre moto/carro/taxi/carga; sin clima ni seguridad; validó el mercado: Intel la compró por ~US$900 millones (2020) |
| **TransMi App** (oficial) | Información oficial de TransMilenio/SITP | Solo transporte público; sin tráfico general; experiencia limitada |
| **TransmiSitp, MoviliXa** y similares | Rutas de TM/SITP no oficiales | Igual de acotadas; poco tiempo real |
| **Choro Alerta, CityCop, BATTU, WeHelp** | Reporte ciudadano de hurtos y alertas de seguridad | No tienen rutas ni movilidad; poca masa crítica; la seguridad queda aislada del viaje |
| **Uber / DiDi / inDrive / Cabify** | Resuelven "que me lleven" | No informan ni optimizan el viaje del que conduce su propio vehículo |
| **Fuentes oficiales** (@BogotaTransito, SDM, IDIGER, TransMilenio) | Información primaria de calidad | Dispersa, no personalizada, hay que buscarla; son nuestro insumo, no nuestro rival |
| **Citizen** (EE. UU., referente internacional) | Alertas de seguridad en tiempo real; modelo de suscripción premium | No existe en Colombia; valida que la gente **paga por seguridad en tiempo real** |

### 5.2 Lectura honesta del tablero

- **El espacio "integración + contexto local + modos + IA + antes-del-viaje" está libre.** Pero hay que decirlo sin ingenuidad: está libre en parte **porque es difícil** (múltiples fuentes de datos, masa crítica colaborativa, retención).
- **El moat de Waze es su comunidad, no su tecnología.** Por eso no lo atacamos de frente: nuestra cuña es el *antes del viaje* (donde Waze no juega), la seguridad (donde nadie juega integrado) y los nichos por gremio (moteros, taxistas, carga — a quienes nadie les habla).
- **Nuestra defensa a 3-5 años:** profundidad local imposible de copiar rápido (datos abiertos bogotanos + normativa + comunidad por gremio), velocidad de ejecución, y contratos B2B con flotas que generan ingresos y datos propios.
- **El sustituto real hoy** no es una app: es la combinación manual de 5-7 fuentes + los **grupos de WhatsApp de moteros y taxistas**. Esos grupos son, a la vez, la prueba de la demanda y nuestro mejor canal de lanzamiento.

---

## 6. ¿A quién ayuda y qué le resuelve?

| Segmento | Tamaño de la oportunidad | Qué le resolvemos |
|---|---|---|
| 🏍️ **Motociclistas** (usuario ancla) | Récord de 1,1 millones de motos nuevas en Colombia en 2025 (+35% vs 2024); las motos ya son el 62% del parque automotor nacional (~12,3 millones) | Llegar vivo y seco: rutas y alertas pensadas para moto, clima anticipado, zonas de robo, reporte por voz |
| 🚗 **Conductores particulares** | Millones de viajes diarios en carro en Bogotá | No comerse el trancón evitable, no caer en pico y placa, rutas más seguras en semáforos y de noche |
| 🚖 **Taxistas** | Decenas de miles de taxis en Bogotá | Seguridad nocturna por franja horaria, zonas calientes, su propio pico y placa |
| 🚛🚐 **Carga y última milla (B2B)** | Costos logísticos golpeados por congestión récord | Planeación con restricciones y ventanas, corredores autorizados, riesgo de piratería por tramo, horas-camión recuperadas |
| 🚌 **Usuarios de TM/SITP** *(fase 2)* | 4,2 millones de viajes diarios en transporte público | Viajar informado y más seguro por estación y franja horaria |
| 🚲🚶 **Ciclistas y peatones** *(fase 2-3)* | El mayor volumen de viajes de la ciudad es a pie y en bici | Corredores seguros e iluminados, robo de bicis por tramo |
| 🏙️ **La ciudad y las empresas** | Aseguradoras, gremios, autoridades | Datos agregados y anónimos de movilidad y riesgo; menos siniestros; mejor planeación |

**Impacto social directo:** tiempo recuperado, hurtos evitados (decisiones informadas de ruta y horario) y contribución a la reducción de muertes viales — alineado con los objetivos del Distrito (Visión Cero).

---

## 7. ¿Por qué ahora? (Timing)

1. **El dolor está en su punto máximo histórico:** congestión récord mundial + obras del Metro y frentes de obra hasta ~2028. Cuando el dolor crece, la disposición a adoptar herramientas nuevas también.
2. **La IA por fin lo permite:** los modelos de lenguaje y la fusión de datos en tiempo real son hoy maduros y baratos. El "asistente que te explica tu ciudad" era ciencia ficción en 2020; en 2026 es un producto construible por un equipo pequeño.
3. **Los datos están disponibles:** Datos Abiertos Bogotá y SIEDCO (delitos georreferenciados), IDEAM y APIs de clima, SIMUR/Secretaría de Movilidad, fuentes oficiales en X. Nadie los está fusionando en un producto ciudadano.
4. **El boom de motos no tiene producto:** el segmento que más crece en la movilidad colombiana (récord histórico de ventas en 2025) no tiene una sola app diseñada para él.
5. **La cultura colaborativa ya está instalada:** Colombia es país Waze; reportar es un hábito aprendido. No tenemos que educar el comportamiento, solo darle un mejor destino.
6. **El mercado valida la monetización:** Intel pagó ~US$900 millones por Moovit (2020); Citizen demostró en EE. UU. que la seguridad en tiempo real se paga por suscripción.

---

## 8. Modelo de negocio preliminar

| Fuente de ingreso | Descripción | Cuándo activarla |
|---|---|---|
| **B2C Freemium** | Núcleo gratis (rutas, tráfico, reportes). **Premium** (~$10.000–15.000 COP/mes): brief IA proactivo, rutas seguras avanzadas, alertas ilimitadas, multi-vehículo | Desde el MVP (medir disposición a pagar temprano) |
| **B2B Flotas** ⭐ | SaaS por vehículo/mes para carga, furgones, mensajería y empresas de taxis: dashboard, planeación con restricciones, riesgo por corredor | Fase 2 — **la columna vertebral del negocio** |
| **Alianzas** | Aseguradoras de motos (descuentos por conducción informada), marcas y concesionarios de motos (canal de distribución), gremios | Fase 2-3 |
| **B2G / Datos** | Reportes agregados y anonimizados de movilidad y riesgo para autoridades y planeadores | Fase 3 |
| **Publicidad contextual** | Gasolineras, parqueaderos, seguros — con mucho cuidado de no dañar la experiencia | Fase 3+, opcional |

**Nota honesta:** en Colombia el B2C paga poco y se cae rápido; el plan financiero debe pararse sobre el **B2B** (flotas y alianzas), usando la base masiva B2C como fuente de datos y de marca.

---

## 9. Riesgos principales y cómo los mitigamos (sin maquillaje)

| # | Riesgo | Gravedad | Mitigación |
|---|---|---|---|
| 1 | **Arranque en frío** del radar colaborativo: sin usuarios no hay reportes, sin reportes no hay valor | 🔴 Alta | El MVP es útil **sin comunidad**: datos oficiales + abiertos + clima + normas ya generan valor solo. Lanzar en comunidades moteras existentes (parches, grupos de WhatsApp) con embajadores y gamificación |
| 2 | **Google/Waze copian** cualquier feature exitosa | 🔴 Alta | No competir en su cancha (navegación). Profundidad local (SIEDCO, pico y placa, gremios) que a un gigante global no le paga priorizar; velocidad; contratos B2B |
| 3 | **Costos de APIs** de mapas y rutas | 🟡 Media | OpenStreetMap + motores open source (OSRM/Valhalla/GraphHopper), niveles gratuitos de Mapbox; delegar turn-by-turn en el MVP |
| 4 | **Calidad del dato de seguridad** (rezago, subregistro) y riesgo de **estigmatizar zonas** | 🟡 Media | Combinar fuentes (oficial + comunidad), mostrar riesgo relativo por franja horaria, lenguaje cuidadoso, revisión de sesgos |
| 5 | **Privacidad y legal:** ubicación es dato sensible (Ley 1581 de 2012 – habeas data); reportes falsos o difamatorios | 🟡 Media | Anonimización desde el diseño, política de datos clara, moderación de reportes, sin señalar personas |
| 6 | **Retención:** las apps de mapas son "winner-take-most" y el hábito es difícil de cambiar | 🔴 Alta | La cuña es **antes del viaje** (brief diario, pico y placa, clima, manifestaciones): notificaciones útiles crean hábito diario sin pedirle al usuario abandonar Waze el día 1 |
| 7 | **Monetización B2C débil** en el mercado colombiano | 🟡 Media | B2B como columna vertebral; B2C premium como complemento |
| 8 | **Seguridad física al reportar** (nadie debe manipular el celular en moto) | 🟢 Baja | Reporte por voz y de dos toques; auto-reporte al detenerse |

### Veredicto honesto sobre la idea

**Lo bueno (y es mucho):** el problema es real, masivo, doloroso y medible; el timing es excelente; la información necesaria existe y nadie la integra; hay una cuña clara (moteros) desatendida y en crecimiento récord; y la IA hace posible hoy lo que antes requería un ejército.

**Las trampas a evitar:** (1) el "todo-en-uno" desde el día 1 — es la receta clásica del fracaso; (2) competir de frente con Waze en navegación — batalla perdida; (3) depender de masa crítica colaborativa para que el producto sirva — el MVP debe ser valioso con cero usuarios reportando.

**La recomendación estratégica:** lanzar como **el copiloto del motero bogotano** (brief IA + seguridad + clima + normas), ganar ese nicho, y desde ahí expandir por modos y ciudades. Si validamos retención en ese nicho, tenemos negocio; si no, habremos gastado poco en descubrirlo.

---

## 10. Estrategia recomendada y fases

| Fase | Alcance | Duración estimada |
|---|---|---|
| **0. Validación** | 30-50 entrevistas (moteros, conductores, taxistas), landing con lista de espera, demo navegable | Semanas 1-4 |
| **1. MVP** | Bogotá, **Modo Moto** (+ Carro): brief IA de salida, mapa de capas (tráfico, clima, riesgo, incidentes), alertas pico y placa, radar colaborativo básico. Sin turn-by-turn propio (deep-link a Waze/Google Maps) | Meses 1-4 |
| **2. Expansión de modos** | Taxi + piloto B2B con 1-2 flotas de carga/furgón; rutas seguras v2; primeros modelos predictivos propios | Meses 5-9 |
| **3. Transporte público y ciudad completa** | SITP/TransMilenio, bici, peatón; expansión a Medellín, Cali y Barranquilla (todas en el top mundial de congestión) | Meses 10-18 |
| **4. Región** | América Latina — la ciudad #1 más congestionada del mundo es Ciudad de México: el problema (y el producto) es regional | Año 2+ |

**Métricas de validación del MVP:** 1.000+ usuarios activos en comunidades moteras, retención D30 > 25%, ≥0,5 reportes por usuario activo/semana, apertura del brief diario > 40%, NPS > 40.

---

## 11. Próximos pasos (30 días)

1. **Semana 1:** alinear visión con el equipo (este documento). Definir hipótesis central a validar: *"el motero bogotano usará a diario un brief inteligente de salida"*.
2. **Semanas 1-2:** 30-50 entrevistas cortas con moteros, conductores y taxistas (guía de 10 preguntas; grupos de WhatsApp/Facebook y parches moteros como fuente).
3. **Semanas 2-3:** explorar los datasets reales (Datos Abiertos Bogotá/SIEDCO, IDEAM, SIMUR, APIs de tráfico) y confirmar viabilidad técnica y costos.
4. **Semanas 2-4:** **demo navegable** de la app (pantallas clave: brief de salida, mapa de capas, radar, modos) para mostrar y validar con usuarios reales.
5. **Semana 4:** landing page con lista de espera segmentada por modo (mide demanda real por segmento) + decisión **go/no-go** de la fase MVP con los datos de entrevistas y lista de espera.
6. **En paralelo:** definir nombre y marca (ver Anexo A) y verificar disponibilidad legal y de tiendas de apps.

---

## Anexo A — Nombre provisional (opciones para discutir)

| Opción | Racional |
|---|---|
| **Rumbo** | Corto, memorable, colombiano; "tener rumbo" = tener dirección y plan |
| **Atajo** | La promesa de valor en una palabra |
| **MovIA** | Movilidad + IA; comunica el diferenciador tecnológico |
| **Copiloto** | Describe exactamente el rol del producto |
| **Faro** | Te ilumina el camino; evoca seguridad |

*Pendiente: verificar disponibilidad de marca (SIC), dominio y nombres en App Store / Google Play.*

## Anexo B — Fuentes de datos públicas identificadas (viabilidad técnica)

- **Seguridad:** SIEDCO (Policía Nacional) vía Datos Abiertos Colombia y Datos Abiertos Bogotá — hurtos georreferenciados por localidad/UPZ; cifras de la Secretaría Distrital de Seguridad.
- **Movilidad:** SIMUR y Observatorio de Movilidad de Bogotá (siniestralidad, aforos, Encuesta de Movilidad); anuncios de @BogotaTransito y @SectorMovilidad en X.
- **Clima:** IDEAM + APIs comerciales (OpenWeather u similares) para nowcasting por zona.
- **Cartografía y rutas:** OpenStreetMap + motores open source (OSRM, Valhalla, GraphHopper) o Mapbox/Google con niveles de entrada.
- **Normativa:** calendarios oficiales de pico y placa, día sin carro y restricciones de carga (Secretaría de Movilidad).

## Fuentes citadas en este documento

1. [TomTom Traffic Index 2025 — Bogotá entre las ciudades con peor tráfico del mundo (Infobae, enero 2026)](https://www.infobae.com/colombia/2026/01/25/bogota-esta-entre-las-ciudades-con-peor-trafico-del-mundo-hay-otras-4-capitales-colombianas-en-el-ranking/)
2. [Colombianos perdieron 148 horas en trancones durante 2025 (Infobae, febrero 2026)](https://www.infobae.com/colombia/2026/02/21/colombianos-perdieron-148-horas-en-trancones-durante-2025-cuatro-ciudades-estan-entre-las-20-mas-congestionadas-del-mundo/)
3. [Cuatro ciudades colombianas entre las 10 más congestionadas por el tráfico en 2025 (Vanguardia)](https://www.vanguardia.com/colombia/2026/01/25/cuatro-ciudades-colombianas-entre-las-10-mas-congestionadas-por-el-trafico-en-2025/)
4. [INRIX 2025 Global Traffic Scorecard](https://inrix.com/scorecard/)
5. [Bogotá continúa tendencia de reducción de hurtos en lo corrido de 2026 (Alcaldía de Bogotá)](https://bogota.gov.co/mi-ciudad/seguridad/bogota-continua-tendencia-de-reduccion-de-hurtos-en-lo-corrido-de-2026)
6. [Hurtaron 7.556 celulares en Bogotá durante el segundo trimestre de 2025 (Concejo de Bogotá)](https://concejodebogota.gov.co/hurtaron-7-556-celulares-en-bogota-durante-el-segundo-trimestre-de-2025/cbogota/2025-07-11/114425.php)
7. [Aumentó el hurto de celulares en Bogotá: localidades más afectadas (Infobae, mayo 2026)](https://www.infobae.com/colombia/2026/05/05/aumento-el-hurto-de-celulares-en-bogota-y-cinco-localidades-presentan-cifras-preocupantes/)
8. [Siniestralidad vial en Bogotá: cifras y estrategias (Observatorio de Movilidad de Bogotá)](https://observatorio.movilidadbogota.gov.co/actualidad/siniestralidad-vial-en-bogota)
9. [En 2025 han muerto en promedio 14 motociclistas al día en Colombia (El Tiempo)](https://www.eltiempo.com/datos/en-2025-han-muerto-en-promedio-14-motociclistas-al-dia-en-accidentes-viales-en-colombia-3504939)
10. [Bogotá frenó la tendencia creciente de muertes por siniestros viales en 2025 (Alcaldía de Bogotá)](https://bogota.gov.co/mi-ciudad/movilidad/bogota-freno-tendencia-de-muertes-por-accidentes-viales-en-2025)
11. [En Bogotá el 70% de los viajes diarios se realizan en modos sostenibles — Encuesta de Movilidad (Secretaría Distrital de Movilidad)](https://www.movilidadbogota.gov.co/en-bogota-el-70-de-los-viajes-diarios-se-realizan-en-modos-sostenibles-segun-encuesta-de-movilidad)
12. [Bogotanos pierden más tiempo en desplazamientos diarios: trayectos de hasta dos horas (Infobae, mayo 2026)](https://www.infobae.com/colombia/2026/05/24/ahora-los-bogotanos-pierden-mas-tiempo-en-desplazamientos-diarios-encuesta-revela-trayectos-de-hasta-dos-horas/)
13. [Pico y placa en Bogotá — particulares y taxis (Alcaldía de Bogotá, julio 2026)](https://bogota.gov.co/mi-ciudad/habitat/pico-y-placa-en-bogota-martes-28-de-julio-de-2026-particulares-y-taxis)
14. [2025 cerró con más de 1,1 millones de motos registradas en Colombia (El Colombiano)](https://www.elcolombiano.com/negocios/bajaj-akt-suzuki-lideraron-ventas-motos-colombia-2025-DC32219578)
15. [Motos ponen 62-63% del parque automotor y sus ventas crecen (La República)](https://www.larepublica.co/empresas/motos-ponen-63-del-parque-automotor-y-sus-ventas-crecen-37-en-promedio-4259649)
16. [Julio 2025: récord histórico en ventas de motos en Colombia (Revista Motor)](https://www.motor.com.co/seccion/industria/julio-2025-record-historico-en-ventas-de-motos-en-colombia_20341)
17. [5 aplicaciones para movilizarse por Bogotá (Xataka Colombia)](https://www.xataka.com.co/aplicaciones/5-aplicaciones-para-movilizarse-por-bogota)
18. [Choro Alerta: la app gratuita para reportar robos en Bogotá (El Espectador)](https://www.elespectador.com/bogota/choro-alerta-la-app-gratuita-para-reportar-robos-en-bogota/)
19. [BATTU — App de seguridad ciudadana](https://battuapp.com/)

---

*Documento de trabajo interno. Cifras con corte a las fuentes citadas (2025 — mediados de 2026); actualizar antes de presentaciones externas.*
