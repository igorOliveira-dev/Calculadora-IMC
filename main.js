var imcInfo = document.getElementById('imcInfo');
var btnCalcular = document.getElementById('btnCalcular');
var returnInfo = document.getElementById('returnInfo');

btnCalcular.addEventListener('click', function() {
    event.preventDefault();
    imcInfo.style.display = "block"
})

returnInfo.addEventListener('click', function() {
    imcInfo.style.display = "none"
})

var imcBruto = 0;
var imcParagrafo = document.getElementById('imcParagrafo');
var pesoIdealParagrafo = document.getElementById('pesoIdealParagrafo');

btnCalcular.addEventListener('click', function() {
    var imcBruto = (peso.value / (altura.value * altura.value));
    
    if (imcBruto !== NaN && !isNaN(imcBruto)) {
        imcParagrafo.innerHTML = "o seu IMC é: " + imcBruto;

        if (imcBruto < 18.5) {
            pesoIdealParagrafo.innerHTML = "e você está abaixo do peso"
            paragrafos.style.backgroundColor = "red";
        } else if (imcBruto < 24.9) {
            pesoIdealParagrafo.innerHTML = "e você está no peso ideal"
            paragrafos.style.backgroundColor = "green";
        } else if (imcBruto < 29.9) {
            pesoIdealParagrafo.innerHTML = "e você está no sobrepeso"
            paragrafos.style.backgroundColor = "orange";
        } else if (imcBruto < 34.9) {
            pesoIdealParagrafo.innerHTML = "e você tem obesidade 1"
            paragrafos.style.backgroundColor = "red";
        } else if (imcBruto < 40) {
            pesoIdealParagrafo.innerHTML = "e você tem obesidade 2 ou 3"
            paragrafos.style.backgroundColor = "rgb(150, 0, 0)";
        } else {
            pesoIdealParagrafo.innerHTML = "e você tem obesidade mórbida"
            paragrafos.style.backgroundColor = "rgb(70, 0, 0)";
        }
    }

    if (idade.value < 18) {
        alert('menores de 18 anos podem ter variações no peso ideal devido ao desenvolivmento constante do corpo');
    }
})