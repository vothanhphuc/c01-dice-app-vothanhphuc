function thayDoiHinh(){
    let lag = document.querySelectorAll(".dice-item");
    console.log(lag[0]);
    for(i=0 ;i<=5;i++){
        switch(i){
            case 1:
                lag[0].src = "./img/dice1.png";
                lag[1].src = "./img/dice2.png";
                break;
            case 2:
                lag[0].src = "./img/dice1.png";
                lag[1].src = "./img/dice3.png";
                break;
            case 3:
                lag[0].src = "./img/dice1.png";
                lag[1].src = "./img/dice4.png";
                break;
            case 4:
                lag[0].src = "./img/dice1.png";
                lag[1].src = "./img/dice5.png";
                break;
            case 5:
                lag[0].src = "./img/dice2.png";
                lag[1].src = "./img/dice3.png";
                break;
        }
        
    }
   
}