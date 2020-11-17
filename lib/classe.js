class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fale() {
    console.log(this.nome);
  }

}

class Gato extends Animal {
  fale() {
    super.fale();
    console.log("miau");
  }

}

var bichano = new Gato("bichano");
bichano.fale();