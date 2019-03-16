function acceptance() {
let shippingCompany = $("input[name='shippingCompany']");
let productName = $("input[name='productName']");
let productQuantity = $("input[name='productQuantity']");
let productScrape = $("input[name='productScrape']");
let warehouse = $('#warehouse');

if(shippingCompany.val() && productName.val() && +productQuantity.val() && +productScrape.val()){
    if(Number(productQuantity.val()) - Number(productScrape.val()) > 0) {
        create();
        reset();
    }}
function reset() {
    shippingCompany.val("");
    productName.val("");
    productQuantity.val("");
    productScrape.val("");
}
function create() {
    let parsedHtml = $.parseHTML(`<div><p>[${shippingCompany.val()}] ${productName.val()} - ${Number(productQuantity.val()) - Number(productScrape.val())} pieces</p><button type="button">Out of stock</button></div>`);
    let el = $(parsedHtml);
    el.find('button[type="button"]').on('click', () => el.remove());
    warehouse.append(el);
}

}