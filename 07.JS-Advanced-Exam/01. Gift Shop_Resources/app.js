function solution() {
    let toyType = $('#toyType');
    let toyPrice = $('#toyPrice');
    let toyDescription = $('#toyDescription');
    let button = $('button');
    let section = $('#christmasGiftShop');
    button.click(function () {

        if(toyType.val() !== "" && !isNaN(toyPrice.val()) && toyPrice.val() !== "" && toyDescription.val() !== ''){

            let div = $(`<div class='gift'></div>`);
            let img = $(`<img src="gift.png">`);
            let h2 = $(`<h2>${toyType.val()}</h2>`);
            let p = $(`<p>${toyDescription.val()}</p>`);
            let btn = $(`<button>Buy it for $${toyPrice.val()}</button>`).click(function () {
                div.remove();
            });
            div.append(img).append(h2).append(p).append(btn);
            section.append(div);
        }

    });
    toyType.val("");
    toyPrice.val("");
    toyDescription.val("");

}