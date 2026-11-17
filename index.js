class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  ataque() {
    let tipo = this.tipo;
    let arma = "";

    switch (tipo) {
      case "Mago":
        arma = "magia";
        break;
      case "Guerreiro":
        arma = "espada";
        break;
      case "Monge":
        arma = "artes marciais";
        break;
      case "Ninja":
        arma = "shuriken";
        break;
      default:
        arma = "atacou";
    }

    console.log(`O ${this.tipo} de nome ${this.nome} de ${this.idade} anos, atacou usando ${arma}`);
  }
}

let heroiGuerreiro = new Heroi("Jorge", 20, "Guerreiro");
let heroiMago = new Heroi("Gustavo", 22, "Mago");
let heroiMonge = new Heroi("Marcelo", 27, "Monge");
let heroiNinja = new Heroi("Pedro", 33, "Ninja");

heroiGuerreiro.ataque();
heroiMago.ataque();
heroiMonge.ataque();
heroiNinja.ataque();