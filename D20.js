function RollD20(){

    console.log("placraps() started");
    var die1;
      die1 = Math.ceil(20 * Math.random())  ;
    document.getElementById("die1Res").innerHTML = die1;
    console.log("die1 is;" + die1);

    var diceSum = die1;

    if(diceSum==1){
        document.getElementById("gameRes").innerHTML = "Critical Loss", document.getElementById('image')
        .style.display = "block";;
        
    //step 4. did the dice come up double> are they even? if so you win
    }else if(die1==20){
        document.getElementById("gameRes").innerHTML = "Critical success";
    
    
    //step 5. outherwise push
    }else {
        document.getElementById("gameRes").innerHTML = "I hope thats what you needed";
    }

}
