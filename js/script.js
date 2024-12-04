var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

const button = document.getElementById('myButton');
const tooltip = document.getElementById('tooltip');
button.addEventListener('click', () => {
    alert('Welcome To Egypt!\n تم نسخ النص');  
});



const button1 = document.getElementById('myButton2');
const tooltip1 = document.getElementById('tooltip2');
button1.addEventListener('click', () => {
    alert('Welcome To Egypt!\n تم نسخ النص'); 
});


const button2 = document.getElementById('myButton3');
const tooltip2 = document.getElementById('tooltip3');
button2.addEventListener('click', () => {
    alert('Welcome To Egypt!\n تم نسخ النص'); 
});

