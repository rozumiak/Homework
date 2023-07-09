const regex = /^([1-9][0-9]?)$/
const _input = document.querySelector("#js--input");
const _data = document.querySelector("#js--data");
const _dataComments = document.querySelector("#js--comments");

_input.addEventListener("input", function () {
    const inputId = _input.value;
    const urlPost = `https://jsonplaceholder.typicode.com/posts/${inputId}`;
    const urlPostComments = `https://jsonplaceholder.typicode.com/posts/${inputId}/comments`;
    if (regex.test(inputId)) {
        _dataComments.innerHTML = '';
        const promise = fetch(urlPost);
        promise
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                _data.innerHTML = `<ul id="post">` +
                    `<li>UserId:${data.userId}</li>` +
                    `<li>IdPost:${data.id}</li>` +
                    `<li>Title:${data.title}</li>` +
                    `<li>Post:${data.body}</li>` +
                    `<button id="js--get-comment">Get Comment</button>` +
                    `</ul>`;
                const _btnComment = document.querySelector("#js--get-comment");
                _btnComment.addEventListener("click", () => {
                    const promiseComments = fetch(urlPostComments);
                    promiseComments
                        .then(responseComment => responseComment.json())
                        .then(dataComments => {
                            _dataComments.innerHTML = JSON.stringify(dataComments);
                        }).catch(error => {
                        _dataComments.innerHTML = error;
                    });
                })
            }).catch(error => {
            _data.innerHTML = error;
        });
    } else {
        _data.innerHTML = `Ошибка! Пост під номером ${inputId} не інсує`;
        _dataComments.innerHTML = `Ошибка! Коментарів у пості під номером ${inputId} не інсує`;
    }
})