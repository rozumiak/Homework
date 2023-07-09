document.addEventListener("DOMContentLoaded", function () {
    let _slider = document.querySelector(".slider");
    let _prev = document.querySelector(".js--prev");
    let _next = document.querySelector(".js--next");

    let offset = 0;

    _next.addEventListener("click", function () {
        offset += 215;
        if (offset === 645) {
            _next.style.visibility = "hidden";
            _prev.style.visibility = "visible";
        } else {
            _prev.style.visibility = "visible";
        }

        _slider.style.right = offset + 'px';

    })
    _prev.addEventListener("click", function () {
        offset -= 215;
        if (offset === 0) {
            _prev.style.visibility = "hidden";
            _next.style.visibility = "visible";
        } else {
            _next.style.visibility = "visible";

        }
        _slider.style.right = offset + 'px';

    })

})