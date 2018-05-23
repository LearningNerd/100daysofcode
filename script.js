console.log('our JS file loaded!');

//////////////    Initialize Firebase  //////////////////////
var config = {
  apiKey: "AIzaSyBJPDDLfb_aatmfqJt1mg_2HE0PrVES6Y4",
  authDomain: "daysofcode-65e82.firebaseapp.com",
  databaseURL: "https://daysofcode-65e82.firebaseio.com",
  projectId: "daysofcode-65e82",
  storageBucket: "",
  messagingSenderId: "884963982818"
};
firebase.initializeApp(config);
///////////////////////////////////////////////////////////


// Create instance of Firebase's GitHub Authentication provider object
let githubAuth = new firebase.auth.GithubAuthProvider();

// Globar vars
let currentUserId;

// Create a JavaScript object for each HTML element that we need to use
let userInfoElem = document.getElementById("userinfo");
let loginButton = document.getElementById("login");
let logoutButton = document.getElementById("logout");
let formElem = document.getElementById("codeprogress");
  


// Set up event listener for when user clicks login button
loginButton.addEventListener("click", onLoginButtonClick);

// Set up event listener for when user clicks login button
logoutButton.addEventListener("click", onLogoutButtonClick);

// Define our function named onLoginButtonClick
function onLoginButtonClick() {
  console.log("User clicked login button!");
  
  // Use Firebase with GitHub Authentication to log in the user
  firebase.auth().signInWithPopup(githubAuth).catch(function(error) {
    // Log any errors to the console
    console.log(error);
  }); 
}

// Define our function named onLogoutButtonClick
function onLogoutButtonClick() {
  console.log("User clicked logout button!");
  
  firebase.auth().signOut().catch(function(error) {
    // Log any errors to the console
    console.log(error);
  });
  
}

// Set up Firebase onAuthStateChanged event listener,
// which will call our handleAuthStateChange function
// every time the current user either logs in or logs out
firebase.auth().onAuthStateChanged(handleAuthStateChange);

// Define our function that will update the page on login/logout
function handleAuthStateChange (user) {
  
  console.log(user);
  
  // If user is now logged in:
  if (user) {
    console.log('User successfully logged in to Firebase!');
    userInfoElem.textContent = "Welcome, " + user.displayName + "!";    
    currentUserId = user.uid;
  // Otherwise, if no user currently logged in:
  } else {
    
    console.log('User successfully logged OUT from Firebase!');
    userInfoElem.textContent = "Not currently logged in.";
  }
}


// SAVING USER DATA

// Set up event listener for when user submits the form

formElem.addEventListener("submit", handleFormSubmit);

function handleFormSubmit (event) {
  event.preventDefault();
  console.log("Form submitted.");
  
  // Collect user data from the form into an object to store in Firebase:
  let todaysProgressData = {
    "project-link": document.getElementById("project-link").value,
    "tweet-link": document.getElementById("tweet-link").value,
    "notes": document.getElementById("notes").value
  };
  
  console.log("User data object:");
  console.log(todaysProgressData);
  
  // TODO: display data for current day in the form fields
  
  // Save user data into Firebase for the current day
  
    // TODO: generate string for current date in 2018-05-22 format
  let currentDate = "2018-05-22";

  if (currentUserId) {
    // Create database ref object pointing to location for today's date
    let currentDateRef = firebase.database().ref("users/" + currentUserId + "/" + currentDate);

    currentDateRef.set(todaysProgressData);
  }
  
}

