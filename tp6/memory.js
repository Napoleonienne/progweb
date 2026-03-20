const game = {};
game.create = function(images, blank) {
  this.images = images;
  this.blank = blank;

  this.cards = shuffleCards(this.images.length);


  //version 2
  this.tb_carte =[].fill(0,0,7);

  
};
var carte_reveler = []



class carte {
  constructor(dos_carte,carte){
    this.dos_carte = dos_carte;
    this.visible = false;
    this.img = document.createElement('img');
    this.img.setAttribute('src', this.dos_carte);

    this.img.setAttribute('alt', dos);
    this.img.width = '80';
    this.img.height = '80';
    this.carte = carte;
    this.img.onclick = this.click;

  }

  afficher(){
    if(this.visible){
      img.setAttribute('src', this.carte);
      this.changement_etat();
    }
  }

  cacher(){
    if(this.visible){
      img.setAttribute('src', this.dos_carte);
      this.changement_etat();

  }
}
  
  changement_etat(){

    this.visible = !this.visible;
  }
click(){
  if(!this.visible ){
    this.afficher();
    }
}


}
game.build2 = function(div){
    div.innerHTML = `${this.images.length}    <br>`;
    let bl = this.blank;
   for (let index_16 = 0; index_16 < this.cards.length; index_16++) {
      let index_8=this.cards[index_16] ;
      let ji = this.images[index_8];
      this.tb_carte[index_16] = new carte(bl,ji);
      let div_img =document.createElement("div")
      div_img.className = "carte"

      div.appendChild(div_img);
      div_img.appendChild(this.tb_carte[index_8]);
      
      
    }


}


game.logic2= function(){
  this.tb_carte;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

}

game.build = function(div) {

  
    div.innerHTML = `${this.images.length}    <br>`;
    let bl = this.blank;

    for (let index_16 = 0; index_16 < this.cards.length; index_16++) {
      let index_8=this.cards[index_16] ;
      let ji = this.images[index_8];
      let div_img =document.createElement("div")
      div_img.className = "carte"
          const img = document.createElement('img');
          img.setAttribute('src', this.blank);
          img.setAttribute('alt', "carte");
          img.width = '80';
          img.height = '80';
          
          div.appendChild(div_img);
          div_img.appendChild(img);
          
          function click(){
                console.time();

            let i = index_8;
            let j = index_16;
            let dos_carte =bl;
            let carte = ji;
            let img2 = img;
            v = img2.getAttribute("src");
            if(v == dos_carte ){
              img2.setAttribute('src',carte);
            }
            else{
              img2.setAttribute("src",dos_carte)
              

            }
            carte.carte_reveler

            console.info(i,j);
            console.timeEnd();

            
            return 0;
          }
     
          img.onclick = click;




      
    }
  
};

game.logic = function(div){
  document.createElement('img').animate;
  let precedent = null

  d = div.children;
  for (let index = 0; index < d.length; index++) {
    const element = d[index];
    temp =d.getAttribute("src");
    if(precedent == null){
      
    }
    
    
  }

  






}

random = n => Math.floor(n * Math.random());

const shuffleCards = function(length) {
  let cards = [];
  for(let i = 0; i < length; i++) {
  
    cards.push(i);
    cards.push(i);
  }

  for(let i=0;i<cards.length;i++){
    let j = random(i+1);
    cards[i],cards[j] = cards[i],cards[j];
  }
  
  

  return cards;
};
