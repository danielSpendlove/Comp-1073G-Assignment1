// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');
// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector('#choosenNoun1');
const choosenVerb = document.querySelector('#choosenVerb');
const choosenAdjective = document.querySelector('#choosenAdjective');
const choosenNoun2 = document.querySelector('#choosenNoun2');
const choosenSetting = document.querySelector('#choosenSetting');
// Constants for final buttons and p tags
const playback = document.querySelector('#playback');
const random = document.querySelector('#random');
const story = document.querySelector('#story');
const studentId = document.querySelector('#studentId');
const studentButton = document.querySelector('#myName');
// Variables for pre-defined arrays
var nouns1 = ['The turkey','Mom','Dad','The dog','My teacher','The elephant','The cat'];
var verbs = ['sat on','ate','danced with','saw','doesn\'t like','kissed'];
var adjectives = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];
var nouns2 = ['goat','monkey','fish','cow','frog','bug','worm'];
var settings = ['on the moon','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];

// Variables for count to grab array elements
var nouns1Count = 0;
var verbsCount = 0;
var adjectivesCount = 0;
var nouns2Count = 0;
var settingsCount = 0;

// Variables to set current word to. Set outside of their respective functions so that they are global variables and can be used in playback function
var displayNouns1;
var displayVerbs;
var displayAdjectives;
var displayNouns2;
var displaySettings;


/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    displayNouns1 = nouns1[nouns1Count];
    choosenNoun1.textContent = displayNouns1;
    // if-else to change count setting
    if (nouns1Count < 6){
        nouns1Count++; 
    }
    else{
        nouns1Count = 0;
    }
}

function verb_on_click() {
    // variable to get array element and displaying it
    displayVerbs = verbs[verbsCount];
    choosenVerb.textContent = displayVerbs;
    // if-else to change count setting
    if (verbsCount < 5){
        verbsCount++;
    }
    else{
        verbsCount = 0;
    }
}

function adjective_on_click() {
    // variable to get array element and displaying it
    displayAdjectives = adjectives[adjectivesCount];
    choosenAdjective.textContent = displayAdjectives;
    // if-else to change count setting
    if (adjectivesCount < 5){
        adjectivesCount++;
    }
    else{
        adjectivesCount = 0;
    }
}

function noun2_on_click() {
    // variable to get array element and displaying it
    displayNouns2 = nouns2[nouns2Count];
    choosenNoun2.textContent = displayNouns2;
    // if-else to change count setting
    if (nouns2Count < 6){
        nouns2Count++;
    }
    else{
        nouns2Count = 0;
    }
}

function setting_on_click() {
    // variable to get array element and displaying it
    displaySettings = settings[settingsCount];
    choosenSetting.textContent = displaySettings;
    // if-else to change count setting
    if (settingsCount < 5){
        settingsCount++;
    }
    else{
        settingsCount = 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    story.textContent = displayNouns1 + ' ' + displayVerbs + ' ' + displayAdjectives + ' ' + displayNouns2 + ' ' + displaySettings;
}
//Random array function. Used in Random_on_click button to get random value for each element
function randomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
// grabbing random element from arrays, concatenate and display
function random_on_click() {
    story.textContent = randomValue(nouns1) + ' ' + randomValue(verbs) + ' ' + randomValue(adjectives) + ' ' + randomValue(nouns2) + ' ' + randomValue(settings); 
}
//Function to display my name and student number
function display_StudentId() {
    studentId.textContent = 'Daniel Spendlove | 1228048'
}
/* Event Listeners
-------------------------------------------------- */
//Five main buttons
noun1Button.addEventListener('click',noun1_on_click);
verbButton.addEventListener('click',verb_on_click);
adjectiveButton.addEventListener('click',adjective_on_click);
noun2Button.addEventListener('click',noun2_on_click);
settingButton.addEventListener('click',setting_on_click);
//Playback button
playback.addEventListener('click',playback_on_click);
//Random Button
random.addEventListener('click',random_on_click);
//StudentId Button
studentButton.addEventListener('click',display_StudentId);