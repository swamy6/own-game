class Form {
    constructor() {
      this.input=createInput("Name");
      this.button=createButton("play");
      this.greeting=createElement("h2");
      this.button1=createButton("Fine");
      this.greeting1=createElement("h2");
      this .button2=createButton("yes");
      this.button3=createButton("No");
      this.greeting2=createElement("h2");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.button1.hide();
      this.greeting1.hide();
      this.button2.hide();
      this.button3.hide();
      this.greeting2.hide();
    }
    
    display(){
      var title = createElement('h2')
      title.html("Shooting Game");
      title.position(130, 0);
     
      
      this.input.position(130, 160);
      this.button.position(250, 200);
      
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        this.button1.position(300,250);
        playerCount+=1;
        player.index=playerCount;
        player.update()
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        this.greeting.html("How are you " + player.name)
        this.greeting.position(130, 160);
        this.button1.mousePressed(()=>{
        this.input.hide();
        this.button1.hide();
        this .greeting.hide();
        this.greeting1.html("Are you like this game" + player.name);
        this.greeting1.position(40, 160);
        this.button2.position(270,250);
        this.button3.position(310,250);
          this.button2.mousePressed(()=>{
        this.input.hide();
        this.button2.hide();
        this.button3.hide();
        this.greeting1.hide();
       
        });    
          this.button3.mousePressed(()=>{
        this.input.hide();
        this.button2.hide();
        this.button3.hide();
        this.greeting1.hide();
        this.greeting2.html("Bye");
        this.greeting2.position(130, 160);
         
        });
        });
         
      });
     
     
    }
  }
  