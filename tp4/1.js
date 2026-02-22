var torture =0;
    var lapin =0;

    const crypto = require('crypto');
    function uniform(n){

        var seed =Date.now();
        var c = ["SHA-256","SHA-384","SHA-512"]
        




        
        let r = seed%n+1;

        return r;
    }
    function etape( torture,lapin){
        let n =uniform(20)
        if (n<15 )
            torture += n;
        else
            lapin += n;
        console.log(n);
        return [torture,lapin];

    }

    function course(n){
        let d = [0,0];
      
        let tabeau =  []
        tabeau = ["tortue","lapin"]

        for(let i=0; i<n; i++){
            d = etape(d.at(0),d.at(1));
            tabeau.push( d );


        };
        return tabeau

    }

    console.log((course(10)))