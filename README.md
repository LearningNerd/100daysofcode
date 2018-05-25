# 100daysofcode

Coding for (at least) an hour every day for 100 days!

## Guidelines/Goals
  - My real goal here is just to get back into the habit of learning and building things!
  - Every single day: make something and learn something new (related to comptuer science or programming).
    - A perfect 100 day streak is *not* the goal. The goal is just to get into the habit.
    - I'm aiming to be *prolific*, not perfect.
  - ...will add more details here later :) first, coding time!

## Inspiration
  - https://github.com/kallaway/100-days-of-code/
  - https://lifehacker.com/281626/jerry-seinfelds-productivity-secret
  - https://www.reddit.com/r/theXeffect/wiki/index
  - https://jenniferdewalt.com/
  - ...plus my own 100 video blogs in 100 days, and 30 days of web dev, and similar experiments

<hr/>

## Project 1: 100 Days of Code Tracker

A don't-break-the-chain style app to keep track of my progress with the #100DaysOfCode.

### 2018-05-22

**Finished:**
  - Public URL hosted on GitHub: https://learningnerd.com/100daysofcode/
  - Set up Firebase
    - Database schema: users/*uid*/*date like 2018-05-22*/*data for each field*
    - Save data as an object under the key for each day, under each user
    - For days with no progress, key has value of null
  - User login with GitHub (via Firebase)
  - After logging in, display form:
    - Heading: Did you code today?
    - Two buttons: yes or no (but "no" doesn't do anything yet!)
    - Three form fields: link to project, link to tweet, notes
  - Save data into Firebase on form submission

<hr/>

### 2018-05-23

**Finished:**
  - Generate today's date string ("2018-05-22") dynamically!
  - Save user data into the Firebase path for the current day dynamically
  - Pull data for the current day and display it in the form fields (so they're easily editable)
  - Clear form fields on logout
  - On auth state change, toggle login/logout button
  - By default, show nothing but the login button; after login, show next views
  - If no data exists for the current day, display "Did you code today?" with yes/no buttons
    - Yes: Display form to enter progress
    - No: Save "null" to current date location in database, and display an inspirational message
  - Otherwise if data already exists for current day, display progress form
  - Created a simple CSS grid of elements generated with JavaScript, one for each of the 100 days. All hard-coded for now!

**#TIL:**
  - The `fr` unit in CSS is super cool -- it stands for a part (or *fraction*) of the available space!
  - Finally using CSS Grids again

**Resources on CSS Grids:**
  - https://gridbyexample.com/examples/
  - https://css-tricks.com/snippets/css/complete-guide-grid/

<hr/>

### 2018-05-24

**Finished:**
  - Make the progress grid dynamic: display a green box for each completed day, or a grey box for all future days  
  - Add a modal that appears when clicking each day, displaying information for that day (date, project link, and tweet link)

**#TIL:**
  - Messed around with the Performance tab in Chrome DevTools -- so much more to learn here!
  - Render-Blocking CSS: https://developers.google.com/web/tools/lighthouse/audits/blocking-resources 

**Next:**
  - Bug: if user clicks *between* each box in the grid, modal appears -- it shouldn't!
  - Show confirmation that data was successfully saved!
  - If user doesn't have any data saved yet, display an inspirational message to get started with their 100 days challenge! 
  - Save a record in the database for any previous days that were missed
  - For missed days, show a red box in the grid showing user's progress
  - Switch back to using VS Code rather than doing all development in Glitch, and use Git locally and sync directly to GitHub!
  - Set date cut-off time to something more like 2am (since I keep saving my work for the day after midnight!)
  - Either delete notes field or fix CSS so it fits in the modal

**Other feature ideas:**
  - Title of project
  - Short description of project
  - Other notes? (What did I learn that day?)
  - ...an entire blog post related to the project?
  - Video recording of that day's work.
  - Time spent studying that day?
  - Other statistics (lines of code written? etc etc) ... probably not
  - User setting for cut-off time, applying work to previous day even if after midnight
  - If user skips a day (or more) without checking in, prompt to save updates for those days as well
