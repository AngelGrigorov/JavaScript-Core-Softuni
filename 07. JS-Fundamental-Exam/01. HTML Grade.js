function solve(examPoint, homeworks, allHomeWorks){
let maxExamPoint = 400;
let maxPoints = 100;
if(examPoint === 400){
    console.log(6..toFixed(2));
}else{
let totalPoints = (((examPoint/maxExamPoint) * 90))+(homeworks/allHomeWorks)*10;
    let grade = 3 + 2 *((totalPoints - (maxPoints / 5)) / (maxPoints / 2));
    if(grade < 3){
        console.log(2..toFixed(2));
    }else if(grade > 6){
        console.log(6..toFixed(2));

    }else {
        console.log(grade.toFixed(2));
    }
}
}
solve(300, 10, 10);