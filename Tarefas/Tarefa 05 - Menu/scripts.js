var container = document.getElementById('principal');
var divSaida = document.createElement('div');
var buttonPlus  = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function() {
	var $n = $(this)
		.parent(".counter")
		.parent(".card")
		.find(".qty");
	$n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".counter")
		.parent(".card")
		.find(".qty");
	var amount = Number($n.val());
	if (amount > 0) {
		$n.val(amount-1);
	}
});


$(document).ready(function () {
    $("#phone").mask("(99) 99999-9999");
});

function Calc() {
    
    container.appendChild(divSaida);
    container.style.height = '2070px';
    divSaida.style.marginLeft = '40px'
    divSaida.style.marginTop = '40px'
    divSaida.style.fontSize = '16px'
    divSaida.style.fontFamily = 'Arial';

    divSaida.innerHTML = `Caro(a) <strong>${document.getElementById('name').value}</strong>;<br><br><br> 
                        Seguem os dados do seu pedido.<br><br>
                        
                        O seu pedido é:<br><br>`;
                        showData();
}

var prods = [
    { id: 1, name: 'Bife com batata', price: 30},
    { id: 2, name: 'Coxa de Frango Crocante', price: 25},
    { id: 3, name: 'Carne de Panela', price: 22},
    { id: 4, name: 'Farofa', price: 10},
    { id: 5, name: 'Salada', price: 8},
    { id: 6, name: 'Torresmo', price: 12},
]

function showData() {
    var paymentInfo = document.createElement('ul');
    var quantities = document.getElementsByName('qty');
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    var soma = 0;

    for(let input of quantities){
        if(input.value > 0){
            var mult = input.value * prods[input.id-1].price;
            divSaida.innerHTML += `<li>Prato: ${prods[input.id-1].name} - Preço unitário: ${formatter.format(prods[input.id-1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(mult)}</li>`;
            soma += mult;
        }
    }  

    
    var total = document.createElement('h3');
    total.innerHTML = `<br>Preço final ${formatter.format(soma)}<br>`;
    divSaida.appendChild(total);

    return;
}