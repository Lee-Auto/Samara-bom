/**
 * bom-data.js — Motor de Reglas BOM · Samara Backyard
 * Alfa Omega Automatizaciones — Demo v1.0
 *
 * Estructura de datos: cada ítem tiene:
 *   sku   — código único del material
 *   desc  — descripción legible
 *   qty   — cantidad (puede ser función del modelo)
 *   unit  — unidad de medida
 *   tag   — 'base' | 'opt' | 'addon'
 */

// ─────────────────────────────────────────────
// CATÁLOGO BASE (compartido por todos los modelos)
// ─────────────────────────────────────────────

const CATALOG = {

  // ── ESTRUCTURA ──
  EST001: { desc: "Panel de pared estructural SIP 4.5\"",          unit: "panel",  tag: "base" },
  EST002: { desc: "Panel de techo estructural SIP 6.5\"",          unit: "panel",  tag: "base" },
  EST003: { desc: "Viga de acero laminado W6x15",                   unit: "ml",     tag: "base" },
  EST004: { desc: "Columna acero HSS 4x4x0.25\"",                   unit: "pieza",  tag: "base" },
  EST005: { desc: "Placa base anclaje hilti M16",                   unit: "pieza",  tag: "base" },
  EST006: { desc: "Perno de anclaje epóxico 5/8\" x 6\"",           unit: "pieza",  tag: "base" },
  EST007: { desc: "Conector joist hanger LUS26",                    unit: "pieza",  tag: "base" },

  // ── CERRAMIENTO EXTERIOR ──
  EXT001: { desc: "Panel fachada fibrocemento Hardie 8.25\"",       unit: "m²",     tag: "base" },
  EXT002: { desc: "Membrana impermeabilizante Tyvek HomeWrap",      unit: "m²",     tag: "base" },
  EXT003: { desc: "Ventana fija aluminio 48x60\"",                  unit: "pieza",  tag: "base" },
  EXT004: { desc: "Ventana abatible aluminio 36x48\"",              unit: "pieza",  tag: "base" },
  EXT005: { desc: "Puerta principal aluminio + vidrio 36x80\"",     unit: "pieza",  tag: "base" },
  EXT006: { desc: "Puerta corredera vidrio templado 72x80\"",       unit: "pieza",  tag: "base" },
  EXT007: { desc: "Sellador de juntas poliuretano 300ml",           unit: "cartucho", tag: "base" },
  EXT008: { desc: "Tornillo autoperforante TEK 1\" (caja 250)",     unit: "caja",   tag: "base" },

  // ── CUBIERTA ──
  CUB001: { desc: "Membrana cubierta EPDM 1.5mm",                   unit: "m²",     tag: "base" },
  CUB002: { desc: "Aislante EPS cubierta R-30",                     unit: "m²",     tag: "base" },
  CUB003: { desc: "Canalón aluminio 4\"",                           unit: "ml",     tag: "base" },
  CUB004: { desc: "Bajante PVC 3\"",                                unit: "ml",     tag: "base" },
  CUB005: { desc: "Flashing aluminio cumbrero",                     unit: "ml",     tag: "base" },

  // ── ACABADO INTERIOR — LIGHT ──
  INTL001: { desc: "Tablero MDF enchapado roble blanqueado 18mm",   unit: "m²",     tag: "opt" },
  INTL002: { desc: "Pintura látex blanco cálido (5 gal)",           unit: "cubeta",  tag: "opt" },
  INTL003: { desc: "Gabinete cocina madera clara inferior",         unit: "pieza",  tag: "opt" },
  INTL004: { desc: "Gabinete cocina madera clara superior",         unit: "pieza",  tag: "opt" },
  INTL005: { desc: "Cubierta cocina cuarzo blanco 3cm",             unit: "m²",     tag: "opt" },

  // ── ACABADO INTERIOR — DARK ──
  INTD001: { desc: "Tablero MDF enchapado nogal oscuro 18mm",       unit: "m²",     tag: "opt" },
  INTD002: { desc: "Pintura látex gris carbón (5 gal)",             unit: "cubeta",  tag: "opt" },
  INTD003: { desc: "Gabinete cocina madera oscura inferior",        unit: "pieza",  tag: "opt" },
  INTD004: { desc: "Gabinete cocina madera oscura superior",        unit: "pieza",  tag: "opt" },
  INTD005: { desc: "Cubierta cocina cuarzo negro Marquina 3cm",     unit: "m²",     tag: "opt" },

  // ── PISO — HARDWOOD ──
  FLRH001: { desc: "Duela madera roble europeo 5\" x 3/4\"",        unit: "m²",     tag: "opt" },
  FLRH002: { desc: "Adhesivo piso madera Bostik Best",              unit: "cubeta",  tag: "opt" },
  FLRH003: { desc: "Rodapié madera roble 3.5\"",                    unit: "ml",     tag: "opt" },

  // ── PISO — TILE ──
  FLRT001: { desc: "Porcelanato rectificado 60x120 cm formato large", unit: "m²",   tag: "opt" },
  FLRT002: { desc: "Pegamento cerámica Weber.col premium",           unit: "saco",   tag: "opt" },
  FLRT003: { desc: "Junta cerámica Kerakoll 2mm",                   unit: "saco",   tag: "opt" },
  FLRT004: { desc: "Perfil aluminio borde de piso",                 unit: "ml",     tag: "opt" },

  // ── PISO — CONCRETE ──
  FLRC001: { desc: "Concreto pulido autonivelante 5cm",              unit: "m²",     tag: "opt" },
  FLRC002: { desc: "Sellador concreto poliuretano 2 componentes",    unit: "cubeta",  tag: "opt" },
  FLRC003: { desc: "Malla de refuerzo electrosoldada 15x15 cm",      unit: "m²",     tag: "opt" },

  // ── COLOR EXTERIOR — efectos en materiales ──
  EXTF001: { desc: "Pintura fibrocemento Bone White (5 gal)",       unit: "cubeta",  tag: "opt" },
  EXTF002: { desc: "Pintura fibrocemento Charcoal (5 gal)",         unit: "cubeta",  tag: "opt" },
  EXTF003: { desc: "Pintura fibrocemento Sage (5 gal)",             unit: "cubeta",  tag: "opt" },
  EXTF004: { desc: "Pintura fibrocemento Sand (5 gal)",             unit: "cubeta",  tag: "opt" },
  EXTF005: { desc: "Pintura fibrocemento Slate (5 gal)",            unit: "cubeta",  tag: "opt" },

  // ── MEP (Mecánico-Eléctrico-Plomería) ──
  MEP001:  { desc: "Tablero eléctrico 200A main breaker",           unit: "pieza",  tag: "base" },
  MEP002:  { desc: "Breaker bipolar 20A Square D",                  unit: "pieza",  tag: "base" },
  MEP003:  { desc: "Breaker GFCI 20A",                              unit: "pieza",  tag: "base" },
  MEP004:  { desc: "Cable THW calibre 12 AWG (rollo 100m)",         unit: "rollo",  tag: "base" },
  MEP005:  { desc: "Cable THW calibre 10 AWG (rollo 100m)",         unit: "rollo",  tag: "base" },
  MEP006:  { desc: "Conduit EMT 3/4\" (barra 3m)",                  unit: "barra",  tag: "base" },
  MEP007:  { desc: "Contacto doble GFCI 15A",                       unit: "pieza",  tag: "base" },
  MEP008:  { desc: "Interruptor de luz 15A",                        unit: "pieza",  tag: "base" },
  MEP009:  { desc: "Luminaria LED empotrada 6\" 12W",               unit: "pieza",  tag: "base" },
  MEP010:  { desc: "Mini-split inverter 12,000 BTU",                unit: "equipo", tag: "base" },
  MEP011:  { desc: "Termostato digital básico",                     unit: "pieza",  tag: "base" },
  MEP012:  { desc: "Tubo cobre tipo L 1/2\"",                       unit: "ml",     tag: "base" },
  MEP013:  { desc: "Tubo PVC hidráulico 3/4\"",                     unit: "ml",     tag: "base" },
  MEP014:  { desc: "Tubo PVC sanitario 4\"",                        unit: "ml",     tag: "base" },
  MEP015:  { desc: "Trampa P inodoro",                              unit: "pieza",  tag: "base" },
  MEP016:  { desc: "Calentador agua tankless 6 GPM",                unit: "equipo", tag: "base" },
  MEP017:  { desc: "Válvula de cierre angular 1/2\"",               unit: "pieza",  tag: "base" },

  // ── BAÑO ──
  BATH001: { desc: "Inodoro dual-flush elongado",                   unit: "pieza",  tag: "base" },
  BATH002: { desc: "Lavabo porcelana integrado 18x21\"",            unit: "pieza",  tag: "base" },
  BATH003: { desc: "Regadera lluvia 10\" + control termostático",   unit: "kit",    tag: "base" },
  BATH004: { desc: "Mueble vanity 24\" con espejo integrado",       unit: "pieza",  tag: "base" },
  BATH005: { desc: "Azulejo baño 30x60 formato brick",              unit: "m²",     tag: "base" },
  BATH006: { desc: "Mampara de baño vidrio templado 6mm",           unit:"pieza",  tag: "base" },

  // ── COCINA ──
  KIT001:  { desc: "Fregadero acero inoxidable 32\" doble tina",    unit: "pieza",  tag: "base" },
  KIT002:  { desc: "Grifería cocina monocontrol cromo",             unit: "pieza",  tag: "base" },
  KIT003:  { desc: "Estufa 30\" 4 quemadores gas",                  unit: "pieza",  tag: "base" },
  KIT004:  { desc: "Refrigerador 18 pies (entrega directa)",        unit: "pieza",  tag: "base" },
  KIT005:  { desc: "Horno de microondas 1.6 ft³ integrable",        unit: "pieza",  tag: "base" },
  KIT006:  { desc: "Lavavajillas 24\" integrable",                  unit: "pieza",  tag: "base" },

  // ── ADD-ONS ──
  DECK001: { desc: "Duela deck madera tratada IPE 4\" x 1\"",       unit: "m²",     tag: "addon" },
  DECK002: { desc: "Estructura deck acero galvanizado 2x4",         unit: "ml",     tag: "addon" },
  DECK003: { desc: "Barandal deck aluminio + cable 42\"",           unit: "ml",     tag: "addon" },
  DECK004: { desc: "Perno deck lag 3/8\" x 4\" (caja 50)",          unit: "caja",   tag: "addon" },
  DECK005: { desc: "Sellador deck exterior (gal)",                  unit: "galón",  tag: "addon" },

  AWN001:  { desc: "Toldo retráctil aluminio 3.5m",                 unit: "pieza",  tag: "addon" },
  AWN002:  { desc: "Motor toldo 45Nm con control remoto",           unit: "pieza",  tag: "addon" },
  AWN003:  { desc: "Tela toldo acrílica UV400 (por ml)",            unit: "ml",     tag: "addon" },
  AWN004:  { desc: "Soporte mural anclaje toldo",                   unit: "pieza",  tag: "addon" },

  SOL001:  { desc: "Panel solar monocristalino 400W",               unit: "pieza",  tag: "addon" },
  SOL002:  { desc: "Microinversor Enphase IQ8+",                    unit: "pieza",  tag: "addon" },
  SOL003:  { desc: "Riel montaje solar aluminio 3.4m",              unit: "pieza",  tag: "addon" },
  SOL004:  { desc: "Cable solar 10 AWG (rollo 30m)",                unit: "rollo",  tag: "addon" },
  SOL005:  { desc: "Batería almacenamiento 10kWh LFP",              unit: "pieza",  tag: "addon" },
  SOL006:  { desc: "Gateway monitoreo energía Enphase",             unit: "pieza",  tag: "addon" },

  STAIR001:{ desc: "Escalera exterior acero galvanizado 3 peldaños",unit: "kit",    tag: "addon" },
  STAIR002:{ desc: "Pasamano tubo redondo 2\" galvanizado",         unit: "ml",     tag: "addon" },
  STAIR003:{ desc: "Peldaño antiderrapante aluminio extruido",      unit: "pieza",  tag: "addon" },
  STAIR004:{ desc: "Placa anclaje escalera 6x6\" acero A36",        unit: "pieza",  tag: "addon" },

  SMT001:  { desc: "Termostato inteligente Ecobee SmartThermostat", unit: "pieza",  tag: "addon" },
  SMT002:  { desc: "Cerradura smart Schlage Encode WiFi",           unit: "pieza",  tag: "addon" },
  SMT003:  { desc: "Hub smart home Hubitat Elevation",              unit: "pieza",  tag: "addon" },
  SMT004:  { desc: "Sensor movimiento/entrada inalámbrico",         unit: "pieza",  tag: "addon" },
  SMT005:  { desc: "Switch Wi-Fi para iluminación (4 pack)",        unit: "pack",   tag: "addon" },
};

