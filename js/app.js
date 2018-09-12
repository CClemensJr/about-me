"use strict";

var questions =         ['Do you think I like to wear sweaters?',
                         'Do you think I like to watch football?',
                         'Do you think I like to #netflixnchill?',
                         'Do you think I am hungry?',
                         'Do you think that I think you think web development is super special?'];

var answers =           [];
var score =             0;

alert('Welcome to my About Me page');
confirm('You are about to take a test about me. Please use yes or no answers. Do you understand?');

for (var i = 0; i < questions.length; i++)
{
    answers[i] = prompt(questions[i]);

    console.log('The user answered ' + answers[i].toUpperCase() + ' to Question ' + (i + 1) + '. ' + questions[i]);

    if (i === 0 && (answers[0].toUpperCase() === 'Y' || answers[0].toUpperCase === 'YES'))
    {
        score++;
    } else if (i === 1 && (answers[1].toUpperCase() === 'N' || answers[1].toUpperCase === 'NO'))
    {
        score++;
    } else if (i === 2 && (answers[2].toUpperCase() === 'N' || answers[2].toUpperCase === 'NO'))
    {
        score++;
    } else if (i === 3 && (answers[3].toUpperCase() === 'Y' || answers[3].toUpperCase === 'YES'))
    {
        score++;
    } else if (i === 4 && (answers[4].toUpperCase() === 'Y' || answers[4].toUpperCase === 'YES'))
    {
        score++;
    }
}

alert('It will be a moment while I tally your results.'); 

alert('You scored ' + score + ' out of 5 correctly.');


