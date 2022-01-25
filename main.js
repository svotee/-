let weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let days = ['pn','wt','sr','ct','pt','sb','ws']

let print = document.querySelector('.printDate');
let printh = document.querySelector('.printHours');
let printm = document.querySelector('.printMinutes');
let prints = document.querySelector('.printSeconds');

let funcWeek = function(){
    date = new Date;
    let b = date.getDay();
    let a = days[b-1];
    let day = document.querySelector('.'+a);
    day.classList.add("currentday")
    document.querySelector('.sb').classList.add("weekends")
    document.querySelector('.ws').classList.add("weekends")
}
funcWeek()

let funcDate= function() {
    print.innerHTML = date.getFullYear() +' / '+ (Number(date.getMonth())+1) +' / ' + date.getDate();

}
let funcHours = function() {
    let currHour = date.getHours();
    if (currHour == 1 || currHour == 21){
        printh.innerHTML = date.getHours() + ' час'
    }
    else if (currHour == 2 || currHour == 3 || currHour == 4 || currHour == 22 || currHour == 23){
        printh.innerHTML = date.getHours() + ' часа'
    }
    else {
        printh.innerHTML = date.getHours() + ' часов'
    }
}
let funcMinutes = function() {
    let currMinute = date.getMinutes();
    if (currMinute == 1 || currMinute == 21 || currMinute == 31 || currMinute == 41 || currMinute == 51){
        printm.innerHTML = date.getMinutes() + ' минута'
    }
    else if (currMinute == 22 || currMinute == 23 || currMinute == 24 || currMinute == 32 || currMinute == 33 || currMinute == 34 || currMinute == 42 || currMinute == 43 || currMinute == 44 || currMinute == 52 || currMinute == 53 || currMinute == 54 || currMinute == 2 || currMinute == 3 || currMinute == 4 ){
        printm.innerHTML = date.getMinutes() + ' минуты'
    }
    else {
        printm.innerHTML = date.getMinutes() + ' минут'
    }
}
let funcSeconds = function() {
    let currMinute = date.getSeconds();
    if (currMinute == 1 || currMinute == 21 || currMinute == 31 || currMinute == 41 || currMinute == 51){
        prints.innerHTML = date.getSeconds() + ' секунда'
    }
    else if (currMinute == 22 || currMinute == 23 || currMinute == 24 || currMinute == 32 || currMinute == 33 || currMinute == 34 || currMinute == 42 || currMinute == 43 || currMinute == 44 || currMinute == 52 || currMinute == 53 || currMinute == 54 || currMinute == 2 || currMinute == 3 || currMinute == 4 ){
        prints.innerHTML = date.getSeconds() + ' секунды'
    }
    else {
        prints.innerHTML = date.getSeconds() + ' секунд'
    }
}


let logger = function(){
    date = new Date;
    funcDate();
    funcHours();
    funcMinutes();
    funcSeconds();
}


setInterval(logger, 500)
