const input = document.querySelector('input');

input.addEventListener('click', (e) => {
    const body = document.querySelector('body');

    if(input.checked){
        body.style.backgroundColor = 'black';
    }
    else{
        body.style.backgroundColor = 'white';
    }

})