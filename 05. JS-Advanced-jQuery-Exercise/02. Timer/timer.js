function timer() {
   let hours = $('#hours');
   let minutes = $('#minutes');
   let seconds = $('#seconds');
   let startBtn = $('#start-timer');
   let stopBtn = $('#stop-timer');
let time;
let run = false;
   startBtn.click(function (){
       if(!run) {
           time = setInterval(step, 1000);
       run = true;
       }
   });
    stopBtn.click(function () {
      clearInterval(time);
      run = false;
    });
function step() {
if(+seconds.text() < 9){
    let secs = +seconds.text() + 1;
    seconds.text('0' + secs);
}else{
    seconds.text(+seconds.text() + 1);
}
if(+seconds.text() > 59){
    seconds.text('00');
    if(+minutes.text() < 9){
        let mins = +minutes.text() + 1;
        minutes.text('0' + mins);
    }else{
        minutes.text(+minutes.text() + 1);
    }
}
    if(+minutes.text() > 59){
        minutes.text('00');
        if(+hours.text() < 9){
            let hrs = +hours.text() + 1;
            hours.text('0' + hrs);
        }else{
            hours.text(+hours.text() + 1);
        }
    }
}

}