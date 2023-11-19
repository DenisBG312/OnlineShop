document.addEventListener('DOMContentLoaded', function () {
    window.MakeUpdateQtyButtonVisible = function (id, visible) {
        const updateQtyButton = document.querySelector("button[data-itemId='" + id + "']");

        if (updateQtyButton) {
            updateQtyButton.style.display = visible ? "inline-block" : "none";
        } else {
            console.error(`Button with data-itemId='${id}' not found.`);
        }
    };
});
