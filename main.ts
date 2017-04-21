import { Observable, Observer } from 'rxjs';

let words = ['coding blast', 'badword', 'coding', 'blast'];

let source = Observable.create(function observerFunction(observer: Observer<string>) {
    for (let word of words) {
        observer.next(word);
    }

    observer.complete();
});

source.subscribe(next, error, complete);

function next(value: any) {
    console.log('next: ', value);
}

function error(err: any) {
    console.log('error: ', err);
}

function complete() {
    console.log('complete');
}
