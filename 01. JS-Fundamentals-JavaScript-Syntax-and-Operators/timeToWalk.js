function solve(steps, footprint, speed){
    let distance = (steps * footprint);
    let speedInMetres = speed /60 / 60 * 1000;
    let time = Math.round(distance / speedInMetres);
   let rest = Math.floor(distance / 500);
   time += rest * 60;
   let seconds = time % 60;
   let minutes = (time - seconds) /60;
    let hour = Math.floor((time - seconds) /3600);
    function format(hour, minutes, seconds){
        if(hour < 10){
            hour = "0" + hour;
        }
        if(minutes < 10){
            minutes = "0" +minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        console.log(`${hour}:${minutes}:${seconds}`);
    }
    format(hour,minutes, seconds);


}
solve(4000, 0.60, 5);