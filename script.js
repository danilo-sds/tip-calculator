function calculateTip(event) {
    //Cancela o recarregamento do site
    event.preventDefault();

    //Pega os valores dos inputs
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('service-qual').value;
    let numOfPeople = document.getElementById('people').value;

    //Serve para validação dos inputs
    if (bill == '' | serviceQual == 0) {
        alert("Por favor, preencha os valores")
        return;
    }

    //Verificar o número de pessoas
    if (numOfPeople == "" | numOfPeople <= 1) { //Se o número de pessoas for 0 ou 1, vai receber 1
        numOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block"; //Se for mais de 1 pessoa, o CADA aparece
    }

    //Calculo da gorjeta
    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2); //Fixa duas casas depois da vírgula
    document.getElementById('tip').innerHTML = total; //Adiciona o resultado do total no HTML
    document.getElementById('total-tip').style.display = "block"; //Mostra o texto
}

//Tira da tela, o texto do total tips
document.getElementById('total-tip').style.display = "none";
document.getElementById('each').style.display = "none";

//Fica de olho no que acontece com o submit
document.getElementById('form-tips').addEventListener('submit', calculateTip);