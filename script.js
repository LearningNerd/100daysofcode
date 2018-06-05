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
let currentDateString = getDateString();
let lastEntryIndex;
let todayEntryIndex;

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
    
        
     // Get data and display views accordingly
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
  
  // Create location for current day index in database...
  let currentDayRef = firebase.database().ref("users/" + currentUserId + "/" + todayEntryIndex);

  // Set current timestamp as the value for the current day index to represent a missed day
  currentDayRef.set(firebase.database.ServerValue.TIMESTAMP);
  console.log("User entered a MISSED day. Set current timestamp as value for day #" + todayEntryIndex);
}

//////////////////////////////////////////////////////////////////////////
// GET AND DISPLAY DATA
/////////////////////////////////////////////////////////////////////////

function displayCurrentDayData(currentDayData) {
  
  console.log("Called displayCurrentDayData");
  
  projectLinkInputElem.value = currentDayData.projectLink;
  tweetLinkInputElem.value = currentDayData.tweetLink;
  notesInputElem.value = currentDayData.notes;

}

function getUserProgressData() {
  
  console.log("Called getUserProgressData");
  
  // Create database ref object pointing to location for current user
  let currentUserRef = firebase.database().ref("users/" + currentUserId);

  // Get current user's data for current date
  currentUserRef.orderByKey().once("value", handleCurrentData); 
        // TODO: error handling!!!!!!!!
  
  function handleCurrentData (dataSnapshot) {
    console.log("Called handleCurrentData");

    // Firebase gives an array when the object's properties are numbers in (mostly) consecutive order
    // NOTE: remember that userDataArray has an empty value for index 0
    let userDataArray = dataSnapshot.val();
    console.log(userDataArray);
    console.log(userDataArray.length);

    // If user already has progress:
    if (userDataArray) {
    
      let lastEntryIndex = userDataArray.length - 1;
      let lastEntryData = userDataArray[lastEntryIndex];
      // For days with progress, get timestamp property; for missed days, the element is just the timestamp value itself (not an object)
      let lastEntryTimestamp = lastEntryData.timestamp ? lastEntryData.timestamp : lastEntryData;
      
      console.log(lastEntryData);
      
      // If an entry exists for the current day (even if a missed day), display progress form with the data
      if ( isToday(lastEntryTimestamp) ) {
        
        // Set todayEntryIndex global; used by handleNoClick and handleFormSubmit!
        todayEntryIndex = lastEntryIndex;

        // Only show data in form fields if entry has data
        if (lastEntryData.timestamp) {
          displayCurrentDayData(lastEntryData);
        }
        displayProgressForm();
        
      // Otherwise if no progress has been saved yet for the current date, 
      } else {
        console.log("no data for today yet!");
        // Display "Did you code?" section
        didYouCodeElem.style.display = "block";
                
       // If latest entry is for the day before yesterday (or earlier), add missing entries
       if ( isBeforeYesterday(lastEntryTimestamp) ) {
         // Set userDataArray to an updated array containing complete list of entries up to yesterday         
         userDataArray = addMissingEntries(userDataArray);
       }
        
       // Update todayEntryIndex global; used by handleNoClick and handleFormSubmit!
       todayEntryIndex = userDataArray.length;
           // remember: if last entry wasn't today, then it must be yesterday!
           // and if it runs, addMissingEntries() will insert an entry for yesterday,
           // so if yesterday was day #3, length of the array is 4 (the 0 slot is empty),
           // so today would be day #4 (same as array length)

      }// end else

      console.log("todayEntryIndex: " + todayEntryIndex);
      
      // Display progress grid based on user's data (after adding missing entries, if needed)
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
    notes: notesInputElem.value,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  };
   
  console.log("User data object:");
  console.log(todaysProgressData);

  console.log("todayEntryIndex: " + todayEntryIndex);
  
  // Save user data into Firebase for the current day
  if (currentUserId) {

    // Create database ref object pointing to location for today's day index
    let currentDayRef = firebase.database().ref("users/" + currentUserId + "/" + todayEntryIndex);

    // Save data into Firebase (update if it exists, or create if it doesn't)
    currentDayRef.set(todaysProgressData, onSaveSuccess);
    
    // TODO: error handling!
    
    function onSaveSuccess() {
      formElem.textContent = "Data saved successfully. Keep up the good work! Seeya tomorrow!";      
    }
    
  }
  
}

//////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS
//////////////////////////////////////////////////////////////////////////

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
  
  console.log(userDataArray);
  
  userDataArray.forEach(function(dayProgress, index) {
    
    console.log(index);
    
    // Change box for days with progress to "success" class, and include details for that day's progress
    if (dayProgress.timestamp) {

      let detailsContent = "<strong>" + dayProgress.date + "</strong><br/><br/>";            
      detailsContent += '<a href="' + dayProgress.projectLink + '">Link to today\'s project' + '</a><br/><br/>';      
      detailsContent += '<a href="' + dayProgress.tweetLink + '">Link to today\'s tweet' + '</a><br/><br/>';
      
      // TODO: remove this field, or change CSS so it can fit within the modal box
      // detailsContent += "<strong>Notes:</strong><br/> " + userDataArray[i].notes;      
      
      let box = document.getElementById( "day" + (index) );
      box.className = "box success";
      let dayInfoElem = document.createElement("p");
      dayInfoElem.innerHTML = detailsContent;
      dayInfoElem.className = "dayDetails";
      box.append(dayInfoElem);

    // Change box to "missed" class for missed days (value is the timestamp itself, so dayProgress.timestamp is undefined ),
    } else {
      let box = document.getElementById( "day" + (index) );
      box.className = "box missed";
    }
  });
  
}

