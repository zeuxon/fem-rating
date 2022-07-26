function ratingChange(ratingNumber) { 
    var mainRating = document.getElementById('mainRatings');
    var requiredRating = mainRating.children[ratingNumber-1];
    for (i = 0; i < 5; i++) {
        mainRating.children[i].removeAttribute('id');
        mainRating.children[i].classList.remove('active');
    }
    requiredRating.classList.add('active');
    requiredRating.setAttribute('id', 'active')
}

function ratingSubmit() {

    var mainRating = document.getElementById('mainRatings');
    for (i = 0; i < 5; i++) {
        if (mainRating.children[i].getAttribute('id') == 'active') {
            selectedRating = i;
        }
    }

    if(typeof selectedRating === 'undefined') {
        alert('Please select a rating');
        return;
    } else {
        var oldMain = document.getElementById('primary-main');
        oldMain.classList.add('next-main');
        var selectedText = document.getElementById('final-rating');
        selectedText.innerHTML = selectedRating+1;
    }

}