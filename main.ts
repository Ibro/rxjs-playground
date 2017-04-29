import {Observable} from 'rxjs';

let source = Observable
    .interval(100) // interval starts from 0
    .take(5) // take first 5
    .flatMap(n => [n * 1, n * 2, n * 3]);

source.subscribe((value) => {
    console.log('in next. Value: ', value);
});