function addMissingEntries(userDataArray) {
  console.log("called addMissingEntries");

  const DAY_MILLIS = 86400000;
  const YESTERDAY_MIDNIGHT_TIMESTAMP = getMidnightTimestamp() - DAY_MILLIS;
  
  // Make a new array, copying values from the original
  let updatedArray = userDataArray.slice();
  let lastEntryIndex = updatedArray.length - 1;
  let lastEntryData = updatedArray[lastEntryIndex];
    // For days with progress, get timestamp property; for missed days, the element is just the timestamp value itself (not an object)
  let lastEntryTimestamp = lastEntryData.timestamp ? lastEntryData.timestamp : lastEntryData;  
  let lastEntryMidnightTimestamp = getMidnightTimestamp(lastEntryTimestamp);

  
  while (lastEntryMidnightTimestamp !== YESTERDAY_MIDNIGHT_TIMESTAMP) {
        
    // Increase index to push new entry into the slot following the last entry
    lastEntryIndex += 1;
    
    // Count up one day at a time from the last entry (midnight timestamp plus 24 hours)
    lastEntryMidnightTimestamp += DAY_MILLIS;
    
    // Insert missed day entry into Firebase: just its index as a property, and its timestamp at midnight as the value
    firebase.database().ref("users/" + currentUserId + "/" + lastEntryIndex).set(lastEntryMidnightTimestamp);
    
    // Push new entries for missed days into local array
    updatedArray.push(lastEntryMidnightTimestamp);
    
    
    let dateObj = new Date();
    dateObj.setTime(lastEntryMidnightTimestamp);
    console.log("Added missing entry for day #" + lastEntryIndex + ": " + dateObj.toUTCString());
    
  } // end while
  
  return updatedArray;
  
}



//////////////////////////////////////////////////////////////////////////
// DATE/TIME HELPER FUNCTIONS
//////////////////////////////////////////////////////////////////////////

function getDateString(timestamp) {
  // source: https://stackoverflow.com/a/4929629
  
  let date;
  
  // If argument provided:
  if (timestamp) {
    
    date = new Date();
    date.setTime(timestamp);
    
  // Default: today
  } else {
    
    date = new Date();    
  }
  
  let dd = date.getDate();
  let mm = date.getMonth() + 1 ; //January is 0!
  let yyyy = date.getFullYear();

  // Zero padding:
  if(dd < 10) {
      dd = '0' + dd
  } 
  if(mm < 10) {
      mm = '0' + mm
  } 

  return yyyy + '-' + mm + '-' + dd;
}


// Get timestamp for today at midnight
function getMidnightTimestamp(givenTimestamp) {

  const DAY_MILLIS = 86400000;

  // If no argument given, default to current time
  if (!givenTimestamp) {
   givenTimestamp =  Date.now();
  }
  
  // Milliseconds remaining since midnight of current day
  let midnightMillisOffset = givenTimestamp % DAY_MILLIS;

  // Return timestamp (in UTC) of current day at exactly midnight UTC
  return givenTimestamp - midnightMillisOffset;

      // OR THE ABOVE AS A ONE-LINER:
      // return givenTimestamp - (givenTimestamp % 86400000)

      //   ALTERNATE VERSION USING BUILT-IN DATE FUNCTIONS:
      //     let currentDate = new Date();

      //     // return timestamp (in UTC) of current day at exactly midnight UTC
      //     return currentDate.setUTCHours(0,0,0,0).getTime();

}

// Check if a given timestamp falls within current day
function isToday(givenTimestamp) {

  const DAY_MILLIS = 86400000;
  const TODAY_MIDNIGHT_TIMESTAMP = getMidnightTimestamp();
  const TOMORROW_MIDNIGHT_TIMESTAMP = TODAY_MIDNIGHT_TIMESTAMP + DAY_MILLIS;
  
  if (givenTimestamp && givenTimestamp < TOMORROW_MIDNIGHT_TIMESTAMP && givenTimestamp >= TODAY_MIDNIGHT_TIMESTAMP) {
    console.log("givenTimestamp falls within today");
    return true;
  }
  return false;
}

// Check if a given timestamp is any time before the previous day
function isBeforeYesterday(givenTimestamp) {

  const DAY_MILLIS = 86400000;
  const YESTERDAY_MIDNIGHT_TIMESTAMP = getMidnightTimestamp() - DAY_MILLIS;

  if (givenTimestamp < YESTERDAY_MIDNIGHT_TIMESTAMP) {
    console.log("givenTimestamp falls on a day BEFORE yesterday (or earlier)");
    return true;
  }
  
  return false;
}
