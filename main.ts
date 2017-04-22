import { Observable } from 'rxjs';

let numbers = [1, 2, 3];

let source = Observable
    .from(numbers)
    .map(n => n * 2)
    .filter(n => n > 5);


source.subscribe(next, error, complete);

function next(value: number) {
    console.log('next: ', value);
}

function error(err: any) {
    console.log('error: ', err);
}

function complete() {
    console.log('complete');
}


