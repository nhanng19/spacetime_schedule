# Work Day Scheduler

![](./assets/img/front.gif)

## The Process
- Creat an HTML file that imports JS Moment library, Bootstrap, CSS, and JavaScript
- Provide a space theme with our CSS file
- Create a JavaScript file that stores users' input in local storage
- Modify HTML file to dynamically work with JavaScript file and CSS file

HTML File

```
Link the following files/library:
CSS file, Boostrap Library, Font Awesome Library, Javascript File, Moment, and jQuery Library
```

CSS File

```
Use galaxy gif as background image to add space theme
Change font style
Change box's coloring
```
Specific functions in JavaScript file

Save input in local storage:

```javascript
for (let i = 0; i < boxes.length && entries.length; i++) {
boxes[i].val(localStorage.getItem(entries[i]));
};
```

Add current's date to jumbotron

```javascript
function tick() {
dayEl.text(moment().format('LL'));
timeEl.text(moment().format('hh:mm:ssA'));
$('.jumbotron').append(dayEl);
$('.jumbotron').append(timeEl);
}
tick();
```

Change box's color depending on current time using for loop

```javascript
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
```

Store individual box's input in local storage using for loop

```javascript
for (let i = 0; i < buttons.length; i++)
buttons[i].on('click', function() {
    event.preventDefault(); 
    for (let i = 0; i < boxes.length && entries.length; i++) {    
    if (boxes[i].val() !== '') {
    localStorage.setItem(entries[i], boxes[i].val());
}}});
```


## The Result
After importing bootstrap, jQuery, and Moment to our HTML file along with dynamically coding Javascript and  refractoring CSS, we were able to provide a clean, interactive, and functional schedule planner. 

This project was uploaded to GitHub at the following repository link:
[https://github.com/nhanng19/spacetime_schedule](https://github.com/nhanng19/spacetime_schedule)

Deployed Web Application Link:
[https://nhanng19.github.io/spacetime_schedule/](https://nhanng19.github.io/spacetime_schedule/)
