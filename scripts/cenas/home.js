class TelaInicial{
  constructor(){
    
  }

    draw(){
    this._imagemDeFundo();
    this._text();
    this._botao();
    }
  
  _imagemDeFundo(){
     image(imagemTelaInicial, 0, 0, width, height);
  }
  _text(){
    textAlign('center')
    textFont(fonteTelaInicial);
    textSize(50);
    text('The  adventures  of', width/2,100);
    textSize(200);
    text('H i p s t A', width/2, 280);
  }
  
  
  _botao(){
    botaoGerenciador.y = height/6 * 5;
    botaoGerenciador.draw();
  }
}