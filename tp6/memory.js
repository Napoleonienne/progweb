const game = {};
game.create = function(images, blank) {
  this.images = images;
  this.dos_carte = blank;

  this.cards = shuffleCards(this.images.length);
  this.carte_reveler=[]
  this.compteur =this.images.length;



};




game.build = function(div) {

  
      let div_p = document.createElement("p");
      div_p.id ="paires";
      div_p.innerText =` paire restanste : ${this.compteur}`

      div.appendChild(div_p);

    for (let index_16 = 0; index_16 < this.cards.length; index_16++) {
      let index_8=this.cards[index_16] ;
      let ji = this.images[index_8];
      let div_img =document.createElement("div");
      let div_fr =document.createElement("div");
      let div_bc =document.createElement("div");


      

      div_img.className = "carteinner";


          const img = document.createElement('img');
          img.setAttribute('src', this.dos_carte);
          img.setAttribute('alt', "carte");
          div_fr.classList.add("carte_dessus");
          div_fr.appendChild(img)


          const img2 = document.createElement("img");
          img2.setAttribute("src",this.images[index_8])
          img2.setAttribute("alt","carte");
          div_bc.classList.add("carte_arriere");
          div_bc.appendChild(img2)
           div_img.appendChild(div_bc)
          div_img.appendChild(div_fr);
            div.appendChild(div_img);



          
          function click(){
            let div_img1 = div_img;
            div_img1.classList.add("carte_retourner") 
            /*
            if(this.carte_reveler.length < 2 && div_img1.id !="reveler"){

              let i = index_8;
              let j = index_16;
              let img2 = img;
              
              img2.setAttribute('src',this.images[i]);

              
              this.carte_reveler.push([j,i]);
              this.logic(div);
            }
            */


            



            
            return 0;
          }
     
          div_img.onclick = click.bind(this);




      
    }
  
};

game.logic = function(div){



        if (this.compteur == 0) {
          
          
        }
 
        if(this.carte_reveler.length ==2 ){
          
            let enfant = div.children

            if(this.carte_reveler[0][1] == this.carte_reveler[1][1]){
              this.compteur = this.compteur -1;
              div.querySelector("#paires").innerText= ` paire restanste : ${this.compteur}`;
              enfant[this.carte_reveler[0][0]+1].id ="reveler";
              enfant[this.carte_reveler[1][0]+1].id ="reveler";

             
              



      

          this.carte_reveler = [];
          }
          for (let index =1; index<17;index++) {
            let div_img = enfant[index];
            let img =div_img.children[0];

              
                if( div_img.id !="reveler" ){
                window.setTimeout(function(){                 
                img.setAttribute("src",this.dos_carte);}.bind(this)
                  ,500);
                
                
              }}
              this.carte_reveler = [];

        if (this.compteur == 0) {
            
           if (window.confirm("vous avez gagner veuillez recharger la page")){
             window.confirm("sometext");
           };
            

         

          
          
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
