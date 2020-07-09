
function preload(){
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  fonteTelaInicial = loadFont ('imagens/assets/fonteTelaInicial.otf');
  cartucho = loadJSON('cartucho/cartucho.json');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  
}