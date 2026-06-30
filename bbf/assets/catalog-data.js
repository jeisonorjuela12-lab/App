/* ============================================================================
   BBF · Catálogo 2026  (BETA)
   ----------------------------------------------------------------------------
   Reconstruido a partir de las fotos reales en assets/catalog-imgs/.
   Los PRECIOS son SUGERIDOS, basados en los rangos del manual de marca:
     · Modelos a escala  $65.000 – $95.000
     · Joyería (anillos, collares, pulseras, topos)  $18.000 – $35.000
     · Pines  $10.000 – $20.000
     · Llaveros  $15.000 – $20.000
     · Bag tags  $15.000 – $20.000
     · Accesorios (mancornas, lanyards)  $20.000 – $30.000
   >>> Ajusta libremente price/priceLabel, stock y variantes. <<<
   ============================================================================ */
window.BBF_CATEGORIES = [
  { id:'aviones',   label:'Aviones a escala',    tagline:'Para coleccionar el cielo' },
  { id:'anillos',   label:'Anillos',             tagline:'Pequeñas insignias' },
  { id:'collares',  label:'Collares y cadenas',  tagline:'Llevarlo siempre cerca' },
  { id:'pulseras',  label:'Pulseras y manillas', tagline:'Aviación en la muñeca' },
  { id:'topos',     label:'Topos',               tagline:'Detalles silenciosos' },
  { id:'mancornas', label:'Mancornas',           tagline:'Elegancia de cabina' },
  { id:'pins',      label:'Pins',                tagline:'Insignias de pertenencia' },
  { id:'llaveros',  label:'Llaveros',            tagline:'Acompañantes de viaje' },
  { id:'bagtags',   label:'Bag tags',            tagline:'Identifica tu equipaje' },
  { id:'lanyards',  label:'Lanyards',            tagline:'Tu tripulación, a la vista' },
];

