import {Observable} from "rxjs";

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

let divPosts = document.getElementById('posts');
let btnGetPosts = document.getElementById('btnGetPosts');

let click = Observable.fromEvent(btnGetPosts, "click");


function renderPosts(posts) {
    posts.forEach(function (post) {
        let divPost = document.createElement('div');
        divPost.innerText = `id: ${post.id}, title: ${post.title}`;
        divPosts.appendChild(divPost);
    })
}

let source = click
    .flatMap(e => fetchData(apiEndpoint))
    .take(5);


let subscribtion = source.subscribe(next, error, complete);

function next(posts: any) {
    console.log(posts);
    renderPosts(posts);
}

function error(err: any) {
    console.log('error: ', err);
}

function complete() {
    console.log('complete');
}

export function fetchData(url: string) {
    return Observable
        .fromPromise(
            fetch(url).then(r => r.json())
        );
}

