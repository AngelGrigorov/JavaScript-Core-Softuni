function fitness(day, type, hour) {
    let price = 0;
if(type === 'Fitness' && hour >= 8 && hour <= 15){
    switch(day){
        case 'Monday': price += 5; break;
        case 'Tuesday': price += 5; break;
        case 'Wednesday': price += 5; break;
        case 'Thursday': price += 5; break;
        case 'Friday': price += 5; break;
        case 'Saturday': price += 8; break;
        case 'Sunday': price += 8; break;
    }
}else if(type === 'Fitness' && hour >= 15 && hour <= 22){
    switch(day){
        case 'Monday': price += 7.5; break;
        case 'Tuesday': price += 7.5; break;
        case 'Wednesday': price += 7.5; break;
        case 'Thursday': price += 7.5; break;
        case 'Friday': price += 7.5; break;
        case 'Saturday': price += 8; break;
        case 'Sunday': price += 8; break;
    }
}else if(type === 'Sauna' && hour >= 8 && hour <= 15){
    switch(day){
        case 'Monday': price += 4; break;
        case 'Tuesday': price += 4; break;
        case 'Wednesday': price += 4; break;
        case 'Thursday': price += 4; break;
        case 'Friday': price += 4; break;
        case 'Saturday': price += 7; break;
        case 'Sunday': price += 7; break;
    }
}else if(type === 'Sauna' && hour >= 15 && hour <= 22){
    switch(day){
        case 'Monday': price += 6.5; break;
        case 'Tuesday': price += 6.5; break;
        case 'Wednesday': price += 6.5; break;
        case 'Thursday': price += 6.5; break;
        case 'Friday': price += 6.5; break;
        case 'Saturday': price += 7; break;
        case 'Sunday': price += 7; break;
    }
}else if(type === 'Instructor' && hour >= 8 && hour <= 15){
    switch(day){
        case 'Monday': price += 10; break;
        case 'Tuesday': price += 10; break;
        case 'Wednesday': price += 10; break;
        case 'Thursday': price += 10; break;
        case 'Friday': price += 10; break;
        case 'Saturday': price += 15; break;
        case 'Sunday': price += 15; break;
    }
}else if(type === 'Instructor' && hour >= 15 && hour <= 22){
    switch(day){
        case 'Monday': price += 12.5; break;
        case 'Tuesday': price += 12.5; break;
        case 'Wednesday': price += 12.5; break;
        case 'Thursday': price += 12.5; break;
        case 'Friday': price += 12.5; break;
        case 'Saturday': price += 15; break;
        case 'Sunday': price += 15; break;
    }
}
console.log(price);
}