
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

function bTick() {
    var fName = "Sohail";
    var lName = "Ishaque";
    console.log(`${fName} ${lName}`); //Does the same as below but more efficiently
    console.log(fName + " " + lName);
}

// ______________ DOM __________________
function bDOM() {
    let _document = document;
    console.log(`${_document} is document`);
}

function bTag() {
    let eleH1 = document.getElementsByTagName('h1');
    console.log(eleH1);
}

function qSelector() {
    let eleH2 = document.querySelector('h2').innerText; //using Query selector instead of getElement
    console.log(eleH2);
}

function q2Selector() {
    let eleH2 = document.querySelector('h2').innerText = "Pakistan Zindabad"; //Inener text changes the text in h2 
    console.log(eleH2);
}

function bClassName() {
    let eleH1 = document.getElementsByClassName('class5');
    console.log(eleH1);
}


// __ using 2 function to assign p to div _________

function pToBox() {
    let p;
    let box;
    //_____________ Creating DOM Element _____________

    // function cPElement() {
    p = document.createElement("P");

    p.textContent = "This is text added through Java using createElement";
    console.log(p);
    // }

    // ________________ Selecting Box Element __________
    // function cBoxElement() {
    box = document.querySelector('.box'); //This will Select the div with the class box...

    console.log(box);
    // }
    box.appendChild(p);  // This will Add the element to dom. now the div has a child p displayed on DOM  

}
// -----------------------------------------------------------
// ________________ Button  __________
function cButton() {

    // This will pull the first button from DOM and add event to it.
    let button = document.querySelector('button');
    button.addEventListener("click", console.log("Button Clicked", firstButton));
    button.addEventListener('mouseout', hover); // _______ Calling multiple events on a single button ____

}
function firstButton() {
    console.log("abd");
}

function hover() {
    alert("Hover called");
}

// _______________ form submit _____________________
function cForm() {

    // This will pull the first form from DOM and add event to it.
    let form = document.querySelector("form");

    form.addEventListener("submit", submitFun);

    function submitFun(e) {
        e.preventDefault();
        alert(submitFun);
    }
}
// __________________ ul Posting _______________
function cLiCreation() {
    // cities array already delcared above...
    let cityList = document.createElement("ul");
    cities.map(function (data, index) {
        let city = document.createElement("li");
        city.textContent = data;
        cityList.appendChild(city);
    })
    box = document.querySelector('.box');
    box.appendChild(cityList);

    let ul = document.querySelectorAll("ul li");
    ul.forEach(function (data) {
        data.addEventListener("click", function () {
            alert(data.innerText);
        });
        console.log(data);
    })
}
// _________________ Loop Testing __________________
function forOFLoop() {
    for (data of cities) { //__________ This iwll check for data of cities and run for the number of times to print data
        console.log(data);
    }
}

// ____________________ object __________
function objTesting() {
    let student = {
        id: 01,
        name: "Sohail",
        course: ["cnd", "Blockchain", "IOT"]
    }
    console.log("OBject " + student.id + " " + student.name + " " + student.course[2]);

    // object.keys(student) will give you all the keys
    // object.values(student) will give you all the values
}

// ________________ FORM INPUT ____________________
function formSignUp() {
    let fNameI = document.querySelector("#fName");
    let lNameInput = document.querySelector("#lName");

    let userDetails = {
        firstName: fNameI.value,
        lastName: lNameInput.value
    }
    alert("console", userDetails.firstName);
    console.log("console", userDetails.lastName);
}

// _______________ Object creation and usage ________________
function objTesting() {
    function studentList(name, id, course) {
        return {
            name,
            id,
            course
        }

    }

    let student1 = studentList("Sohail", 001, "BCC");
    console.log(student1);
}

// _____________________ Constructor _______________________
function consTesting(){

    function Students(fname, course, id){
        this.fname = fname;
        this.course = course;
        this.id = id;
    }

    let student1 = new Students("Sohail", "CNC", 01);
    let student2 = new Students("Ishaque", "BCC", 02);
    let student3 = new Students("Noor", "CNC", 013);
    console.log(student2);
}