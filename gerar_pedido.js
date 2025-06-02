const pedidoDiv = document.getElementById("pedido");
const gerarBtn = document.getElementById("gerarBtn");

const combos = [
  {
    hamb: "Salada Burguer",
    bebida: "Água",
    adicional: "Fritas com cheddar e costela",
    sobremesa: "Milkshake de Doce de Leite",
  },
  {
    hamb: "Salada Bacon",
    bebida: "Água com Gás",
    adicional: "Fritas",
    sobremesa: "Milkshake de Morango"
  },
  {
    hamb: "Ranch Burguer",
    bebida: "Coca-Cola Lata",
    adicional: "Fritas Mussarela e Bacon",
    sobremesa: "Milkshake de Ovomaltine"
  },
  {
    hamb: "Galic Burguer",
    bebida: "Guaraná Antarctica Lata",
    adicional: "Fritas Cheddar e Bacon",
    sobremesa: "Milkshake de Nutella"
  },
  {
    hamb: "Cheddar Bacon BBQ",
    bebida: "Fanta Laranja Lata",
    adicional: "Fristas Provolone e Bacon",
    sobremesa: "Taça Oreo"
  },
  {
    hamb: "Piemonte",
    bebida: "Sprite Lata",
    adicional: "Rústica Cheddar e Bacon",
    sobremesa: "Taça Cookies"
  },
  {
    hamb: "Provo Bacon",
    bebida: "Schweppes Tônica",
    adicional: "Rústica Provolone e Bacon",
    sobremesa: "Brownie de Chocolate"
  },
  {
    hamb: "Provolone Empanado",
    bebida: "MSchweppes Citrus",
    adicional: "Rústica Gorgonzola e Bacon",
    sobremesa: "Pudim de Leite Ninho c/ Nutella"
  },
  {
    hamb: "Porky Crispy",
    bebida: "H2O",
    adicional: "Bolinho de Costela",
    sobremesa: "Pudim de Leite Condensado"
  },
  {
    hamb: "Parmesão",
    bebida: "H2O Limoneto",
    adicional: "Onion Rings",
    sobremesa: "Mousse de Chocolate"
  },
  {
    hamb: "Geleia Bacon",
    bebida: "Energético Monster",
    adicional: "Nuggets",
    sobremesa: "Milkshake de Doce de Leite"
  },
  {
    hamb: "Bacon Egg",
    bebida: "Suco de Abacaxi",
    adicional: "Iscas de Frango Empanado",
    sobremesa: "Milkshake de Morango"
  },
  {
    hamb: "Pomodori",
    bebida: "Suco de Laranja",
    adicional: "Frango com Cheddar e BBQ",
    sobremesa: "Milkshake de Ovomaltine"
  },
  {
    hamb: "Tasty Burguer",
    bebida: "Suco de Abacaxi c/ Hortelã",
    adicional: "Rústica RIB",
    sobremesa: "Milkshake de Nutella"
  },
  {
    hamb: "Chicken Crispy",
    bebida: "Suco de Acerola",
    adicional: "Fritas com cheddar e costela",
    sobremesa: "Taça Oreo"
  },
  {
    hamb: "Picanha Crispy",
    bebida: "Suco Detox",
    adicional: "Fritas",
    sobremesa: "Taça Cookies"
  },
  {
    hamb: "Picanha Bacon",
    bebida: "Suco de Limão",
    adicional: "Fritas Mussarela e Bacon",
    sobremesa: "Brownie de Chocolate"
  },
  {
    hamb: "Picanha Salada",
    bebida: "Suco de Maracujá",
    adicional: "Fritas Cheddar e Bacon",
    sobremesa: "Pudim de Leite Ninho c/ Nutella"
  },
  {
    hamb: "Bacon Costela",
    bebida: "Suco de Morango",
    adicional: "Fritas Provolone e Bacon",
    sobremesa: "Pudim de Leite Condensado"
  },
  {
    hamb: "Melt Costela",
    bebida: "Suco de Uva",
    adicional: "Bolinho de Costela",
    sobremesa: "Mousse de Chocolate"
  },
  {
    hamb: "Onion Costela",
    bebida: "Chopp Brahma",
    adicional: "Onion Rings",
    sobremesa: "Milkshake de Doce de Leite"
  },
  {
    hamb: "Smash Cheese",
    bebida: "Chopp Vinho",
    adicional: "Nuggets",
    sobremesa: "Brownie de Chocolate"
  },
  {
    hamb: "Smash Salada",
    bebida: "Chopp da Casa (Heikel)",
    adicional: "Iscas de Frango Empanado",
    sobremesa: "Taça Oreo"
  },
  {
    hamb: "Smash Bacon",
    bebida: "Heineken",
    adicional: "Frango com Cheddar e BBQ",
    sobremesa: "Taça cookie"
  },
  {
    hamb: "Smash Onion",
    bebida: "Eisenbahn",
    adicional: "Rústica RIB",
    sobremesa: "Pudim de Leite Condensado"
  }
];

gerarBtn.addEventListener("click", () => {
  const combo = combos[Math.floor(Math.random() * combos.length)];
  pedidoDiv.textContent = `Seu combo: ${combo.hamb} + ${combo.bebida} + ${combo.adicional}  + ${combo.sobremesa}`;
});
