

function thayDoiHinh(){  
    let lag = document.getElementById("dice-1");
    console.log(lag);
    let lag2 = document.getElementById("dice-2");
    let hamRanDom = Math.floor(Math.random()*6) + 1;
    let hamRanDom2= Math.floor(Math.random()*6) + 1;
    console.log(hamRanDom);
    console.log(hamRanDom2);
    lag.src = "/img/dice"+ hamRanDom +".png";
    lag2.src ="/img/dice"+ hamRanDom2 +".png";
}