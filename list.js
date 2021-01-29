class User {
    constructor(firstName, lastName, DoB, departing, arriving, leaveDate, returnDate, bags, meals, extras, dayDiff, cost, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.DoB = DoB;
        this.departing = departing;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meals = meals;
        this.extras = extras;
        this.id = userId;
        this.dayDiff = dayDiff;
        this.cost = cost;
        this.age = age;
    }
}
let userList = [];
let userId = 1;

function addToList() {
    let meal = [];
    let extra = [];
    let cost = 300;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let DoB = document.getElementById("DoB").value;
    let departing = document.getElementById("departing").value;
    let arriving = document.getElementById("arriving").value;
    let leaveDate = document.getElementById("leaveDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let radio = document.getElementsByTagName("input");
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].type === `radio` && radio[i].checked) {
            meal.push(radio[i].value);
        }
    }
    this.meals = meal.push;
    ///CheckBoxes Function
    let checkbox = document.getElementsByTagName("input")
    let checkboxTotal = 0;
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].type === `checkbox` && checkbox[i].checked) {
            extra.push(checkbox[i].value);
            checkboxTotal++;
        }
    }
    this.extras = extra.push;
    // can they drink
    year = new Date().getFullYear();
    let birthYear = DoB.split('-')[0];
    if (year - birthYear >= 21) {
        this.canDrink = true;
    } else {
        this.canDrink = false;
    }
    //AGE 
    DoBObject = new Date(DoB);
    var ageDifMs = Date.now() - DoBObject.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    age = Math.abs(ageDate.getUTCFullYear() - 1970);
    // extra cost
    cost += bags * 20;
    cost += checkboxTotal * 10;
    this.cost = cost;
    //how long they'll be gone
    returnDateObject = new Date(returnDate);
    leaveDateObject = new Date(leaveDate);
    let dayDiff = returnDateObject.getTime() - leaveDateObject.getTime();
    dayDiff = dayDiff / (1000 * 3600 * 24);
    if (firstName != "" && lastName != "" && DoB != "" && departing != "" && arriving != "" && leaveDate != "" && returnDate != "") {
        let user = new User(firstName, lastName, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extra, dayDiff, cost, age);
        userId++;
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("DoB").value = "";
        document.getElementById("departing").value = "";
        document.getElementById("arriving").value = "";
        document.getElementById("leaveDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("bags").value = 0;
    }
}

function print() {
    printSpace = document.getElementById("names");
    printSpace.innerHTML = "";
    for (let i = 0; i < userList.length; i++) {
        printSpace.innerHTML += `<div>${userList[i].id} ${userList[i].firstName} ${userList[i].lastName}</div>`;
    }
}

function search() {
    let searchUser = document.getElementById("search").value.split(" ");
    for (i = 0; i < userList.length; i++) {
        if (searchUser[0] == userList[i].firstName && searchUser[1] == userList[i].lastName) {
            document.getElementById("outfirstName").value = userList[i].firstName
            document.getElementById("outlastName").value = userList[i].lastName
            document.getElementById("outDoB").value = userList[i].DoB
            document.getElementById("outdeparting").value = userList[i].departing
            document.getElementById("outarriving").value = userList[i].arriving
            document.getElementById("outleaveDate").value = userList[i].leaveDate
            document.getElementById("outreturnDate").value = userList[i].returnDate
            document.getElementById("outdurration").textContent = userList[i].dayDiff + "days"
            document.getElementById("outmeal").value = userList[i].meals
            document.getElementById("outage").textContent = userList[i].age
            document.getElementById("outextras").value = userList[i].extras
            document.getElementById("outcost").textContent = "$" + userList[i].cost
            document.getElementById("outbags").value = userList[i].bags
        }
    }
}