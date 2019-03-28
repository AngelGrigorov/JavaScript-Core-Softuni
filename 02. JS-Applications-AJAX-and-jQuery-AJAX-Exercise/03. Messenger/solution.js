function attachEvents() {
    const baseUrl = 'https://messanger-b36fe.firebaseio.com/messenger.json';
    $('#submit').click(submitMessage);
    $('#refresh').click(reloadPage);
function submitMessage() {
    let author = $('#author').val();
    let content = $('#content').val();
    let timestamp = Date.now();
    let message = {
        author,
        content,
        timestamp
    };
    $.ajax({
      url: baseUrl,
      method: 'POST',
      data: JSON.stringify(message),
    });
}
function reloadPage() {
    $.ajax({
       url: baseUrl,
       method: 'GET',
       success: loadMessages
    });
}
function loadMessages(data) {
    let allMessages = '';
    for(let message of Object.values(data)){
        allMessages += `${message.author}: ${message.content}\n`;
    }
    $('#messages').text(allMessages);
}


}