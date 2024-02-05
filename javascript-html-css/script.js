function soma(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var res = num1 + num2;
    document.getElementById("resSoma").textContent = res.toFixed(2);
}
function subtracao(){
    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;
    var res = num3 - num4;
    document.getElementById("resSub").textContent = res.toFixed(2);
}
function divisao(){
    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;
    var res = num5 / num6;
    document.getElementById("resDiv").textContent = res.toFixed(2);
}
function multiplicacao(){
    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;
    var res = num7 * num8;
    document.getElementById("resMult").textContent = res.toFixed(2);
}
function media(){
    var med1 = document.getElementById("med1").valueAsNumber;
    var med2 = document.getElementById("med2").valueAsNumber;
    var res = med1 * med2;
    document.getElementById("resMed").textContent = res.toFixed(2);
}




