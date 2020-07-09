class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = cartucho.mapa;
  }


  setup() {

    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(cartucho.configuracoes.vidaMaxima , cartucho.configuracoes.vidaInicial);


    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 20, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 20, 52, 52, 104, 104, 15);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 100, 100, 75, 200, 150, 15);

    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15);



    inimigos.push(inimigo);
    inimigos.push(inimigoTroll);
    inimigos.push(inimigoVoador);



  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }

    if (key === 'Enter') {
      personagem.pula();
      somDoPulo.play();
    }

    if (key === 'w') {
      personagem.pula();
      somDoPulo.play();
    }

  }

  draw() {
    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    cenario.exibe();
    cenario.move();
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto()
    personagem.exibe();
    personagem.aplicaGravidade();

      inimigo.velocidade= linhaAtual.velocidade;
    inimigo.exibe();
    inimigo.move();





    if (inimigoVisivel) {
      this.indice++
      inimigo.reaparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornaInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
      }
    }
  }



}