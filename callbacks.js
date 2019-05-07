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

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        // console.log(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is Post Three' }, getPosts);