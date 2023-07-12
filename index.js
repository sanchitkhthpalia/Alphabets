var numberOfAlphabetButtons=document.querySelectorAll(".alphabet").length;

for(var i=0;i<numberOfAlphabetButtons;i++){
    document.querySelectorAll(".alphabet")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "A":
            var Aforapple= new Audio("sounds/a for apple.mp3");
            Aforapple.play(); 
        break;


        case "B":
            var Bforball= new Audio("sounds/b for ball.mp3");
            Bforball.play(); 
        break;


        case "C":
            var Cforcat= new Audio('sounds/c for cat.mp3');
            Cforcat.play(); 
        break;


        case "D":
            var Dfordog= new Audio('sounds/d for dog.mp3');
            Dfordog.play(); 
        break;


        case "E":
            var Eforelephant= new Audio('sounds/e for elephant.mp3');
            Eforelephant.play(); 
        break;


        case "F":
            var Fforfish= new Audio('sounds/f for fish.mp3');
            Fforfish.play(); 
        break;


        case "G":
            var Gforgoat= new Audio('sounds/g for goat.mp3');
            Gforgoat.play(); 
              break;


         case "H":
            var Hforhen= new Audio('sounds/h for hen.mp3');
            Hforhen.play(); 
              break;


              case "I":
                var Iforinkpot= new Audio('sounds/i for inkpot.mp3');
                Iforinkpot.play(); 
                  break;



                  case "J":
                    var Jforjug= new Audio('sounds/j for jug.mp3');
                    Jforjug.play(); 
                      break;


                      case "K":
                        var Kforkite= new Audio('sounds/k for kite.mp3');
                        Kforkite.play(); 
                          break;


                          case "L":
                            var Lforlion= new Audio('sounds/l for lion.mp3');
                            Lforlion.play(); 
                              break;


                              case "M":
                                var Mformango= new Audio('sounds/m for mango.mp3');
                                Mformango.play(); 
                                  break;


                                  case "N":
                                var Nfornest= new Audio('sounds/n for nest.mp3');
                                Nfornest.play(); 
                                  break;


                                  case "O":
                                var Oforowl= new Audio('sounds/o for owl.mp3');
                                Oforowl.play(); 
                                  break;



                                  case "P":
                                var Pforparrot= new Audio('sounds/p for parrot.mp3');
                                Pforparrot.play(); 
                                  break;


                                  case "Q":
                                var Qforqueen= new Audio('sounds/q for queen.mp3');
                                Qforqueen.play(); 
                                  break;


                                  case "R":
                                var Rforrat= new Audio('sounds/r for rat.mp3');
                                Rforrat.play(); 
                                  break;


                                  case "S":
                                var Sforship= new Audio('sounds/s for ship.mp3');
                                Sforship.play(); 
                                  break;


                                  case "T":
                                var Tfortrain= new Audio('sounds/t for train.mp3');
                                Tfortrain.play(); 
                                  break;


                                  case "U":
                                var Uforumbrella= new Audio('sounds/u for umbrella.mp3');
                                Uforumbrella.play(); 
                                  break;


                                  case "V":
                                var Vforvoilin= new Audio('sounds/v for voilin.mp3');
                                Vforvoilin.play(); 
                                  break;


                                  case "W":
                                var Wforwatch= new Audio('sounds/w for watch.mp3');
                                Wforwatch.play(); 
                                  break;


                                  case "X":
                                var Xforxeroxmachine= new Audio('sounds/X for  xerox machine.mp3');
                                Xforxeroxmachine.play(); 
                                  break;

                                  case "Y":
                                var Yforyoyo= new Audio('sounds/y for yoyo.mp3');
                                Yforyoyo.play(); 
                                  break;


                                  case "Z":
                                var Zforzebra= new Audio('sounds/z for zebra.mp3');
                                Zforzebra.play(); 
                                  break;


        default:
            console.log();
    }
}
function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  },100);
}