// ─────────────────────────────────────────────
// CANTIDADES POR MODELO
// Los valores son multiplicadores por área o
// cantidades absolutas según el modelo.
// ─────────────────────────────────────────────

const MODEL_DATA = {
  studio:  { ft2: 420,  panels_wall: 18, panels_roof: 10, vigas: 24, cols: 4,  bolts_anch: 16, joist: 20, ext_m2: 72,  roof_m2: 48,  win_fix: 2, win_ab: 1, bathrooms: 1, min_splits: 1, cab_low: 3, cab_up: 3, floor_m2: 42  },
  onebed:  { ft2: 540,  panels_wall: 22, panels_roof: 12, vigas: 28, cols: 6,  bolts_anch: 20, joist: 24, ext_m2: 88,  roof_m2: 56,  win_fix: 3, win_ab: 2, bathrooms: 1, min_splits: 1, cab_low: 4, cab_up: 4, floor_m2: 52  },
  twobed:  { ft2: 690,  panels_wall: 28, panels_roof: 15, vigas: 36, cols: 8,  bolts_anch: 24, joist: 30, ext_m2: 108, roof_m2: 70,  win_fix: 4, win_ab: 2, bathrooms: 1, min_splits: 2, cab_low: 5, cab_up: 5, floor_m2: 66  },
  xl8:     { ft2: 800,  panels_wall: 34, panels_roof: 18, vigas: 44, cols: 10, bolts_anch: 28, joist: 36, ext_m2: 126, roof_m2: 82,  win_fix: 5, win_ab: 3, bathrooms: 2, min_splits: 2, cab_low: 6, cab_up: 6, floor_m2: 77  },
  xl10:    { ft2: 950,  panels_wall: 40, panels_roof: 22, vigas: 52, cols: 12, bolts_anch: 32, joist: 42, ext_m2: 148, roof_m2: 96,  win_fix: 6, win_ab: 4, bathrooms: 2, min_splits: 2, cab_low: 7, cab_up: 8, floor_m2: 92  },
};

