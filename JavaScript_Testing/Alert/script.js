
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// var username = "Sohail";

// // username = "null";

// // alert(username);


// var var1 = 2;
// var var2 = 3;

// var result = "5" * "34";

// console.log(result);
// document.write("<h3>Hellow World</h3>");

// var species = prompt("What is your Name", "Sohail");

// console.log("name",typeof("name"))

// document.write("The Species is "+species);

var cities = ["Lhr", "Khi", "Isb", "Psh", "Qta"];

function addCity() {
    var city = prompt("Enter the City");
    cities.push(city);
}

function deleteCity() {
    // var city = prompt("Enter the City");
    cities.pop();
}

function displayCities() {
    for (var i = 0; i < cities.length; i++) {
        console.log("Cities are " + cities[i]);
    }
}

function searchCity() {
    var sCity = prompt("Enter the City to search");
    var matchFound = "no";
    for (var i = 0; i < cities.length; i++) {
        if (sCity === cities[i]) {

            matchFound = "yes";
            break;
        }
    }
    if (matchFound === "yes") {
        console.log(sCity + " City found");
    } else {
        console.log("City not found");
    }
}

// __________ 2dimensional array _____________-

var firstName = ["Ali", "Faisal", "Latif"];


var castName = ["Rayeen", "Dogar"];
var fullName = [];
function displayFull() {
    for (let i = 0; i < firstName.length; i++) {
        for (let j = 0; j < castName.length; j++) {
            fullName.push([firstName[i] + " " + castName[j]]);
            console.log("Name : " + firstName[i] + " " + castName[j]);
        }
    }
}

function displayFullName() {
    for (let x = 0; x < fullName.length; x++) {
        console.log("Full Names are : " + fullName[x]);
    }
}

// __________________ Split _______________

function splitArray() {

    var inputArray = prompt("Enter the Word to split");

    var splittedArray = inputArray.split("");
    console.log("Splitted Array : " + splittedArray);
}

// __________________ Dice _______________

function throwDice() {
    var inputDice = (Math.random() * 5) + 1;
    console.log("Dice num: " + Math.round(inputDice));
}

// ________________ ParseInt ______________

function pInt() {
    var inputString = prompt("Enter the number to be converted");
    var cInt = parseInt(inputString);
    console.log(10 + inputString);
    console.log(10 + cInt);
}

// _________________ ParseFloat ___________________

function pFloat() {
    var inputString1 = prompt("Enter float number to be converted");
    var cFlt = parseFloat(inputString1);
    console.log(10 + inputString1);
    console.log(10 + cFlt);
    console.log(num3);
}

// _________________ Converting to Number ___________________

function numFloat() {
    var inputString2 = prompt("Enter float number to be converted");
    num3 = Number(inputString2); // ____________-using Number instead of parseFloat
    console.log(inputString2 + 10);
    console.log(num3 + 10);
}

// _________________ type of ___________________

function ctypeOf() {
    inputString3 = prompt("Enter float number to be converted");
    num4 = typeof (inputString3);
    console.log(num4);
}

// ___________________ Date & Time__________________
var date;
function gDate() {
    date = new Date();
    console.log(date);
}

function savedDate() {
    console.log(date);
}

var time;
function gTime() {
    time = new Date().getTime();
    console.log(time);
}

function savedTime() {
    console.log(time);
}

var DOB2;
function inputDOB() {
    var eDate = prompt("Enter Date of Birth mm,dd,yyyy", new Date());
    var DOB = new Date(eDate);
    DOB2 = Date.parse(eDate);
    console.log("Year is " + DOB.getDay());
    console.log("eDate " + DOB2);
}

function gYear() {
    console.log("eDate " + DOB2);
    console.log("Year is " + new Date(DOB2).getFullYear());
}
function gcTime() {
    console.log("eDate " + DOB2);
    console.log("Current Time is " + new Date(DOB2).getDate() + " " + new Date(DOB2).getMonth() + " " + new Date(DOB2).getFullYear());
}

function setMonth() {
    var month = prompt("Enter the Month ", new Date().setMonth());
    console.log("Month is " + new Date(month).getMonth());
}


//----------------- Function return Multiple values ------------
function mReturns() {
    function mValues() {
        var a = 5;
        var b = 6;

        return {
            a, b
        }
    }
    console.log(mValues().a);
    console.log(mValues().b);
}

// _________________ Index of ___________________

function indexOf() {
    inputString = prompt("Enter String to check");
    inputCharacter = prompt("Enter the character to check the Index of")
    console.log(inputString.indexOf(inputCharacter));
}
// _________________ Back Tick Variable _________________

function bTick(){
    var fName = "Sohail";
    var lName = "Ishaque";
    console.log(`${fName} ${lName}`); //Does the same as below but more efficiently
    console.log(fName+" "+lName);
}

// ______________ DOM __________________
function bDOM(){
    let _document = document;
    console.log(`${_document} is document`);
}

function bTag(){
    let eleH1 = document.getElementsByTagName('h1');
    console.log(eleH1);
}

function qSelector(){
    let eleH2 = document.querySelector('h2').innerText; //using Query selector instead of getElement
    console.log(eleH2);
}

function q2Selector(){
    let eleH2 = document.querySelector('h2').innerText = "Pakistan Zindabad"; //Inener text changes the text in h2 
    console.log(eleH2);
}

function bClassName(){
    let eleH1 = document.getElementsByClassName('class5');
    console.log(eleH1);
}

//_____________ Creating DOM Element _____________

function cPElement(){
    let p = document.createElement("p");
    console.log(p);
}