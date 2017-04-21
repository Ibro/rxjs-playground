import { Observable } from 'rxjs';


let source = Observable.fromEvent(document, 'mousemove');

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
