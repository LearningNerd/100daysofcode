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
let currentDate = getCurrentDateString();

// Create a JavaScript object for each HTML element that we need to use
let userInfoElem = document.getElementById("userinfo");
let logInOutButton = document.getElementById("loginout");

let didYouCodeElem = document.getElementById("didyoucode");
let noProgressButton = document.getElementById("noprogress");
let yesProgressButton = document.getElementById("yesprogress");

let formElem = document.getElementById("codeprogress");
let projectLinkInputElem = document.getElementById("project-link");
let tweetLinkInputElem = document.getElementById("tweet-link");
let notesInputElem = document.getElementById("notes");
let saveResponseElem = document.getElementById("saveResponse");

let progressContainerElem = document.getElementById("progress");
let gridElem = document.getElementById("grid");
let modalBackground = document.getElementById("modalBackground");

//////////////////////////////////////////////////////////////////////////
// Click boxes to open modal with more info
/////////////////////////////////////////////////////////////////////////
gridElem.addEventListener("click", displayModal);

function displayModal(event) {
  console.log("click!");
 if (event.target !== event.this && event.target.children[0]) {
   event.target.children[0].classList.add("modal");
   event.target.children[0].style.display = "block";
   modalBackground.classList.add("modalBackground");
   
   document.addEventListener("click", hideModal);
   
   function hideModal() {
      event.target.children[0].classList.remove("modal");
      event.target.children[0].style.display = "none";
      modalBackground.classList.remove("modalBackground");
      document.removeEventListener("click", hideModal);
   }
   event.stopPropagation();
 }
}

//////////////////////////////////////////////////////////////////////////
// USER LOGIN
/////////////////////////////////////////////////////////////////////////

// Set up event listener for when user clicks login button
logInOutButton.addEventListener("click", onLogInOutButtonClick);

// Define our function named onLoginButtonClick
function onLogInOutButtonClick() {
  console.log("User clicked login/logout button!");
  
  // If user exists, log them out
  if (currentUserId) {
    
    // Log out the user (triggers "authStateChange" event)
    firebase.auth().signOut().catch(function(error) {
      // Log any errors to the console
      console.log(error);
    });
    
  // Otherwise if no user exists, log them in
  } else {

    // Log in user via GitHub (triggers "authStateChange" event)
    firebase.auth().signInWithPopup(githubAuth).catch(function(error) {
      // Log any errors to the console
      console.log(error);
    });
    
  }

} // end onLogInOutButtonClick

// Set up Firebase onAuthStateChanged event listener,
// which will call our handleAuthStateChange function
// every time the current user either logs in or logs out
firebase.auth().onAuthStateChanged(handleAuthStateChange);

function handleAuthStateChange (user) {
  
  console.log(user);
  
  // If user is now logged in:
  if (user) {
    console.log('User successfully logged in to Firebase!');
    
    currentUserId = user.uid;
    userInfoElem.textContent = "Welcome, " + user.displayName + "!";    
    logInOutButton.textContent = "Log out";
    
     // Display views based on user data
    getCurrentDayData();
    getUserProgressData();
    
  // Otherwise, if user just logged out:
  } else {
    console.log('User successfully logged OUT from Firebase!');
    
    currentUserId = null;
    userInfoElem.textContent = "";
    logInOutButton.textContent = "Log in with GitHub";
    
    // Hide views
    didYouCodeElem.style.display = "none";
    formElem.style.display = "none";
    progressContainerElem.style.display = "none";
    
    clearFormFields();
  }
}

//////////////////////////////////////////////////////////////////////////
// DID YOU CODE?
/////////////////////////////////////////////////////////////////////////

// When user clicks "yes", show the form to save their progress
yesProgressButton.addEventListener("click", displayProgressForm);

function displayProgressForm() {
  // Hide "didyoucode" section, show "codeprogress" form
  didYouCodeElem.style.display = "none";
  formElem.style.display = "block";
}

// When user clicks "no", 
noProgressButton.addEventListener("click", handleNoButtonClick);

function handleNoButtonClick() {
  // Replace "didyoucode" section with inspirational message
  didYouCodeElem.textContent = "[Insert inspirational message here!] Come back tomorrow!";
    // TODO -- MAYBE? -- add button for "oops, changed my mind! I have progress to share";
  
  // Create location for current date in database with value of false
  let currentDateRef = firebase.database().ref("users/" + currentUserId + "/" + currentDate);

  currentDateRef.set(false);
  console.log("Set value for current date to false");
}

//////////////////////////////////////////////////////////////////////////
// GET AND DISPLAY DATA
/////////////////////////////////////////////////////////////////////////

