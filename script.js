// script.js

// Elementos do DOM
const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");  // botão “Enviar” deve ter id="sendBtn"

// Configurações de clima (opcional)
const apiKey = "a86e1e1a4af94726959191600252605";
const cidade = "Ourinhos";

// 1) Envia a mensagem do usuário
function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  appendMessage("user", text);
  input.value = "";
  processMessage(text.toLowerCase());
}

// 2) Adiciona mensagem no chat
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = sender; // "user" ou "bot"
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// 3) Voz (opcional)
function speak(text) {
  if (!window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'pt-BR';
  window.speechSynthesis.speak(utter);
}

// 4) Processa mensagem: busca clima e gera resposta
async function processMessage(msg) {
  let temp = null;
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&aqi=no`
    );
    const data = await res.json();
    temp = data.current.temp_c;
  } catch (e) {
    console.warn("Não foi possível obter o clima:", e);
  }

  const resposta = gerarResposta(msg, temp);
  appendMessage("bot", resposta);
  speak(resposta);
}

// 5) Utilitário: verifica se msg contém qualquer palavra da lista
function contains(msg, lista) {
  return lista.some(p => msg.includes(p));
}

// 6) Retorna um elemento aleatório de um array
function aleatoria(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 7) Gera resposta com múltiplas opções em cada categoria
function gerarResposta(msg, temp) {
  const opcoes = {
    saudacoes: [
      "oi", "olá", "ola", "e aí", "fala", "falaa", "bom dia",
      "boa tarde", "boa noite", "salve", "opa", "ae", "blz",
      "beleza", "tudo bem", "td bem", "td bom", "bom"
    ],
    doces: [
      "doce", "docinho", "sobremesa", "milkshake", "açúcar", "açucar",
      "bolo", "pudim", "mousse", "açaí doce", "sorvete", "gostosura",
      "gordice", "delícia", "chocolate", "nutella", "coisa doce",
      "quero doce", "algo doce", "sobremesinha", "brigadeiro"
    ],
    leves: [
      "leve", "refrescante", "salada", "saladinha", "coisa leve",
      "comida leve", "nada pesado", "algo leve", "quero algo leve",
      "comer pouco", "coisa saudável", "comida fit", "fit", "fitness",
      "refeição leve", "light", "natural", "saudável"
    ],
    quentes: [
      "quente", "quentinho", "esquentar", "comida quente",
      "comidinha quente", "quentão", "quentura", "tô com frio",
      "preciso me aquecer", "aquecido", "quentinha", "coisa quente",
      "quentãozinho", "quentin", "esquenta aí"
    ],
    frios: [
      "frio", "gelado", "refrescante", "bebida gelada", "calor",
      "quente demais", "quero me refrescar", "coisa fria", "algo gelado",
      "bebidinha gelada", "geladinho", "refrescar", "calorzão",
      "tá quente", "calorzinho", "refrigerado"
    ],
    semLactose: [
      "sem lactose", "intolerância", "sem leite", "intolerante a lactose",
      "lactose free", "sem derivados do leite", "dá alergia",
      "nada com leite", "sem derivado", "sem queijo", "sem nata",
      "sem creme de leite"
    ],
    vegetarianos: [
      "vegetariano", "vegano", "sem carne", "nada de carne",
      "plant based", "só vegetal", "sem proteína animal",
      "comida vegana", "prato veg", "sem bicho", "refeição veg",
      "veggie", "verde", "salada com grão", "feijão com legumes"
    ],
    pressa: [
      "com pressa", "vai demorar", "tempo de espera", "rápido",
      "rápida", "demora", "atrasado", "sem tempo", "express",
      "correria", "pra já", "agilidade", "tem como ser rápido",
      "correndo", "atende rápido", "to na correria"
    ],
    recomendacao: [
      "me recomenda", "o que você sugere", "sugestão",
      "não sei o que pedir", "dica", "me ajuda escolher",
      "não decidi", "o que tem de bom", "me indica", "sugira algo",
      "escolhe pra mim", "me surpreenda", "quero uma dica", "me ajuda"
    ],
    bebidas: [
      "suco", "refrigerante", "refri", "bebida", "água", "agua",
      "açaí", "acai", "milkshake", "smoothie", "bebidinha",
      "coisa pra beber", "gelado pra beber", "líquido", "sede",
      "tô com sede", "drink", "bebidas", "água com gás", "suquinho"
    ],
    despedidas: [
      "tchau", "valeu", "até mais", "até logo", "até breve",
      "fui", "xau", "até", "obrigado", "obrigada", "agradecido",
      "vlw", "flw", "falou", "até amanhã", "encerra", "termina",
      "finaliza", "isso é tudo", "já pedi", "só isso"
    ]
  };

  // Saudação
  if (contains(msg, opcoes.saudacoes)) {
    return aleatoria([
      "Olá! 😄 Está com fome? Posso sugerir um lanche incrível!",
      "Oi! Bem-vindo! Temos hambúrgueres artesanais e sobremesas deliciosas!",
      "Salve! Que tal um combo completo com bebida, fritas e sobremesa?",
      "Fala aí! Quer conhecer nosso lanche mais pedido?"
    ]);
  }

  // Doces
  if (contains(msg, opcoes.doces)) {
    return aleatoria([
      "Temos sobremesas incríveis como Milkshake de Doce de Leite e Taça Oreo!",
      "Você vai adorar nosso Brownie de Chocolate ou o Pudim de Leite Ninho com Nutella!",
      "Que tal um Milkshake de Morango ou uma Taça Cookies para adoçar seu dia?",
      "Nosso Mousse de Chocolate e Milkshake de Ovomaltine são puro prazer!"
    ]);
  }

  // Leves
  if (contains(msg, opcoes.leves)) {
    return aleatoria([
      "O Salada Burguer é uma ótima opção leve, acompanhado de água.",
      "Prefere algo leve e saboroso? Vá de Piemonte com Sprite!",
      "Nosso Provolone Empanado com H2O Citrus combina sabor e leveza.",
      "Uma boa pedida leve: Porky Crispy com bolinho de costela e H2O!"
    ]);
  }

  // Quentes
  if (contains(msg, opcoes.quentes)) {
    if (temp !== null && temp < 18) {
      return "Dia frio? Vai de Cheddar Bacon BBQ com fritas e milkshake de Nutella pra esquentar! 🔥";
    }
    return aleatoria([
      "O Galic Burguer quentinho com fritas e Guaraná vai te aquecer bem!",
      "Experimente o Bacon Egg com iscas de frango e suco natural. Muito sabor!",
      "Nosso Pomodori com frango e cheddar é puro conforto em forma de lanche."
    ]);
  }

  // Frios
  if (contains(msg, opcoes.frios)) {
    if (temp !== null && temp > 28) {
      return "Tá quente aí? Refresque-se com nosso Milkshake de Morango ou Taça Oreo! ❄️";
    }
    return aleatoria([
      "Uma bebida gelada como Suco de Abacaxi com o Tasty Burguer é perfeita!",
      "Sprite, H2O ou Schweppes Citrus são ótimas pedidas refrescantes!",
      "Que tal um Milkshake de Ovomaltine com Nuggets para refrescar e curtir?"
    ]);
  }

  // Sem lactose
  if (contains(msg, opcoes.semLactose)) {
    return aleatoria([
      "Temos opções como batatas rústicas com provolone ou onion rings, sem lactose!",
      "Nosso Piemonte é uma boa escolha com ingredientes mais leves.",
      "Milkshakes e sobremesas com leite podem conter lactose, mas temos sugestões alternativas."
    ]);
  }

  // Vegetarianos
  if (contains(msg, opcoes.vegetarianos)) {
    return aleatoria([
      "Nosso Salada Burguer é uma ótima escolha sem carne vermelha!",
      "Você pode montar um combo com batatas rústicas, água e sobremesa sem proteína animal.",
      "Quer algo sem carne? Provo Bacon ou Provolone Empanado são opções mais leves!"
    ]);
  }

  // Pressa
  if (contains(msg, opcoes.pressa)) {
    return aleatoria([
    "Combo rápido? Vá de Bacon Egg com suco de abacaxi e fritas, sai rapidinho!",
    "Tasty Burguer com batata e refrigerante costuma ficar pronto em minutos!",
    "Está com pressa? O Galic Burguer + Guaraná + fritas é uma solução rápida e deliciosa!",
    "Fome urgente? O combo do Galic Burguer com refrigerante e batata é super rápido!",
    "Vai voando? Já prepara o pedido: Salada Burguer, refrigerante lata e fritas simples — combo rápido e leve!"
    ]);
  }

  // Recomendação
  if (contains(msg, opcoes.recomendacao)) {
    return aleatoria([
      "Nosso combo favorito: Ranch Burguer + Coca-Cola Lata + Fritas Mussarela e Bacon + Milkshake de Ovomaltine! 😋",
      "Quer algo diferente? Provolone Empanado + Rústica Gorgonzola + Milkshake de Nutella!",
      "Indico o Pomodori com suco de laranja e sobremesa especial de Ovomaltine!",
      "Vai de Geleia Bacon + Monster + Nuggets + Milkshake de Doce de Leite!"
    ]);
  }

  // Bebidas
  if (contains(msg, opcoes.bebidas)) {
    return aleatoria([
      "Temos suco de abacaxi, suco de laranja, Coca, Guaraná, Fanta, Sprite, H2O e muito mais!",
    "Prefere algo energético? Temos Monster e Schweppes Citrus!",
    "Quer refrescar? Água com gás, sucos naturais ou milkshakes estão te esperando!",
    "Nossa carta de bebidas vai de sucos naturais até refrigerantes clássicos como Fanta e Coca-Cola!",
    "Tem sede? Temos Schweppes Citrus, Monster, Sprite Zero e H2O para todos os gostos!",
    "Experimente um suco de laranja natural geladinho ou uma Coca bem trincando de gelo! 🧊",
    "Pode pedir água, refri, suco ou até Monster. Temos bebida pra qualquer momento do dia!"
    ]);
  }

  // Despedidas
  if (contains(msg, opcoes.despedidas)) {
    return aleatoria([
      "Obrigado! Volte sempre para saborear nossos combos incríveis! 🍔🥤🍨",
      "Valeu pela visita! Se bater a fome de novo, é só chamar!",
      "Até mais! Que seu dia seja tão bom quanto nosso milkshake de Nutella! 😄"
    ]);
  }

  // Fallback padrão
  return aleatoria([
    "Desculpa, não entendi. Pode repetir? 🤔",
    "Não consegui compreender, poderia reformular? 🤖",
    "Ainda estou aprendendo, fala de outro jeito?"
  ]);
}

// 8) Eventos de clique e Enter
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});
// 8) Reconhecimento de voz
const voiceBtn = document.getElementById("voiceBtn");

// Verifica suporte
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  voiceBtn.addEventListener("click", () => {
    recognition.start();
    voiceBtn.textContent = "🎙️...";
  });

  recognition.addEventListener("result", (event) => {
    const speech = event.results[0][0].transcript;
    appendMessage("user", speech);  // envia direto a fala como mensagem do usuário
    processMessage(speech.toLowerCase());
  });

  recognition.addEventListener("end", () => {
    voiceBtn.textContent = "🎤";
  });

  recognition.addEventListener("error", (event) => {
    console.error("Erro no reconhecimento de voz:", event.error);
    voiceBtn.textContent = "🎤";
  });
} else {
  voiceBtn.disabled = true;
  voiceBtn.title = "Reconhecimento de voz não suportado neste navegador.";
}
