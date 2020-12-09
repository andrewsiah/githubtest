let counter = 0;
function count() {
    counter++;
    // Changes the inner HTML content of #number into counter
    document.getElementbyId('number').innerHTML = counter;

    if (counter%10===0){
        alert(`The count is now ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#counter').onclick = count;
})