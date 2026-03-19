const game = {};
game.create = function(images, blank) {
  this.images = images;
  this.blank = blank;

  this.cards = shuffleCards(this.images.length);
  
};


class carte {
  constructor(dos_carte,carte){
    this.dos_carte = dos_carte;
    this.visible = false;
    this.img = document.createElement('img');
    this.afficher()
    img.setAttribute('alt', "carte");
    img.width = '80';
    img.height = '80';
    this.carte = carte;
  }

  afficher(){
    if(this.visible){
      img.setAttribute('src', this.carte);

    }else{
      img.setAttribute('src', this.dos_carte);

    }
  }

  
  changement_etat(){
    this.visible = !this.visible;
  }
  set_function(fun){
    this.img.onclick = fun;

  }
  




}


game.build = function(div) {
  
    div.innerHTML = `${this.images.length}    <br>`;

    for (let index_16 = 0; index_16 < this.cards.length; index_16++) {
      let index_8=this.cards[index_16] ;
          const img = document.createElement('img');
          img.setAttribute('src', this.images[index_8]);
          img.setAttribute('alt', "carte");
          img.width = '80';
          img.height = '80';
          div.appendChild(img);
          function click(){
            let i = index_8;
            let j = index_16;
            let img2 = img
            img.setAttribute('src',this.blank)
            console.log(i,j)

            
            return 0;
          }
     
          img.onclick = click;




      
    }

  
};
random = n => Math.floor(n * Math.random())

const shuffleCards = function(length) {
  let cards = [];
  for(let i = 0; i < length; i++) {
    cards.push(i);
    cards.push(i);
  }
  

  return cards.sort(()=> Math.random());
};
