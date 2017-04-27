import {Observable} from 'rxjs';

let source = Observable
    .interval(1000)
    .take(6)
    .publish()
    .refCount();

source.subscribe(x => console.log('sub 1: ', x));

setTimeout(function () {
    source.subscribe(x => console.log('                sub 2: ', x));
}, 2700);