const PAINT_SKUS = {
  bonewhite: 'EXTF001', charcoal: 'EXTF002', sage: 'EXTF003', sand: 'EXTF004', slate: 'EXTF005'
};

// ─────────────────────────────────────────────
// MOTOR DE REGLAS — buildBOM(state)
// Devuelve array de { category, items[] }
// ─────────────────────────────────────────────

function buildBOM(state) {
  const m = MODEL_DATA[state.model];

  const item = (sku, qty) => ({
    sku,
    desc: CATALOG[sku].desc,
    qty,
    unit: CATALOG[sku].unit,
    tag:  CATALOG[sku].tag,
  });

  const sections = [];

  // ── 1. ESTRUCTURA ──
  sections.push({
    category: "Estructura",
    items: [
      item('EST001', m.panels_wall),
      item('EST002', m.panels_roof),
      item('EST003', m.vigas),
      item('EST004', m.cols),
      item('EST005', m.cols),
      item('EST006', m.bolts_anch),
      item('EST007', m.joist),
    ]
  });

  // ── 2. CERRAMIENTO EXTERIOR ──
  const paintCubetas = Math.ceil(m.ext_m2 / 45);
  const extItems = [
    item('EXT001', m.ext_m2),
    item('EXT002', m.ext_m2),
    item('EXT003', m.win_fix),
    item('EXT004', m.win_ab),
    item('EXT005', 1),
    item('EXT006', state.model === 'twobed' || state.model === 'xl8' || state.model === 'xl10' ? 2 : 1),
    item('EXT007', Math.ceil(m.ext_m2 / 8)),
    item('EXT008', Math.ceil(m.ext_m2 / 4)),
    item(PAINT_SKUS[state.exterior], paintCubetas),
  ];
  sections.push({ category: "Cerramiento Exterior", items: extItems });

  // ── 3. CUBIERTA ──
  sections.push({
    category: "Cubierta / Techo",
    items: [
      item('CUB001', m.roof_m2),
      item('CUB002', m.roof_m2),
      item('CUB003', Math.ceil(m.ft2 * 0.012)),
      item('CUB004', Math.ceil(m.ft2 * 0.006)),
      item('CUB005', Math.ceil(m.ft2 * 0.008)),
    ]
  });

  // ── 4. ACABADO INTERIOR ──
  const interiorItems = [];
  const panelMDF = Math.ceil(m.floor_m2 * 0.4);
  const pintCub  = Math.ceil(m.floor_m2 / 55);

  if (state.interior === 'light') {
    interiorItems.push(
      item('INTL001', panelMDF),
      item('INTL002', pintCub),
      item('INTL003', m.cab_low),
      item('INTL004', m.cab_up),
      item('INTL005', Math.ceil(m.floor_m2 * 0.04)),
    );
  } else {
    interiorItems.push(
      item('INTD001', panelMDF),
      item('INTD002', pintCub),
      item('INTD003', m.cab_low),
      item('INTD004', m.cab_up),
      item('INTD005', Math.ceil(m.floor_m2 * 0.04)),
    );
  }
  sections.push({ category: "Acabado Interior", items: interiorItems });

  // ── 5. PISOS ──
  const floorItems = [];
  if (state.floor === 'hardwood') {
    floorItems.push(
      item('FLRH001', Math.ceil(m.floor_m2 * 1.1)),
      item('FLRH002', Math.ceil(m.floor_m2 / 15)),
      item('FLRH003', Math.ceil(Math.sqrt(m.floor_m2) * 4 * 0.8)),
    );
  } else if (state.floor === 'tile') {
    floorItems.push(
      item('FLRT001', Math.ceil(m.floor_m2 * 1.08)),
      item('FLRT002', Math.ceil(m.floor_m2 / 5)),
      item('FLRT003', Math.ceil(m.floor_m2 / 8)),
      item('FLRT004', Math.ceil(Math.sqrt(m.floor_m2) * 2)),
    );
  } else {
    floorItems.push(
      item('FLRC001', m.floor_m2),
      item('FLRC002', Math.ceil(m.floor_m2 / 25)),
      item('FLRC003', m.floor_m2),
    );
  }
  sections.push({ category: "Pisos", items: floorItems });

  // ── 6. MEP ──
  const breakers = m.bathrooms === 2 ? 14 : 10;
  sections.push({
    category: "MEP — Mecánico, Eléctrico, Plomería",
    items: [
      item('MEP001', 1),
      item('MEP002', breakers),
      item('MEP003', 4),
      item('MEP004', Math.ceil(m.ft2 / 80)),
      item('MEP005', Math.ceil(m.ft2 / 200)),
      item('MEP006', Math.ceil(m.ft2 / 60)),
      item('MEP007', Math.ceil(m.floor_m2 / 6)),
      item('MEP008', Math.ceil(m.floor_m2 / 10)),
      item('MEP009', Math.ceil(m.floor_m2 / 4)),
      item('MEP010', m.min_splits),
      item('MEP011', m.min_splits),
      item('MEP012', Math.ceil(m.ft2 / 60)),
      item('MEP013', Math.ceil(m.ft2 / 50)),
      item('MEP014', Math.ceil(m.ft2 / 45)),
      item('MEP015', m.bathrooms),
      item('MEP016', 1),
      item('MEP017', Math.ceil(m.ft2 / 80)),
    ]
  });

  // ── 7. BAÑO ──
  const bathItems = [];
  for (let i = 0; i < m.bathrooms; i++) {
    bathItems.push(
      item('BATH001', 1),
      item('BATH002', 1),
      item('BATH003', 1),
      item('BATH004', 1),
      item('BATH005', 8),
    );
  }
  bathItems.push(item('BATH006', m.bathrooms));
  sections.push({ category: "Baño(s)", items: bathItems });

  // ── 8. COCINA ──
  sections.push({
    category: "Cocina",
    items: [
      item('KIT001', 1),
      item('KIT002', 1),
      item('KIT003', 1),
      item('KIT004', 1),
      item('KIT005', 1),
      item('KIT006', 1),
    ]
  });

  // ── 9. ADD-ONS ──

  if (state.addons.deck) {
    const deckArea = state.model === 'xl10' ? 30 : state.model === 'xl8' ? 24 : 18;
    sections.push({
      category: "Add-on: Deck Exterior",
      items: [
        item('DECK001', deckArea),
        item('DECK002', Math.ceil(deckArea * 1.2)),
        item('DECK003', Math.ceil(Math.sqrt(deckArea) * 4 * 0.6)),
        item('DECK004', Math.ceil(deckArea / 2)),
        item('DECK005', Math.ceil(deckArea / 20)),
      ]
    });
  }

  if (state.addons.awning) {
    sections.push({
      category: "Add-on: Toldo / Awning",
      items: [
        item('AWN001', 1),
        item('AWN002', 1),
        item('AWN003', 7),
        item('AWN004', 4),
      ]
    });
  }

  if (state.addons.solar) {
    const panels = state.model === 'xl10' ? 14 : state.model === 'xl8' ? 12 : state.model === 'twobed' ? 10 : 8;
    sections.push({
      category: "Add-on: Sistema Solar",
      items: [
        item('SOL001', panels),
        item('SOL002', panels),
        item('SOL003', Math.ceil(panels / 2) + 1),
        item('SOL004', Math.ceil(panels / 4)),
        item('SOL005', 1),
        item('SOL006', 1),
      ]
    });
  }

  if (state.addons.stairs) {
    sections.push({
      category: "Add-on: Escalera Exterior",
      items: [
        item('STAIR001', 1),
        item('STAIR002', 3),
        item('STAIR003', 3),
        item('STAIR004', 2),
      ]
    });
  }

  if (state.addons.smart) {
    sections.push({
      category: "Add-on: Smart Home Kit",
      items: [
        item('SMT001', 1),
        item('SMT002', 1),
        item('SMT003', 1),
        item('SMT004', 4),
        item('SMT005', Math.ceil(m.floor_m2 / 20)),
      ]
    });
  }

  return sections;
}
