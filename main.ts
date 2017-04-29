import {Observable} from 'rxjs';

let checkbox = document.getElementById('gates');
let checked = Observable
    .fromEvent(checkbox, 'change')
    .map((e: any) => e.target.checked);

let div = document.getElementById('output');

let source = Observable
    .interval(100) // interval starts from 0
    .scan((acc, val) => acc + val);

checked.filter(c => c === true)
    .flatMap(() => source.takeUntil(checked))
    .subscribe(value =>  div.innerText += ` ${value}`);
