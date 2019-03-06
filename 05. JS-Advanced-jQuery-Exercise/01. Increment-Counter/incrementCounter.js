function increment(selector) {
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

incrementBtn.addClass('btn');
addBtn.addClass('btn');
incrementBtn.attr('id','incrementBtn');
addBtn.attr('id','addBtn');
list.addClass('results');
$(selector).append(textArea);
$(selector).append(incrementBtn);
$(selector).append(addBtn);
$(selector).append(list);
incrementBtn.click(function () {
    textArea.val(+textArea.val()+ 1);
});
addBtn.click(function () {
   let li = $(`<li>${textArea.val()}</li>`) ;
   list.append(li);
});
}
