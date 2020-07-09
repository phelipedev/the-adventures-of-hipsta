class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }


  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;


    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  tornaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
    this.invencivel = false;
    }, 1000)
  }

  estaColidindo(inimigo) {
    if(this.invencivel){
      return false;
    
    }

    const precisao = .7;
    
    const colisao = collideRectRect(
      this.x +20,
      this.y +20,
      this.largura * precisao,
      this.altura * precisao,

      inimigo.x +35,
      inimigo.y + 30,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }


}