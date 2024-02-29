function media(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var num3 = document.getElementById("num3").valueAsNumber;
    var res = (num1+num2+num3)/3;
  
    var x = document.getElementById("resMedia");
    if(res >= 7){
        x.style.color = "green";
    } 
    else 
        x.style.color = "red";
    
    document.getElementById("resMedia").textContent = res.toFixed(2);
}


