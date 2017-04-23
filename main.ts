import {Observable } from 'rxjs';

let words = ['coding blast', 'badword', 'coding', 'blast'];

let source = Observable.create(observer =>{
    for (let word of words) {
        if (word === 'badword') {
            observer.error('Bad word!');
        }

        observer.next(word);
    }

    observer.complete();
});

source.subscribe(next, error);

function next(value: any) {
    console.log('next: ', value);
}

function error(err) {
    console.log('error: ', err);
}

