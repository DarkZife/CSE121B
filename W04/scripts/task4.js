/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myself = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myself.name = "Logan Dawes";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myself.photo = "images/LoganD.gif";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings
myself.favoriteFoods = ["Steak", "Sushi", "Fish", "Chicken", "Crab", "Lobster"]

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myself.hobbies = ["Gaming", "Dancing", "Traveling"];

// Step 6: Add another property named placesLived with a value of an empty array
myself.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myself.placesLived.push({ place: "", length: "" });

// Step 8: For each property, add appropriate values as strings
myself.placesLived[0].place = "West Jordan, Utah";
myself.placesLived[0].length = "20 years";

// Step 9: Add additional objects with the same properties for each place you've lived
myself.placesLived.push({ place: "Centerville, Utah", length: "3 years" });
myself.placesLived.push({ place: "Rexburg, Idaho", length: "2 years" });
myself.placesLived.push({ place: "Ames, Iowa", length: "2 years" });

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerText = myself.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = myself.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = myself.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const favoriteFoodsList = document.getElementById("favorite-foods");
myself.favoriteFoods.forEach(food => {
  const li = document.createElement("li");
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbiesList = document.getElementById("hobbies");
myself.hobbies.forEach(hobby => {
  const li = document.createElement("li");
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the placesLived property:
const placesLivedList = document.getElementById("places-lived");
myself.placesLived.forEach(place => {
  // - Create an HTML <dt> element and put its place property in the <dt> element
  const dt = document.createElement("dt");
  dt.textContent = place.place;
  placesLivedList.appendChild(dt);

  // - Create an HTML <dd> element and put its length property in the <dd> element
  const dd = document.createElement("dd");
  dd.textContent = place.length;
  placesLivedList.appendChild(dd);
});

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
