// Histórico de compras (dados das NFC-e).
// Para adicionar uma nota: acrescente um objeto ao fim de COMPRAS.
//   un:    "kg" (vendido por peso) ou "un" (unidade/pacote)
//   plano: "sim" (está no plano), "troca" (ok como substituição), "evitar" (fora do plano)
//   item:  nome padronizado, usado para comparar o mesmo produto entre notas

window.ORCAMENTO_MENSAL = 1300;

// Preço de referência por item (o que o plano considera um bom preço).
window.REFERENCIA = {
  "Peito de frango":     { preco: 20.00, un: "kg", fonte: "filé congelado em atacarejo (estimativa)" },
  "Carne moída":         { preco: 38.00, un: "kg", fonte: "patinho/acém em atacarejo (estimativa)" },
  "Batata":              { preco: 3.99,  un: "kg", fonte: "Sacolão da Família" },
  "Batata-doce roxa":    { preco: 3.99,  un: "kg", fonte: "Sacolão da Família" },
  "Cenoura":             { preco: 3.99,  un: "kg", fonte: "Sacolão da Família" },
  "Tomate":              { preco: 3.99,  un: "kg", fonte: "Sacolão da Família" },
  "Banana":              { preco: 3.99,  un: "kg", fonte: "Sacolão da Família" },
  "Leite desnatado 1 L": { preco: 5.00,  un: "un", fonte: "caixa com 12 em atacarejo (estimativa)" },
  "Leite integral 1 L":  { preco: 5.00,  un: "un", fonte: "caixa com 12 em atacarejo (estimativa)" },
  "Leite Piracanjuba 1 L": { preco: 5.00, un: "un", fonte: "caixa com 12 em atacarejo (estimativa)" },
  "Pão de forma":        { preco: 8.00,  un: "un", fonte: "integral, estimativa" }
};

