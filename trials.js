"use strict";

// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set("home", '510-876-5309');
phoneNumbers.set("mobile", '415-555-1212');
phoneNumbers.set("businesss", '415-123-4567');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function addAccountInformation(name, number, business){

    console.log(`Account holder name: ${name}`);
    console.log(`Account number: ${number}`);
    console.log(`Business name: ${business}`);
}

// Add function to print all addresses, including a header
function showAddresses(addressArray){

    console.log(`Addresses: `);

    for (let address of addressArray) {
        console.log(address);
    }
}


// Add function to print phone types and numbers
function showPhoneNumbers(phoneMap){
    console.log(`Phone Numbers: `)
    for (let [type, number] of phoneMap){
        console.log(type + " : " + number);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions

let transactionMap = new Map([
    ['May-2', -500],
    ['May-13', +1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', +2200]
    ]);

// Add function to add transactions
function addTransactions(date, amount){
    transactionMap.set(date, amount);
}

// Add function to show balance status
function showBalanceStatus(balanceAmount){
    console.log(`Balance:  ${balanceAmount}`);
    if (balanceAmount <= 0) {
        console.log("YOU ARE OVERDRAWN");
    }

    else if (balanceAmount > 1 && balanceAmount < 20) {
        console.log("Warning: You are close to zero balance");
    }

    else {
        console.log("Thank you for your businezzzzz");
    }
}

// Add function to show transactions

function showTransactions(transactionMap, balanceAmount){
    console.log(balanceAmount);
    for (let [date, amount] of transactionMap){
        console.log(`Transaction date: ${date}`);

        if (amount > 0) {
            console.log('Transaction type: deposit');
        }
        else {
            console.log('Transaction type: withdrawal');
        }

        console.log(`Amount: ${amount}`);
        balanceAmount += amount;

        showBalanceStatus(balanceAmount);
        if (balanceAmount < 0) {
            balanceAmount -= 25;
        }
    }
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info


// Function to add customer attributes


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours






