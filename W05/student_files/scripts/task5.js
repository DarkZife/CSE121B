
/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const curDate = new Date();

// Step 2: Declare another variable to hold the day of the week
const dayOfWeek = curDate.getDay();

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed
let message;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message = 'Hang in there!';
}

// Step 6: Using an else statement, set the message variable to 'Woohoo! It is the weekend!'
else {
    message = 'Woohoo! It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let anotherMessage;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
        anotherMessage = 'Sunday';
        break;
    case 1:
        anotherMessage = 'Monday';
        break;
    case 2:
        anotherMessage = 'Tuesday';
        break;
    case 3:
        anotherMessage = 'Wednesday';
        break;
    case 4:
        anotherMessage = 'Thursday';
        break;
    case 5:
        anotherMessage = 'Friday';
        break;
    case 6:
        anotherMessage = 'Saturday';
        break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById('message1').textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById('message2').textContent = anotherMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
    for (let temple of temples) {
        // - Creates an HTML <article> element
        const article = document.createElement('article');

        // - Creates an HTML <h3> element and add the temple's templeName property to it
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // - Creates an HTML <h4> element and add the temple's location property to it
        const h4Location = document.createElement('h4');
        h4Location.textContent = temple.location;

        // - Creates an HTML <h4> element and add the temple's dedicated property to it
        const h4Dedicated = document.createElement('h4');
        h4Dedicated.textContent = temple.dedicated;

        // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;

        // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        article.appendChild(h3);
        article.appendChild(h4Location);
        article.appendChild(h4Dedicated);
        article.appendChild(img);

        // - Appends the <article> element to the HTML element with an ID of temples
        document.getElementById('temples').appendChild(article);
    }
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
    // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');

    // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
    templeList = await response.json();

    // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
    output(templeList);
}

// Call the getTemples function to fetch and display the list of temples
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    const templesElement = document.getElementById('temples');
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
    // - Calls the reset function
    reset();

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    const sortByValue = document.getElementById('sortBy').value;
    let sortedTemples = [];

    if (sortByValue === 'templeNameAscending') {
        sortedTemples = templeList.sort((a, b) => a.templeName.localeCompare(b.templeName));
    } else if (sortByValue === 'templeNameDescending') {
        sortedTemples = templeList.sort((a, b) => b.templeName.localeCompare(a.templeName));
    }

    // - Calls the output function passing in the sorted list of temples
    output(sortedTemples);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('change', sortBy);
