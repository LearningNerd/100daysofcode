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

## Project ideas
  - Static site generator (from scratch / almost?)
  - Volunteer signup app with automated emails and texts
  - Some web games (tons of ideas here!)

<hr/>

## Project 1: 100 Days of Code Tracker

A don't-break-the-chain style app to keep track of my progress with the #100DaysOfCode.

### Day 1: 2018-05-22

**Finished:**
  - Public URL hosted on GitHub: https://learningnerd.com/100daysofcode/
  - Set up Firebase
    - Database schema: users/*uid*/*date like 2018-05-22*/*data for each field*
    - Save data as an object under the key for each day, under each user
    - For days with no progress, key has value of `false`
  - User login with GitHub (via Firebase)
  - After logging in, display form:
    - Heading: Did you code today?
    - Two buttons: yes or no (but "no" doesn't do anything yet!)
    - Three form fields: link to project, link to tweet, notes
  - Save data into Firebase on form submission

<hr/>

### Day 2: 2018-05-23

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
  - Finally using CSS Grids again!

**Resources on CSS Grids:**
  - https://gridbyexample.com/examples/
  - https://css-tricks.com/snippets/css/complete-guide-grid/

<hr/>

### Day 3: 2018-05-24

**Finished:**
  - Make the progress grid dynamic: display a green box for each completed day, or a grey box for all future days  
  - Grid is only visible if user is logged in
  - Add a modal that appears when clicking each day, displaying information for that day (date, project link, and tweet link)
  - Modal disappers when clicking outside of it
  
**Explored:**
  - Messed around with the Performance tab in Chrome DevTools -- so much more to learn here!
  - Render-Blocking CSS: https://developers.google.com/web/tools/lighthouse/audits/blocking-resources 

<hr/>

### Day 4: 2018-05-25

**Finished:**
  - Show confirmation that data was successfully saved!

**Explored:**
  - Took a look at the Glitch starter template for a Node.js app with SQLite database. (Had some glitches though, didn't seem to work!)

<hr/>

### Day 5: 2018-05-26

No coding today! Too busy hiking around in the woods and hanging out with friends (holiday weekend). Good excuse for a break. :) Like I said, perfection isn't the goal here; it's fine if I miss a few days. But just like going to the gym, my rule of thumb is to only skip one day at a time -- *maybe* two -- but never more than two days in a row. I'd love to have a 95% ratio of coding days to break days, but honestly, *anything* more than I've been doing would be a big win!

<hr/>

### Day 6: 2018-05-27

**Finished:**  
  - Restructure database: users/*uid*/*day number starting at 0*/*data for each field*
  - When saving progress for the day, hide the form

<hr/>

### Day 7: 2018-05-28

Another day off, since I was so tired after returning home from the weekend trip with friends. I was also feeling pretty down / a bit depressed, as I often do after a trip. I had a lot of negative thoughts around missing a day, losing momentum, feeling like I'm not doing enough or being lazy and so on. Had to keep reminding myself that it's OK to take breaks. Besides, that's why I wrote in my list of goals for this 100 days challenge that perfection is *not* the goal here.

<hr/>

### Day 8: 2018-05-29
    
**Finished:**
  - Remove Firebase forEach section now that the data is given as an array (thanks to restructuring things the other day)
  - For missed days, show a red box in the grid showing user's progress
  - Cleanup: read from database only once (instead of twice!)

<hr/>

### Day 9: 2018-05-30

**Finished:**
  - Update database structure again, adding a `goalMet` field to all entries and including the date for missed days
  - Replace dates with timestamps in the database
  - Start adding some helper functions to work with dates

<hr/>

### Day 10: 2018-05-31

**Finished:**
  - Review date arithmetic! (Remembered that math trick to find midnight of the current day.)
  - Finish a couple helper functions to check if a given timestamp falls on today, yesterday, or any time before yesterday.
  - Confirm that the Firebase server saves the current timestamp (in UTC) when inserting this placeholder:  `firebase.database.ServerValue.TIMESTAMP`  

<hr/>

### Day 11: 2018-06-01

**Finished:**
  - Update database structure:
    - Add timestamps and remove date strings
    - Remove `goalMet` property
    - Instead of objects, just use a timestamp as the value for missed days (to more easily check the date of the most recent entry)
  - Refactor `createGridBoxes()`:
    - Use `.forEach()` instead of a `for` loop
    - Simplify logic to identify "success" vs "missed" days
    - Only iterate through database entries (Silly me, iterating through all 100 days for no reason!)
  - Start making function to add entries for any previous days that were missed


<hr/>

### Day 12: 2018-06-02

No coding today! The only reason was poor time management; I thought I would spend my evening at my computer, but I got caught up in taking care of some chores and then ended up staying out late to go to a friend's birthday party and meet some other friends for a late dinner. It was good to be social, at least. :)

<hr/>

### Day 13: 2018-06-03

No coding today either, and I feel bad about missing two days in a row! Argh! Oh well, it's all good. (Gotta remember that!) I have no good excuse for today, just felt really lazy and slept a lot and visited family and watched TV. That was about it. Good to have a do-nothing day once in a while.

<hr/>

### Day 14: 2018-06-04

**100 Days of Code Tracker App -- Finished:**
  - When displaying user progress, insert entries into the database for any previous days that were missed, and display the progress grid according to the latest updates
    - Small bug fix: changed loop condition so entry for current day no longer gets added
  - Update database structure:
    - Start day index at 1 instead of 0 (just more intuitive that way, and no real downside)
  - Update code to match previous changes to database structure:
    - When user clicks "no" button to record a missed day, save server's current timestamp as value for the day index (save as a nubmer value, not an object)
    - Bug fix: If current day is saved as a missed day, progress form should not display "undefined" in the input boxes
    - Update `handleFormSubmit`  to save progress for current day with `timestamp` property
    - Create `todayEntryIndex` global, with its value set in `getUserProgressData`, to insert new entries into the correct location (index for the current day)

**Explored/practiced:**
  - [Recursion examples (Gist link for code)](https://gist.github.com/LearningNerd/311ff984274792a4beab1b4a0f1fe919), starting with a trivial example (incrementing a number recursively)
  - Got myself stuck for a little while on implementing a recursive factorial function. (Yay being stuck!) Got myself unstuck -- I just got the order of parameters mixed up, basically. lol.
  - Read a bit about how the call stack works in JavaScript

**Resources:**
  - [Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)

<hr/>

### Day 15: 2018-06-05

**100 Days of Code Tracker App -- Finished:**
  - Bug fix: error on login for new users, due to one temporary reference to `userDataArray.length` when it could still be null. (Oops!) Easy fix!
  - Bug fix: display "didyoucode" section and grid for first-time users
  - Review and update logic flow in `getUserProgressData` (Tried to refactor but still stuck with one repetitive line across separate conditions... but maybe there's no way around it? Not sure!)
  - Display "Welcome!" if user's GitHub display name isn't set, instead of "Welcome, null!"
  - Add "appinfo" paragraph with link to repo, short description, and instructions.


<hr/>

### Day 16: 2018-06-06

Today I more officially started a new project: a visualization tool to easily see the structure of (binary) trees and how to traverse them! **Project on Glitch: [See the Tree!](https://glitch.com/edit/#!/see-the-tree))**

**Tree Visualization -- Finished:**
  - Reviewed the very basics of the [p5JS library](https://p5js.org) to draw with the canvas API
  - Wrote a function to iteratively traverse through a balanced binary tree (depth-first search)
  - Drew a simple diagram representing a binary tree -- but it only looks right for a three-node, balanced binary tree. It's still incomplete/broken for any larger trees.
  
**Next:**
  - Fix my tree-drawing function so it works for any size binary tree (assuming it's balanced, for now)

<hr/>

### Day 17: 2018-06-07

Today unexpectedly turned into an all-day coding day, which was really fun! (Although I did fall behind on other work... oh well, I'll catch up tomorrow.) I started a ***new project:*** automating the volunteer signup process for my meetup group's DTLA Community Hack Night events, using Google Apps Script to work with Google Forms, Sheets and Gmail.

**Volunteer signup automation -- Finished:**
  - Used regular expressions and JavaScript's `replace` method to re-order the numbers in a big string! ([Gist link with the code](https://gist.github.com/LearningNerd/100185e3156c868d8139d06d409bc384))
  - Practiced using `.map` and `.filter` to transform data, yay!
  - Learned a lot about Google Apps Script and the Google Sheets API
  - Linked my Google Apps Script code to run when triggered by a spreadsheet's form submission event. Super convenient!
  - After overcomplicating things with an extra step and extra data structures (converting data from one form to another, then back again), after a short break I immediately realized how silly I had been and knew exactly how to solve my problem in a much easier way.
  
**#TIL:**
  - Take breaks whether you want to or not! The small risk of forgetting what you were doing or losing your momentum is well worth it for the fresh perspective (and health benefits) of walking away from a problem for at least a little while.
  - It's almost always worth it to do more planning before coding. Don't forget that again!

**Explored:**
  - I discovered that Google has a full API for generating Google Forms programmatically! See: [Forms Service documentation](https://developers.google.com/apps-script/reference/forms/)

<hr/>

### Day 18: 2018-06-08

**Volunteer signup automation -- Finished:**
  - Bug fix: assign volunteers to *first* available slot (in order of the hard-coded rows indicating available slots), instead of assigning them to the *last* available slot.
  - Figured out how to access rows *outside* of the values returned by the form submission event. (There's no "active sheet" when a form is submitted, just some data about what was inserted into the database and where.)

**#TIL:**
  - I forgot and relearned that there's no good way to break out of JavaScript's `.forEach` method. (Which is why my function always returned the *last* available volunteer slot instead of the first one; it would iterate through every possibility, saving matchces and overriding them all, so the last match would be the one that gets returned.)


<hr/>

### Day 19: 2018-06-09

No coding this weekend. Today was *super* busy, going straight from teaching my class to rock climbing with some friends to board games with some other friends, then staying up super late watching Bob Ross painting on a surprisingly popular Twitch livestream channel dedicated to "The Joy of Painting". That made me happy. 

I did write code today, but only in the context of teaching my JavaScript class. We built a tiny project as a group to practice working with APIs. I even got stuck on a bug for a little bit during that live demo, but it turned out to be a great teachable moment!

<hr/>

### Day 20: 2018-06-10

After sleeping in late (I blame you, Bob Ross!), I had lunch with my dad and then went straight to a friend's birthday party. After that, I totally crashed. Waking up at 11am and going to bed at 9pm left me no time for coding. (I could have carved out the time by saying no to other things, but I didn't want to miss out on seeing friends and family this weekend. So, no big deal.)

<hr/>

### Day 21: 2018-06-11

Today I finished the first working version of my volunteer signup automation tool using Google Forms, Sheets, and Google Apps Script. I tested it out a few times (sending emails to myself), so I think it's ready to go live!

**Volunteer signup automation -- Finished:**
  - Set up the email messages with dynamic info based on the assigned volunteer slot
  - Test that the emails get sent and that the formatting looks OK
  - Insert values into the spreadsheet to mark which volunteers were emailed
  - Also created and fixed a bunch of little bugs, but finally got it working!

**#TIL:**
  - Many email clients will modify your email to insert line breaks after every 78 characters or so -- only if the email is in plain text format. (That's why the formatting for my auto-respond test email looks all weird on my phone.) There's this big debate over a feature/spec called `format=flowed` that supposedly handles this in a nicer way, but from what I read on internet forums, it looks like it isn't well-supported. Long story short: HTML emails have won.

<hr/>

### Day 22: 2018-06-12

**#TIL:**
  - If you add Boolean values, JavaScript converts them to 1s and 0s and does the math! `true + true` is 2. Apparently `null` also gets converted to a 0, so `null + true` is 1. But `undefined` and `NaN` added to anything gives `NaN` as the result.
  

<hr/>

**Volunteer signup automation -- Next:**
  - Switch to HTML emails instead of plain text (to avoid weird extra line breaks being added in some email clients)
  - Modify Google Form to remove time slots from available choices once they're taken
  - Dynamic message based on days left until the event ("See you next week" vs "see you this Tues" etc)
  - Maybe: Schedule automatic reminders leading up to the event

**100 Days of Code Tracker App -- Next:**
  - Add offset to UTC timestamp to set "midnight" cutoff to 2am local time (since I often stay up past midnight these days)
  - When saving progress for the day, update the current day in the grid view. (Maybe use Firebase childadded event?)
  
  - If possible, use a more efficient method to add previous missed entries to database (instead of calling `.set` several times)  
  - Layout bug: grid overflows if window size is smaller (no responsive design!)
  - Bug: if user clicks *between* each box in the grid, modal appears -- it shouldn't!
  
  - Switch back to using VS Code rather than doing all development in Glitch, and use Git locally and sync directly to GitHub!
  - Either delete notes field or fix CSS so it fits in the modal
  - Allow user to edit previous entries
  - If user skips a day (or more) without checking in, prompt to save updates for those days
  

**Other feature ideas:**
  - Repurpose this project as an add-on to a blogging tool, using blog posts as entries for each day?
  - Link entries to GitHub repo directly and let users view/edit via GitHub API, following #100DaysOfCode repo's format?
  - User setting for the day's cut-off time, applying work to previous day even if after midnight
  
