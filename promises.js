const posts = [
    { title: "Post One", body: "This is Post One"},
    { title: "Post Two", body: "This is Post Two"}
];

function getPosts() {
    setTimeout(() => {
        let content = '';
        posts.forEach(post => {
            content += `<li>${post.title}</li>`
        });
        document.querySelector('#content').innerHTML = content;
    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

// createPost({ title: 'Post Three', body: 'This is Post Three' })
//     .then(getPosts)
//     .catch(err => console.log(err));

// Async/Await

async function init() {
    await createPost({ title: 'Post Three', body: 'This is Post Three' });

    getPosts();
}


// Async / Await / Fetch
async function fetchTodo() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const data = await res.json();
    
    console.log(data);
}


init();
fetchTodo();
