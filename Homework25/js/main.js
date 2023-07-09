function Swapi(param) {
    const {form, elId, elController, elPre, elLoader} = param;
    this.formSubmit = async (event) => {
        event.preventDefault();
        elLoader.classList.remove("d-none");
        const {getResponse} = await import('./helper.js');
        const urlStart = form.action;
        const urlEnd = (document.querySelector(".js--swapi_input")).value;
        const request = (urlStart + urlEnd).trim();
        const dataResponse = await getResponse(request);
        const regEx = /\//;

        if (regEx.test(urlEnd)) {
            const urlFix = urlEnd.split("/");
            elController.innerHTML = urlFix[0];
            elId.innerHTML = urlFix[1];
        } else {
            elController.innerHTML = urlEnd || "list";
        }

        if (dataResponse.status === "success") {
            elPre.innerHTML = JSON.stringify(dataResponse.data, null, 1);
            elId.classList.remove("d-none");
            elController.classList.remove("d-none");
        } else {
            elId.classList.add("d-none");
            elController.classList.add("d-none");
            elPre.innerHTML = dataResponse.status;
        }

    }
    this.init = function () {
        form.addEventListener("submit", this.formSubmit)
    }
}

const swapi = new Swapi({
    form: document.querySelector("#js--swapi_form"),
    elId: document.querySelector("#js--swapi_id"),
    elController: document.querySelector("#js--swapi_controller"),
    elPre: document.querySelector("#js--swapi_pre"),
    elLoader: document.querySelector("#js--swapi_loader")
})
swapi.init();
/*
Адрес АПИ получаем с экшена формы
Ендпоинт вводим в input
При успешном получении (status === ‘success’) выводим в отдельные блоки Id и controller
Не успешные запросы не должны прерывать логику работы JS
Результаты выводим в тег Pre с форматированием
Поле ввода может содержать пробелы как в начале, так и в конце
Сделать с использованием модулей, но без Webpack
На момент отправки запроса, показываем лоадер*/
