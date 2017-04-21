let button = document.getElementById('btnClick');

button.addEventListener('click', onButtonClick);

function onButtonClick(event: MouseEvent) {
    console.log(event);
}