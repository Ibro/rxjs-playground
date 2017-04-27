import {Observable} from 'rxjs';

let btnFun = document.getElementById('btnFun');
let divMain = document.getElementById('divMain');

let clicksSource = Observable.fromEvent(btnFun, 'click');

clicksSource
    .scan((s) => <number>s + 1, 0)
    .buffer(clicksSource.throttleTime(500))
    .forEach(number => addStuffToHtml(number));


function addStuffToHtml(number) {
    let span = document.createElement('span');
    span.innerText = ` ${number}`;

    divMain.appendChild(span);
}
