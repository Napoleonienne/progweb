const game = {};
game.create = function(images, blank) {
  this.images = images;
  this.dos_carte = blank;

  this.cards = shuffleCards(this.images.length);
  this.carte_reveler=[]
  this.compteur =



  //version 2
  this.tb_carte =[].fill(0,0,7);


  
};
var carte_reveler = []



class carte {
  constructor(dos_carte, carte) {
    this.dos_carte = dos_carte;
    this.carte = carte;
    this.visible = false;
    
    this.img = document.createElement('img');
    this.img.setAttribute('src', this.dos_carte);
    this.img.setAttribute('alt', 'dos de la carte');
    this.img.width = 80; 
    this.img.height = 80;
    
    this.img.onclick = this.click.bind(this);
  }

  afficher() {
    if (!this.visible) {
      this.img.setAttribute('src', this.carte);
      this.changement_etat();
    }
  }

  cacher() {
    if (this.visible) {
      this.img.setAttribute('src', this.dos_carte);
      this.changement_etat();
    }
  }
  
  changement_etat() {
    this.visible = !this.visible;
  }

  click() {
    if (!this.visible) {
      this.afficher();
    }
  }
}

game.build2 = function(div) {

  let div_p = document.createElement("p");
  div_p.id ="paire";
  div_p.innerText =` paire restanste : ${this.images.length}`

  div.appendChild(div_p);
  

  
  let bl = this.dos_carte;
  
  this.tb_carte = []; 

  for (let index_16 = 0; index_16 < this.cards.length; index_16++) {
    let index_8 = this.cards[index_16];
    let ji = this.images[index_8];
    
    let nouvelle_carte = new carte(bl, ji);
    
    this.tb_carte[index_16] = nouvelle_carte;
    
    let div_img = document.createElement("div");
    div_img.className
    div_img.className = "carte";


    div.appendChild(div_img);
    
    div_img.appendChild(nouvelle_carte.img);
  }
};

game.logic2= function(){
  this.tb_carte;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

}

game.build = function(div) {

  
      let div_p = document.createElement("p");
      div_p.id ="paire";
      div_p.innerText =` paire restanste : ${this.compteur}`

      div.appendChild(div_p);

    for (let index_16 = 0; index_16 < this.cards.length; index_16++) {
      let index_8=this.cards[index_16] ;
      let ji = this.images[index_8];
      let div_img =document.createElement("div")
      div_img.className = "carte"
          const img = document.createElement('img');
          img.setAttribute('src', this.dos_carte);
          img.setAttribute('alt', "carte");
          img.width = '80';
          img.height = '80';
          
          div.appendChild(div_img);
          div_img.appendChild(img);
          
          function click(){
                console.time();

            let i = index_8;
            let j = index_16;
            let img2 = img;
            img2.setAttribute('src',this.images[i]);
            
            this.carte_reveler.push(i);


            


            console.info(i,j);

            
            return 0;
          }
     
          img.onclick = click.bind(this);




      
    }
  
};

game.logic = function(div){
        
        if(this.carte_reveler.length ==2 ){
            if(this.carte_reveler[0] == this.carte_reveler[1]){
              let beta = div.children;
              this.compteur -= 1;
              div.querySelector("paires").innerText= ` paire restanste : ${this.compteur}`;
            for (let i = 0; i < beta.length; i++) {
              console.log(beta[i].textContent);

            }}
            else{

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
