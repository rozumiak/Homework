const $imgItem = $(".js--gal_item");
const $modal = $(".js--modal");
const $btnClose = $(".js--modal__close");
const $modalContent = $(".js--modal__content");

$imgItem.on("click", event => {
    $modal.toggle(".modal.active");
    let $currentImg = event.target.src;
    $modalContent.find("img").attr("src", $currentImg)
})
$btnClose.on("click", () => {
    $modal.toggle(".modal.active");
})