window.BBF_CATALOG = [
  /* ---------------- AVIONES A ESCALA ---------------- */
  { id:'AV-A320-LATAM', cat:'aviones', sku:'BBF-AV01', name:'A320 · LATAM', price:65000, priceLabel:'$ 65.000', variants:12, stock:9,
    blurb:'Réplica a escala del Airbus A320 en librea LATAM, con base de exhibición. Detalle fiel para coleccionar el cielo.',
    img:'assets/catalog-imgs/p04-0.png' },
  { id:'AV-A380-ETIHAD', cat:'aviones', sku:'BBF-AV02', name:'A380 · Etihad', price:95000, priceLabel:'$ 95.000', variants:6, stock:5,
    blurb:'El gigante de los cielos: Airbus A380 en librea Etihad. Pieza de colección con presencia en cualquier vitrina.',
    img:'assets/catalog-imgs/p04-1.png' },
  { id:'AV-B757-UNITED', cat:'aviones', sku:'BBF-AV03', name:'Boeing · United', price:75000, priceLabel:'$ 75.000', variants:8, stock:7,
    blurb:'Boeing en librea United, escala fiel y soporte incluido. Para quien colecciona aviación comercial.',
    img:'assets/catalog-imgs/p04-2.png' },
  { id:'AV-B747-LH', cat:'aviones', sku:'BBF-AV04', name:'Boeing 747 · Lufthansa', price:85000, priceLabel:'$ 85.000', variants:6, stock:4,
    blurb:'El icónico jumbo 747 en librea Lufthansa. Réplica de colección, detalle premium.',
    img:'assets/catalog-imgs/p04-3.png' },
  { id:'AV-B777-KLM', cat:'aviones', sku:'BBF-AV05', name:'Boeing 777 · KLM', price:85000, priceLabel:'$ 85.000', variants:6, stock:6,
    blurb:'Boeing 777 en el azul KLM. Escala fiel a la realidad, ideal para vitrina o regalo.',
    img:'assets/catalog-imgs/p05-0.png' },
  { id:'AV-B787-TK', cat:'aviones', sku:'BBF-AV06', name:'Boeing 787 · Turkish', price:80000, priceLabel:'$ 80.000', variants:6, stock:8,
    blurb:'Dreamliner 787 en librea Turkish Airlines. Líneas limpias, acabado de colección.',
    img:'assets/catalog-imgs/p05-1.png' },

  /* ---------------- ANILLOS ---------------- */
  { id:'AN-PLATA', cat:'anillos', sku:'BBF-AN01', name:'Anillo Avión · Plata', price:24000, priceLabel:'$ 24.000', variants:0, stock:12,
    blurb:'Anillo con avión en acabado plata. Una insignia discreta para llevar la aviación todos los días.',
    img:'assets/catalog-imgs/p07-0.png' },
  { id:'AN-ORO', cat:'anillos', sku:'BBF-AN02', name:'Anillo Avión · Oro', price:26000, priceLabel:'$ 26.000', variants:0, stock:10,
    blurb:'Anillo ajustable con avión en dorado. Detalle preciso, brillo sobrio. Talla única.',
    img:'assets/catalog-imgs/p07-1.png' },
  { id:'AN-ALAS-ORO', cat:'anillos', sku:'BBF-AN03', name:'Anillo Alas · Oro', price:28000, priceLabel:'$ 28.000', variants:0, stock:7,
    blurb:'Anillo con alas extendidas en dorado: el gesto del despegue, hecho joya. Ajustable.',
    img:'assets/catalog-imgs/p07-2.png' },
  { id:'AN-AVION-PLATA2', cat:'anillos', sku:'BBF-AN04', name:'Anillo Jet · Plata', price:24000, priceLabel:'$ 24.000', variants:0, stock:9,
    blurb:'Anillo con jet en plata, líneas finas y acabado pulido. Pequeña insignia de pertenencia.',
    img:'assets/catalog-imgs/p07-3.png' },

  /* ---------------- COLLARES Y CADENAS ---------------- */
  { id:'CO-ORO-JET', cat:'collares', sku:'BBF-CO01', name:'Collar Jet · Oro', price:35000, priceLabel:'$ 35.000', variants:0, stock:8,
    blurb:'Cadena dorada con dije de avión. Lo llevas siempre cerca, a la altura del corazón.',
    img:'assets/catalog-imgs/p09-0.png' },
  { id:'CO-PLATA-MINI', cat:'collares', sku:'BBF-CO02', name:'Collar Avión Mini · Plata', price:28000, priceLabel:'$ 28.000', variants:0, stock:11,
    blurb:'Cadena fina en plata con avión pequeño. Delicado, para el día a día.',
    img:'assets/catalog-imgs/p09-1.png' },
  { id:'CO-PLATA-JET', cat:'collares', sku:'BBF-CO03', name:'Collar Jet · Plata', price:30000, priceLabel:'$ 30.000', variants:0, stock:6,
    blurb:'Collar en plata con dije de avión. Brillo discreto, presencia constante.',
    img:'assets/catalog-imgs/p09-2.png' },
  { id:'CO-PLATA-AVION', cat:'collares', sku:'BBF-CO04', name:'Collar Avión · Plata', price:30000, priceLabel:'$ 30.000', variants:0, stock:7,
    blurb:'Cadena plateada con avión de perfil. Una ruta silenciosa colgada al cuello.',
    img:'assets/catalog-imgs/p09-3.png' },
  { id:'CO-PLATA-FINO', cat:'collares', sku:'BBF-CO05', name:'Collar Avión Fino · Plata', price:28000, priceLabel:'$ 28.000', variants:0, stock:10,
    blurb:'Cadena fina en plata con avión minimal. Ligero, elegante, para siempre.',
    img:'assets/catalog-imgs/p10-0.png' },
  { id:'CO-ORO-GRANDE', cat:'collares', sku:'BBF-CO06', name:'Collar Jet Grande · Oro', price:35000, priceLabel:'$ 35.000', variants:0, stock:3,
    blurb:'Dije de avión grande en dorado sobre cadena. Una declaración: pertenezco al mundo de volar.',
    img:'assets/catalog-imgs/p10-1.png' },

  /* ---------------- PULSERAS Y MANILLAS ---------------- */
  { id:'PU-TURQUESA', cat:'pulseras', sku:'BBF-PU01', name:'Pulsera Cuero · Turquesa', price:22000, priceLabel:'$ 22.000', variants:0, stock:9,
    blurb:'Manilla de cuero turquesa con avión metálico. Color que despega, para la muñeca.',
    img:'assets/catalog-imgs/p12-0.png' },
  { id:'PU-ORO-AJUST', cat:'pulseras', sku:'BBF-PU02', name:'Pulsera Avión · Oro', price:28000, priceLabel:'$ 28.000', variants:0, stock:8,
    blurb:'Pulsera dorada ajustable con avión. Cierre corredizo, talla universal. Aviación en la muñeca.',
    img:'assets/catalog-imgs/p12-1.png' },
  { id:'PU-ORO-AJUST2', cat:'pulseras', sku:'BBF-PU03', name:'Pulsera Jet · Oro', price:28000, priceLabel:'$ 28.000', variants:0, stock:7,
    blurb:'Manilla dorada ajustable con jet central. Brillo sobrio, elegante de cabina.',
    img:'assets/catalog-imgs/p12-2.png' },
  { id:'PU-BLANCA', cat:'pulseras', sku:'BBF-PU04', name:'Pulsera Cuerda · Blanca', price:22000, priceLabel:'$ 22.000', variants:0, stock:10,
    blurb:'Pulsera de cuerda blanca con avión dorado ajustable. Fresca y liviana para volar ligero.',
    img:'assets/catalog-imgs/p12-3.png' },
  { id:'PU-CUENTAS', cat:'pulseras', sku:'BBF-PU05', name:'Pulsera Cuentas · Avión', price:25000, priceLabel:'$ 25.000', variants:0, stock:6,
    blurb:'Pulsera de cuentas con avión dorado. Textura natural, detalle aeronáutico.',
    img:'assets/catalog-imgs/p13-0.png' },
  { id:'PU-MADERA', cat:'pulseras', sku:'BBF-PU06', name:'Pulsera Madera · Avión', price:25000, priceLabel:'$ 25.000', variants:0, stock:8,
    blurb:'Pulsera de cuentas de madera con avión dorado. Cálida y con carácter, lista para el viaje.',
    img:'assets/catalog-imgs/p13-1.png' },

  /* ---------------- TOPOS ---------------- */
  { id:'TO-AVION', cat:'topos', sku:'BBF-TO01', name:'Topos Avión', price:18000, priceLabel:'$ 18.000', variants:2, stock:12,
    blurb:'Par de topos con avión, en oro o plata. Detalles silenciosos que dicen mucho.',
    img:'assets/catalog-imgs/p15-0.png' },

  /* ---------------- MANCORNAS ---------------- */
  { id:'MA-AVION', cat:'mancornas', sku:'BBF-MA01', name:'Mancornas Avión', price:30000, priceLabel:'$ 30.000', variants:0, stock:6,
    blurb:'Mancuernas con avión: elegancia de cabina para el puño. El regalo perfecto para aviation lovers.',
    img:'assets/catalog-imgs/p17-0.png' },

  /* ---------------- PINS ---------------- */
  { id:'PI-ORO-A320', cat:'pins', sku:'BBF-PI01', name:'Pin A320 · Oro', price:12000, priceLabel:'$ 12.000', variants:0, stock:24,
    blurb:'Pin del Airbus A320 en dorado, cierre de mariposa. El héroe de la colección, insignia de pertenencia.',
    img:'assets/catalog-imgs/p19-0.png' },
  { id:'PI-PLATA-HIDRO', cat:'pins', sku:'BBF-PI02', name:'Pin Hidroavión · Plata', price:12000, priceLabel:'$ 12.000', variants:0, stock:18,
    blurb:'Pin de hidroavión clásico en plata. Detalle vintage para la solapa.',
    img:'assets/catalog-imgs/p19-1.png' },
  { id:'PI-PLATA-JET', cat:'pins', sku:'BBF-PI03', name:'Pin Jet · Plata', price:12000, priceLabel:'$ 12.000', variants:0, stock:20,
    blurb:'Pin de jet comercial en plata, líneas limpias. Cierre de mariposa.',
    img:'assets/catalog-imgs/p19-2.png' },
  { id:'PI-PLATA-COM', cat:'pins', sku:'BBF-PI04', name:'Pin Avión Comercial · Plata', price:12000, priceLabel:'$ 12.000', variants:0, stock:16,
    blurb:'Pin de avión comercial en plata. Clásico, sobrio, infaltable.',
    img:'assets/catalog-imgs/p19-3.png' },
  { id:'PI-ORO-COM', cat:'pins', sku:'BBF-PI05', name:'Pin Avión Comercial · Oro', price:14000, priceLabel:'$ 14.000', variants:0, stock:15,
    blurb:'Pin de avión comercial en dorado. El brillo justo para la solapa.',
    img:'assets/catalog-imgs/p20-0.png' },
  { id:'PI-PROP', cat:'pins', sku:'BBF-PI06', name:'Pin Avión Hélice · Plata', price:12000, priceLabel:'$ 12.000', variants:0, stock:14,
    blurb:'Pin de avión de hélice, estética retro en plata. Para los amantes de la aviación clásica.',
    img:'assets/catalog-imgs/p20-1.png' },
  { id:'PI-DECO', cat:'pins', sku:'BBF-PI07', name:'Pin Avión Edición · Oro', price:16000, priceLabel:'$ 16.000', variants:0, stock:2,
    blurb:'Pin de avión en dorado con detalle especial. Edición limitada — últimas unidades.',
    img:'assets/catalog-imgs/p20-2.png' },
  { id:'PI-BANDERAS', cat:'pins', sku:'BBF-PI08', name:'Set Pines Banderas', price:20000, priceLabel:'$ 20.000', variants:6, stock:9,
    blurb:'Set de pines de banderas latinoamericanas. Lleva tu ruta y tu origen en la solapa.',
    img:'assets/catalog-imgs/p20-3.png' },
  { id:'PI-ROJO', cat:'pins', sku:'BBF-PI09', name:'Pin Avión Líneas · Rojo', price:14000, priceLabel:'$ 14.000', variants:0, stock:11,
    blurb:'Pin de avión comercial con líneas en rojo. Un acento de color para tu insignia.',
    img:'assets/catalog-imgs/p21-0.png' },

  /* ---------------- LLAVEROS ---------------- */
  { id:'LL-PLATA', cat:'llaveros', sku:'BBF-LL01', name:'Llavero Avión · Plata', price:18000, priceLabel:'$ 18.000', variants:0, stock:12,
    blurb:'Llavero de avión metálico en plata. Acompañante de viaje, resistente y elegante.',
    img:'assets/catalog-imgs/p23-0.png' },
  { id:'LL-JET', cat:'llaveros', sku:'BBF-LL02', name:'Llavero Jet · Plata', price:18000, priceLabel:'$ 18.000', variants:0, stock:10,
    blurb:'Llavero de jet en plata con argolla reforzada. Tu pasión, siempre en el bolsillo.',
    img:'assets/catalog-imgs/p23-1.png' },
  { id:'LL-FLIGHTCREW-1', cat:'llaveros', sku:'BBF-LL03', name:'Llavero "Flight Crew"', price:15000, priceLabel:'$ 15.000', variants:0, stock:20,
    blurb:'Llavero bordado "FLIGHT CREW" con galones dorados. Para la tripulación que lo vive.',
    img:'assets/catalog-imgs/p23-2.png' },
  { id:'LL-FLIGHTCREW-2', cat:'llaveros', sku:'BBF-LL04', name:'Llavero "Flight Crew" · Negro', price:15000, priceLabel:'$ 15.000', variants:0, stock:18,
    blurb:'Llavero textil "FLIGHT CREW" en negro y dorado. Resistente, identitario.',
    img:'assets/catalog-imgs/p23-3.png' },
  { id:'LL-FLYSAFE', cat:'llaveros', sku:'BBF-LL05', name:'Llavero "Fly Safe"', price:16000, priceLabel:'$ 16.000', variants:0, stock:9,
    blurb:'Llavero con avión y mensaje "fly safe". Un buen deseo para cada despegue.',
    img:'assets/catalog-imgs/p24-0.png' },
  { id:'LL-RBF-ROSA', cat:'llaveros', sku:'BBF-LL06', name:'Llavero "Remove Before Flight" · Rosa', price:15000, priceLabel:'$ 15.000', variants:0, stock:14,
    blurb:'El clásico banderín "Remove Before Flight" en rosa. Un código real, hecho llavero.',
    img:'assets/catalog-imgs/p24-1.png' },
  { id:'LL-RBF-ROJO', cat:'llaveros', sku:'BBF-LL07', name:'Llavero "Remove Before Flight" · Rojo', price:15000, priceLabel:'$ 15.000', variants:0, stock:16,
    blurb:'El icónico banderín rojo "Remove Before Flight". El sello del gremio aeronáutico.',
    img:'assets/catalog-imgs/p24-2.png' },
  { id:'LL-CUERO', cat:'llaveros', sku:'BBF-LL08', name:'Llavero Cuero Premium', price:20000, priceLabel:'$ 20.000', variants:0, stock:7,
    blurb:'Llavero de cuero premium con dijes de aviación. Tacto noble que envejece bien.',
    img:'assets/catalog-imgs/p24-3.png' },
  { id:'LL-RBF-VERDE', cat:'llaveros', sku:'BBF-LL09', name:'Llavero "Remove Before Flight" · Verde', price:15000, priceLabel:'$ 15.000', variants:0, stock:12,
    blurb:'Banderín "Remove Before Flight" en verde con avión metálico. Código real, estilo BBF.',
    img:'assets/catalog-imgs/p25-0.png' },

  /* ---------------- BAG TAGS ---------------- */
  { id:'BT-AZUL', cat:'bagtags', sku:'BBF-BT01', name:'Bag Tag Avión · Azul', price:20000, priceLabel:'$ 20.000', variants:0, stock:10,
    blurb:'Bag tag azul con avión. Identifica tu equipaje con estilo, desde la banda hasta el destino.',
    img:'assets/catalog-imgs/p27-0.png' },
  { id:'BT-KEEPCALM', cat:'bagtags', sku:'BBF-BT02', name:'Bag Tag "Keep Calm & Travel On"', price:18000, priceLabel:'$ 18.000', variants:0, stock:11,
    blurb:'Bag tag "KEEP CALM AND TRAVEL ON" en turquesa. Personalidad para tu maleta.',
    img:'assets/catalog-imgs/p27-1.png' },

  /* ---------------- LANYARDS ---------------- */
  { id:'LA-AVIANCA', cat:'lanyards', sku:'BBF-LA01', name:'Lanyard · Avianca', price:20000, priceLabel:'$ 20.000', variants:0, stock:9,
    blurb:'Lanyard de aerolínea en rojo. Lleva tu carné y tu tripulación a la vista.',
    img:'assets/catalog-imgs/p29-0.png' },
  { id:'LA-LUFTHANSA', cat:'lanyards', sku:'BBF-LA02', name:'Lanyard · Lufthansa', price:20000, priceLabel:'$ 20.000', variants:0, stock:8,
    blurb:'Lanyard de aerolínea en amarillo Lufthansa. Resistente, identitario, para el día a día.',
    img:'assets/catalog-imgs/p29-1.png' },
];
