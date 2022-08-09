$(document).ready(function() {

// Set variables for time and boxes
    
var timeEl = $('<p>');
var dayEl = $('<p>');
var box1 = $('#div1');
var box2 = $('#div2');
var box3 = $('#div3');
var box4 = $('#div4');
var box5 = $('#div5');
var box12 = $('#div12');
var box11 = $('#div11');
var box10 = $('#div10');
var box9 = $('#div9');    
  

// Set variables for buttons

var button9 = $('#btn9');
var button10 = $('#btn10');
var button11 = $('#btn11');
var button12 = $('#btn12');
var button1 = $('#btn1');
var button2 = $('#btn2');
var button3 = $('#btn3');
var button4 = $('#btn4');
var button5 = $('#btn5');
var clearBtn = $('#clearBtn');

// For loop variables

var boxes = [box1, box2, box3, box4, box5, box9, box10, box11, box12]; 
var buttons = [button1, button2, button3, button4, button5, button9, button10, button11, button12];
var entries = ['Entry1', 'Entry2', 'Entry3', 'Entry4', 'Entry5', 'Entry9', 'Entry10', 'Entry11', 'Entry12']; 

// Save input in local storage

for (let i = 0; i < boxes.length && entries.length; i++) {
boxes[i].val(localStorage.getItem(entries[i]));
};


// Clear input in local storage 

clearBtn.on('click', clear);
function clear() {
    localStorage.clear();
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].val('')
}};


// Import moment 

var timeNow = parseInt(moment().format('HH'));
setInterval(tick, 1000);
setInterval(checkTime, 600000);

// Add current's date to jumbotron

function tick() {
dayEl.text(moment().format('LL'));
timeEl.text(moment().format('hh:mm:ssA'));
$('.jumbotron').append(dayEl);
$('.jumbotron').append(timeEl);
}
tick();

// Change box's color depending on current time using for loop

function checkTime() { 
    for (let i = 0; i < boxes.length; i++) {
        if (parseInt(boxes[i].attr('data-hour')) > timeNow) {
        boxes[i].removeClass('past present future');
        boxes[i].addClass('future');
        } else if (parseInt(boxes[i].attr('data-hour')) === timeNow) {
        boxes[i].removeClass('past present future');
        boxes[i].addClass('present');
        } else {
        boxes[i].removeClass('past present future');
        boxes[i].addClass('past');
}}};

// Store individual box's input in local storage using for loop

for (let i = 0; i < buttons.length; i++)
buttons[i].on('click', function() {
    event.preventDefault(); 
    for (let i = 0; i < boxes.length && entries.length; i++) {    
    if (boxes[i].val() !== '') {
    localStorage.setItem(entries[i], boxes[i].val());
}}});

checkTime();
});