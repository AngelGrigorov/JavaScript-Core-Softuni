function addItem() {
    let itemText = $('#newItemText');
    let itemVal = $('#newItemValue');
    let option = $(`<option value='${itemVal.val()}'>${itemText.val()}</option>`);
    $('#menu').append(option);
    itemText.val('');
    itemVal.val('');
}