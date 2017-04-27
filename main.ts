import {Observable} from 'rxjs';

let numbers = [1, 2, 3, 4];

let source = Observable
    .from(numbers)
    .map(n => n * 2)
    .filter(n => n > 5)
    .reduce((accumulator, currentValue) => accumulator + currentValue);


source.subscribe(value => {
        console.log('next: ', value);
    }, err => {
        console.log('error: ', err);
    }, () => {
        console.log('complete');
    });

