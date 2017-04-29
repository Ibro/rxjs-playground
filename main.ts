import {Observable} from 'rxjs';

let source = Observable
    .interval(100) // interval starts from 0
    .take(5) // take first 5
    .flatMap(n => Observable.of(n + 10));

source.subscribe((value) => {
    console.log('in next. Value: ', value);
});
