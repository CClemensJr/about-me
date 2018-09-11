"use strict";

var questions = ['Do you think I like to wear sweaters?',
                 'Do you think I like to watch football?',
                 'Do you think I like to #netflixnchill?',
                 'Do you think I am hungry?',
                 'Do you think that I think you think web development is super special?'];

var answers       = [];
var correctFormat = false;
var score         = 0;

var checkInput = function (input) 
{
    if ( (answers[i].toUpperCase() === 'y') || (answers[i].toUpperCase() === 'yes') ||
         (answers[i].toUpperCase() === 'n') || (answers[i].toUpperCase() === 'no') )
    {
        return correctFormat = true;
    } else {
        return correctFormat;  
    }
}

alert('Welcome to my about me page');
confirm('You are about to take a test about me. Please use yes or no answers. Do you understand?');

for (var i = 0; i < questions.length; i++)
{
    answers[i] = prompt(questions[i]);
    //console.log(answers[i]);
    
    if (checkInput(answers[i]))
    {
        alert('This input is valid');
    } else {
        alert('This input is invalid');
    }

    /*if ( (answers[i].toUpperCase() !== 'y') || (answers[i].toUpperCase() !== 'yes') ||
         (answers[i].toUpperCase() !== 'n') || (answers[i].toUpperCase() !== 'no') )
    {
        alert('This is a yes or no question. Please answer appropriately.');

        answers[i] = prompt(questions[i]);
    } else {
        alert('You answered ' + answers[i] + ' to this question.');
        console.log('The user answered ' + answers[i] + ' to the question "' + questions[i] + '."');
    }*/
}





/*var wantToAnswer = prompt(questions[0]);

if ( (wantToAnswer.toUpperCase() === 'n')  || (wantToAnswer.toLowerCase() === 'n') || 
     (wantToAnswer.toUpperCase() === 'No') || (wantToAnswer.toLowerCase() === 'No') )
{
    alert('Fine, here are the questions you are missing out on!');
} else if ( (wantToAnswer.toUpperCase() === 'y')   || (wantToAnswer.toLowerCase() === 'y') || 
            (wantToAnswer.toUpperCase() === 'Yes') || (wantToAnswer.toLowerCase() === 'Yes') ) 
{
    alert('Thank you, we shall continue.');
} else {
    alert('Please provide a yes or no answer');
}

var wearSweaters = prompt(questions[1]);

if ( (wearSweaters.toUpperCase() === 'n')  || (wearSweaters.toLowerCase() === 'n') || 
     (wearSweaters.toUpperCase() === 'No') || (wearSweaters.toLowerCase() === 'No') )
{
    alert('Fine, here are the questions you are missing out on!');
} else if ( (wearSweaters.toUpperCase() === 'y')   || (wearSweaters.toLowerCase() === 'y') || 
            (wearSweaters.toUpperCase() === 'Yes') || (wearSweaters.toLowerCase() === 'Yes') ) 
{
    alert('Thank you, we shall continue.');
} else {
    alert('Please provide a yes or no answer');
}*/
