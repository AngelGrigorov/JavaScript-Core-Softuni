function attachEventsListeners() {
    let days = $('#days');
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');
    $('#daysBtn').click(function () {
        hours.val(Number(days.val())* 24);
        minutes.val(Number(days.val()) * 1440);
        seconds.val(Number(days.val()) * 86400);
    });
    $('#hoursBtn').click(function () {
        days.val(Number(hours.val())/ 24);
        minutes.val(Number(hours.val()) *60);
        seconds.val(Number(hours.val())* 3600);

    });
    $('#minutesBtn').click(function () {
        days.val(Number(minutes.val())/ (24 * 60));
        hours.val(Number(minutes.val())  / 60);
        seconds.val(Number(minutes.val())* 60);

    });
    $('#secondsBtn').click(function () {
        days.val(Number(seconds.val())/ (24 * 60 * 60));
        hours.val(Number(seconds.val())  / (60 * 60));
        minutes.val(Number(seconds.val())/ 60);

    });
}