window.COMPRAS = [
  {
    data: "2026-10-12",
    hora: "16:21",
    mercado: "Supermercado Jacomar",
    bairro: "Capão Raso",
    endereco: "R. Pedro Gusso, 1089",
    pagamento: "Cartão de crédito",
    nfce: "Série 77 · Nº 102192",
    total: 165.78,
    itens: [
      { cod: "7896186500020", desc: "OVOS BRANCO BANDEJAO",  item: "Ovos (bandeja)",              cat: "Proteínas",  qtd: 1,     un: "un", unit: 19.95, total: 19.95, plano: "sim" },
      { cod: "5417",          desc: "PEITO FRANGO SOSSO",    item: "Peito de frango",             cat: "Proteínas",  qtd: 0.888, un: "kg", unit: 23.98, total: 21.29, plano: "sim" },
      { cod: "7896256603422", desc: "LEITE L.V.TIROL DESN",  item: "Leite desnatado 1 L",         cat: "Laticínios", qtd: 3,     un: "un", unit: 5.28,  total: 15.84, plano: "sim" },
      { cod: "7896294901993", desc: "LEITE LV TIROL 1L IN",  item: "Leite integral 1 L",          cat: "Laticínios", qtd: 1,     un: "un", unit: 5.29,  total: 5.29,  plano: "troca" },
      { cod: "7891000360361", desc: "IOG NESTLE 540G GREG",  item: "Iogurte grego 540 g",         cat: "Laticínios", qtd: 1,     un: "un", unit: 15.99, total: 15.99, plano: "troca" },
      { cod: "7896256600780", desc: "CREME LEITE TIROL 20",  item: "Creme de leite 200 g",        cat: "Laticínios", qtd: 3,     un: "un", unit: 2.89,  total: 8.67,  plano: "evitar" },
      { cod: "1578",          desc: "BATATA KG",             item: "Batata",                      cat: "Hortifruti", qtd: 1.47,  un: "kg", unit: 6.99,  total: 10.28, plano: "sim" },
      { cod: "1463",          desc: "BATATA DOCE ROXA KG",   item: "Batata-doce roxa",            cat: "Hortifruti", qtd: 1.32,  un: "kg", unit: 4.99,  total: 6.59,  plano: "troca" },
      { cod: "5853",          desc: "CENOURA MIUDA P.P KG",  item: "Cenoura",                     cat: "Hortifruti", qtd: 0.735, un: "kg", unit: 4.99,  total: 3.67,  plano: "sim" },
      { cod: "7908046701451", desc: "UVA THOMPSON DOCE UV",  item: "Uva Thompson (bandeja)",      cat: "Hortifruti", qtd: 1,     un: "un", unit: 12.99, total: 12.99, plano: "troca" },
      { cod: "7896036000816", desc: "EXTRATO TOMATE ELEFA",  item: "Extrato de tomate Elefante",  cat: "Mercearia",  qtd: 1,     un: "un", unit: 17.98, total: 17.98, plano: "sim" },
      { cod: "7896022205737", desc: "MASSA SEM.PARAF.COV",   item: "Macarrão parafuso",           cat: "Mercearia",  qtd: 1,     un: "un", unit: 3.99,  total: 3.99,  plano: "troca" },
      { cod: "7896022203733", desc: "MASSA SEM.TRIC.PA 50",  item: "Macarrão parafuso tricolor",  cat: "Mercearia",  qtd: 1,     un: "un", unit: 6.78,  total: 6.78,  plano: "troca" },
      { cod: "7891962051338", desc: "PAO TRADICIONAL VISC",  item: "Pão de forma",                cat: "Mercearia",  qtd: 1,     un: "un", unit: 6.98,  total: 6.98,  plano: "sim" },
      { cod: "7894900061512", desc: "REFRIG.SPRITE SACUC",   item: "Refrigerante sem açúcar",     cat: "Bebidas",    qtd: 1,     un: "un", unit: 9.49,  total: 9.49,  plano: "evitar" }
    ]
  },
  {
    data: "2026-10-20",
    hora: "13:56",
    mercado: "Supermercado Jacomar",
    bairro: "Capão Raso",
    endereco: "R. Pedro Gusso, 1089",
    pagamento: "Cartão de crédito (2 cartões)",
    nfce: "Série 77 · Nº 103226",
    desconto: 1.00,
    total: 413.24,
    itens: [
      { cod: "6253",          desc: "CARNE MOIDA 1A KG",     item: "Carne moída",                 cat: "Proteínas",  qtd: 1.252, un: "kg", unit: 45.98, total: 57.57, plano: "sim" },
      { cod: "5674",          desc: "COXAO MOLE PECA KG",    item: "Coxão mole",                  cat: "Proteínas",  qtd: 0.546, un: "kg", unit: 54.98, total: 30.02, plano: "troca" },
      { cod: "7891164116835", desc: "PEITO FRANGO AURORA",   item: "Peito de frango fatiado (frios)", cat: "Proteínas", qtd: 1,  un: "un", unit: 7.98,  total: 7.98,  plano: "troca" },
      { cod: "7613",          desc: "PEITO PERU DEF SEARA",  item: "Peito de peru defumado",      cat: "Proteínas",  qtd: 0.114, un: "kg", unit: 79.98, total: 9.12,  plano: "troca" },
      { cod: "7896256603422", desc: "LEITE L.V.TIROL DESN",  item: "Leite desnatado 1 L",         cat: "Laticínios", qtd: 3,     un: "un", unit: 5.38,  total: 16.14, plano: "sim" },
      { cod: "7898215152811", desc: "LEITE LV PIRACANJUBA",  item: "Leite Piracanjuba 1 L",       cat: "Laticínios", qtd: 2,     un: "un", unit: 7.58,  total: 15.16, plano: "sim" },
      { cod: "7898915578591", desc: "QUEIJO MUSSARELA NAT",  item: "Queijo muçarela",             cat: "Laticínios", qtd: 1,     un: "un", unit: 20.99, total: 20.99, plano: "troca" },
      { cod: "7891000360361", desc: "IOG NESTLE 540G GREG",  item: "Iogurte grego 540 g",         cat: "Laticínios", qtd: 1,     un: "un", unit: 15.99, total: 15.99, plano: "troca" },
      { cod: "7898215151784", desc: "CREME LEITE PIRACANJ",  item: "Creme de leite 200 g",        cat: "Laticínios", qtd: 4,     un: "un", unit: 3.18,  total: 12.72, plano: "evitar" },
      { cod: "1578",          desc: "BATATA KG",             item: "Batata",                      cat: "Hortifruti", qtd: 2.485, un: "kg", unit: 4.98,  total: 12.38, plano: "sim" },
      { cod: "5853",          desc: "CENOURA MIUDA P.P KG",  item: "Cenoura",                     cat: "Hortifruti", qtd: 0.775, un: "kg", unit: 4.99,  total: 3.87,  plano: "sim" },
      { cod: "1497",          desc: "MACA GRANNY SMITH KG",  item: "Maçã Granny Smith",           cat: "Hortifruti", qtd: 0.655, un: "kg", unit: 16.99, total: 11.13, plano: "sim" },
      { cod: "138",           desc: "COUVE FLOR UN",         item: "Couve-flor",                  cat: "Hortifruti", qtd: 1,     un: "un", unit: 5.99,  total: 5.99,  plano: "sim" },
      { cod: "7891527064667", desc: "BROCOLIS CONG.COPACO",  item: "Brócolis congelado",          cat: "Hortifruti", qtd: 1,     un: "un", unit: 6.99,  total: 6.99,  plano: "sim" },
      { cod: "7898970370284", desc: "CEBOLA PICADA EASYCH",  item: "Cebola picada (pronta)",      cat: "Hortifruti", qtd: 2,     un: "un", unit: 3.79,  total: 7.58,  plano: "sim" },
      { cod: "7898970370062", desc: "ALHO PICADO EASYCHEF",  item: "Alho picado (pronto)",        cat: "Hortifruti", qtd: 1,     un: "un", unit: 7.98,  total: 7.98,  plano: "sim" },
      { cod: "7896273900306", desc: "FEIJ.P.CALDO BOM 1KG",  item: "Feijão preto 1 kg",           cat: "Mercearia",  qtd: 1,     un: "un", unit: 7.58,  total: 7.58,  plano: "sim" },
      { cod: "7891962051338", desc: "PAO TRADICIONAL VISC",  item: "Pão de forma",                cat: "Mercearia",  qtd: 1,     un: "un", unit: 6.98,  total: 6.98,  plano: "sim" },
      { cod: "7896002302197", desc: "PAO PULLMAN ARTESANO",  item: "Pão de forma Artesano",       cat: "Mercearia",  qtd: 1,     un: "un", unit: 11.98, total: 11.98, plano: "troca" },
      { cod: "7896022205997", desc: "MASSA SEM.TOD.ESPAG.",  item: "Macarrão espaguete",          cat: "Mercearia",  qtd: 1,     un: "un", unit: 8.28,  total: 8.28,  plano: "troca" },
      { cod: "7896283001093", desc: "GRANOLA INT JASMINE",   item: "Granola",                     cat: "Mercearia",  qtd: 1,     un: "un", unit: 32.98, total: 32.98, plano: "evitar" },
      { cod: "7891031412275", desc: "MAIONESE HEMMER SACH",  item: "Maionese",                    cat: "Mercearia",  qtd: 1,     un: "un", unit: 16.98, total: 16.98, plano: "evitar" },
      { cod: "7891515476212", desc: "LASANHA SADIA PEITO",   item: "Lasanha congelada",           cat: "Congelados prontos", qtd: 2, un: "un", unit: 13.98, total: 27.96, plano: "evitar" },
      { cod: "7898994484615", desc: "PAO QUEIJO SERRA MIN",  item: "Pão de queijo congelado",     cat: "Congelados prontos", qtd: 1, un: "un", unit: 12.98, total: 12.98, plano: "evitar" },
      { cod: "7891203021168", desc: "BISC ROSQUINHA PANCO",  item: "Biscoito rosquinha",          cat: "Lanches e doces", qtd: 1, un: "un", unit: 11.98, total: 11.98, plano: "evitar" },
      { cod: "7896003738940", desc: "BISC AMANT MARILAN 2",  item: "Biscoito amanteigado",        cat: "Lanches e doces", qtd: 2, un: "un", unit: 6.98,  total: 13.96, plano: "evitar" },
      { cod: "7891000412855", desc: "ACHOC PO NESCAU 350G",  item: "Achocolatado 350 g",          cat: "Lanches e doces", qtd: 1, un: "un", unit: 10.98, total: 10.98, plano: "evitar" },
      { cod: "7891991001373", desc: "REFRIG.GUAR.ANTARCTI",  item: "Refrigerante guaraná",        cat: "Bebidas",    qtd: 1,     un: "un", unit: 9.99,  total: 9.99,  plano: "evitar" }
    ]
  }
];
