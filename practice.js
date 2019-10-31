function toggleCard(id1, id2){
    var cardFront = document.getElementById(id1);
    var cardBack = document.getElementById(id2);
    if (cardFront.style.visibility === 'visible'){
	cardFront.style.visibility = 'hidden';
	cardBack.style.visibility = 'visible';
    }
    else {
	cardFront.style.visibility = 'visible';
	cardBack.style.visibility = 'hidden';
    }
}