function getCurrentDayData() {
  
  console.log("Called getCurrentDayData");
  
  // Create database ref object pointing to location for today's date for current user
  let currentDateRef = firebase.database().ref("users/" + currentUserId + "/" + currentDate);
  
  // Get current user's data for current date
  currentDateRef.once("value", handleCurrentData);
        // TODO: error handling!!!!!!!!
  
  function handleCurrentData (dataSnapshot) {
    console.log("Called handleCurrentData");
    
    let userData = dataSnapshot.val();

    // If user already has progress saved for current date, display progress form with the data
    if (userData) {
      projectLinkInputElem.value = userData.projectLink;
      tweetLinkInputElem.value = userData.tweetLink;
      notesInputElem.value = userData.notes;
      
      displayProgressForm();
    // Otherwise if no progress has been saved yet for the current date, 
    } else {
      console.log("no data for today yet!");
      // Display "Did you code?" section
      didYouCodeElem.style.display = "block";
    }
  }
  
} // end getCurrentDayData()


function getUserProgressData() {
  
  console.log("Called getUserProgressData");
  
  // Create database ref object pointing to location for current user
  let currentUserRef = firebase.database().ref("users/" + currentUserId);

  // Get current user's data for current date
  currentUserRef.orderByKey().once("value", handleCurrentData); 
        // TODO: error handling!!!!!!!!
  
  // Using Firebase forEach to push values into an array, to be sure the order is preserved
  let userDataArray = [];
    
  function handleCurrentData (dataSnapshot) {
    console.log("Called handleCurrentData");

    // For each day, push the data into an array
    dataSnapshot.forEach(function(daySnapshot) {
      let eachDayObject = daySnapshot.val();
      eachDayObject.date = daySnapshot.key;
      userDataArray.push(eachDayObject);
    });
    
    console.log(userDataArray);
    
    // If user already has progress:
    if (userDataArray) {
    
      // Display progress grid based on user's data
      createGridBoxes(userDataArray);
    
    } else {
      // TODO: display an inspirational message to get started with their 100 days challenge! 
    }
    
  }
  
} // end getUserProgressData()


//////////////////////////////////////////////////////////////////////////
// SAVING USER DATA
/////////////////////////////////////////////////////////////////////////

// Set up event listener for when user submits the form
formElem.addEventListener("submit", handleFormSubmit);

function handleFormSubmit (event) {
  event.preventDefault();
  console.log("Form submitted.");
  
  // Collect user data from the form into an object to store in Firebase:
  let todaysProgressData = {
    projectLink: projectLinkInputElem.value,
    tweetLink: tweetLinkInputElem.value,
    notes: notesInputElem.value
  };
   
  console.log("User data object:");
  console.log(todaysProgressData);
  

  // Save user data into Firebase for the current day
  if (currentUserId) {
    // Create database ref object pointing to location for today's date
    let currentDateRef = firebase.database().ref("users/" + currentUserId + "/" + currentDate);

    // Save data into Firebase (update if it exists, or create if it doesn't)
    currentDateRef.set(todaysProgressData, onSaveSuccess);
    
    function onSaveSuccess() {
      saveResponseElem.textContent = "Data saved successfully. Keep up the good work! Seeya tomorrow!";
    }
  }
  
}

//////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS
//////////////////////////////////////////////////////////////////////////


function getCurrentDateString() {
  // source: https://stackoverflow.com/a/4929629
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1 ; //January is 0!
  let yyyy = today.getFullYear();

  // Zero padding:
  if(dd < 10) {
      dd = '0' + dd
  } 
  if(mm < 10) {
      mm = '0' + mm
  } 

  return yyyy + '-' + mm + '-' + dd;
}


function clearFormFields() {
    projectLinkInputElem.value = "";
    tweetLinkInputElem.value = "";
    notesInputElem.value = "";
}

function createGridBoxes(userDataArray) {
  // Note: hard-coded in HTML: 100 divs!!!
  console.log("called createGridBoxes");
  
  // Make container visible
  progressContainerElem.style.display = "block";
  
  for (let i = 0; i < 100; i++) {
    let box = document.getElementById( "day" + (i + 1) );

    // TODO: if date exists and has value of null, mark it as a missed day
    
    if (userDataArray[i]) {
      console.log(userDataArray[i]);
      
      let detailsContent = "<strong>" + userDataArray[i].date + "</strong><br/><br/>";      
      console.log(detailsContent);
      
      detailsContent += '<a href="' + userDataArray[i].projectLink + '">Link to today\'s project' + '</a><br/><br/>';
      console.log(detailsContent);
      
      detailsContent += '<a href="' + userDataArray[i].tweetLink + '">Link to today\'s tweet' + '</a><br/><br/>';
      
      // TODO: remove this field, or change CSS so it can fit within the modal box
      // detailsContent += "<strong>Notes:</strong><br/> " + userDataArray[i].notes;
      
      console.log(detailsContent);
      
      box.className = "box success";
      let dayInfoElem = document.createElement("p");
      dayInfoElem.innerHTML = detailsContent;
      dayInfoElem.className = "dayDetails";
      box.append(dayInfoElem);

    } else {
       console.log("not in userdatakeys"); 
    }
        
  }
}

