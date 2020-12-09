// Just added a layer where a condition and function is included
// condition being all DOM content loaded, function encapsulated
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){
        // Assigns name to the value of #name 
        const name = document.querySelector('#name').value;
        // Can use .value to find the value typed into any form
        // Forms can be use as REST request, or Javascript interactor
        alert(`Hello, ${name}`);
    };
})