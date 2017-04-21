import { Observable, Observer } from 'rxjs';

class SimpleObserver implements Observer<string> {
    next(value: string) {
        console.log('next: ', value);
    }

    error(err: any) {
        console.log('error: ', err);
    }

    complete() {
        console.log('complete');
    }
}

let words = ['coding blast', 'coding', 'blast'];

let source = Observable.from(words);

let observer = new SimpleObserver();

source.subscribe(observer);
