let livros = [
  { nome: "o lado feio do amor", idade: 14, categorias: ["drama", "romance"] },
  { nome: "todas as suas imperfeições", idade: 16, categorias: ["drama", "romance"] },
  { nome: "o pequeno principe", idade: 10, categorias: ["fantasia"] },
  { nome: "verity", idade: 18, categorias: ["fantasia", "romance"] },
  { nome: "as mil partes do meu coração", idade: 16, categorias: ["drama"] },
  { nome: "alice no pais das maravilhas", idade: 10, categorias: ["fantasia"] }
];

// Variáveis do usuário
let idadeUsuario;
let gostaFantasia, gostaRomance, gostaDrama;
let livrosRecomendados = [];

// A função setup() é chamada uma vez quando o programa inicia
function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Livros", 20, 30);

  // Coletar dados do usuário usando prompt.
  // Note: prompts param o script até que o usuário responda.
  idadeUsuario = int(prompt("Qual sua idade?"));
  gostaFantasia = prompt("Você gosta de livros de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaRomance = prompt("Você gosta de livros de romance? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de livros de drama? (sim/não)").toLowerCase() === "sim";

  // Lógica de recomendação
  // O erro estava aqui: 'livro' deveria ser 'livros'
  for (let livro of livros) { // Corrigido de 'livro' para 'livros'
    if (idadeUsuario >= livro.idade) {
      if (
        (gostaFantasia && livro.categorias.includes("fantasia")) ||
        (gostaRomance && livro.categorias.includes("romance")) ||
        (gostaDrama && livro.categorias.includes("drama"))
      ) {
        livrosRecomendados.push(livro.nome);
      }
    }
  }

  // Exibir recomendações na tela
  if (livrosRecomendados.length > 0) {
    text("Livros recomendados para você:", 20, 70);
    for (let i = 0; i < livrosRecomendados.length; i++) {
      text("- " + livrosRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum livro disponível para sua idade e preferências.", 20, 70);
  }
}

// A função draw() é chamada continuamente após setup()
function draw() {
  // A função draw() pode ser usada para animações contínuas,
  // mas para este recomendador estático, não precisamos de nada aqui.
}
