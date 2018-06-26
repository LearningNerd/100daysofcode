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

**Volunteer signup automation -- Finished:**
  - Now that it's working (and it's live!), I repurposed the script to save myself some time in helping recurit and connect mentors for the AngelHack LA hackathon. Worked like a charm!

**Explored:**
  - I also tinkered a bit with the p5JS library for canvas animation: setting the frame rate, starting and stopping animations, and how their `draw()` function works as a nice abstraction over `requestAnimationFrame` and the Canvas API's clunky functions.

**#TIL:**
  - If you add Boolean values, JavaScript converts them to 1s and 0s and does the math! `true + true` is 2. Apparently `null` also gets converted to a 0, so `null + true` is 1. But `undefined` and `NaN` added to anything gives `NaN` as the result.

<hr/>

### Day 23: 2018-06-13

I did a little coding, technically speaking, but it was so little that I'm still going to say this was a missed day. And that's fine. I still spent the entire day writing curriculum *about* code, teaching another coding workshop, planning events related to coding...

But the point of this 100-day challenge is to *learn new stuff* and give myself permission to work on creative projects not related to my day-to-day work (even if it is code-related). So I want to do a better job of managing my time, going forward. I'm thinking that my coding time will need to be the first thing I do each day. I need to get into the mindset that all the "time-sensitive" stuff can wait a little bit longer.


<hr/>

### Day 24: 2018-06-14

**Volunteer signup automation -- Finished:**
  - Switch to HTML emails instead of plain text, to avoid weird extra line breaks being added in some email clients. (For now, I just inserted a bunch of `<br/>` tags to convert the plain text email to an HTML email version.)

**Tree Visualization -- Finished:**
  - [**Gist link with tiny examples:**](https://gist.github.com/LearningNerd/b27ace0a2ffdca4d9f1394d2b676ca5e): Explored a couple simple patterns for rewriting a loop so that it can be advanced one step at a time with an external trigger (like a button click)
  - Experimented with a couple p5js functions that make it easy to control when the next frame is frawn (instead of looping continuosly). Way easier than I thought!
  - Successfully repurposed my old tree-drawing code to step through each iteration with a mouse click. (The code is still totally broken, but the iterating/visualizing part is a reusable pattern for sure.)

**Tree Visualization -- Next:**
  - Go back to the drawing board to practice traversing trees. Maybe do it on paper first, and then try to write the code again from scratch. (Sometimes that's more instructive / more productive than wrestling with some old broken code.)

**Learning Vim -- new project (of sorts):**
  - Since I'm in the process of switching to a Mac and I need to relearn a bunch of keyboard shortcuts anyway, I figured this would be the perfect time to also start learning how to use Vim!
  - I completed the `vimtutor` thing (I didn't even know that was a built-in command!), and that was quite fun.
  - I fell down the rabbit hole of customizing with color scheme and `vimrc` settings. Whoops! That was also pretty fun, though.
  - (I'm not counting the Vim stuff as coding time; that was just relaxing time. I went home early since I haven't been feeling well, and instead of taking a nap, I couldn't seem to stop myself from playing around with Vim while lying in bed, haha)

<hr/>

### Day 25: 2018-06-15

Oops! I was so busy writing curriculum for my programming class, I didn't reserve any time for actually *programming!* Once again, I definitely *could* have made time for side projects today if I had done just a little more planning (and a little less procratinating). The rest of this week, I'll write some code first thing every morning.

<hr/>

### Day 26: 2018-06-16

Today I took an unexpected but fun detour -- learning all about AppleScript! (Still exploring all the features of my new Mac now that I've made the switch.) 

**Learning AppleScript -- new project:**

  - I spent a couple hours testing some example code and hacking together a script tied to a keyboard shortcut to let me copy the currently-selected text from a page and automatically append the quote with its source URL to a notes file. It works OK, but there are some obvious limitations.
  - [List of AppleScript resources](https://gist.github.com/ccstone/716173d330caa118d09c)

**Learning Vim -- new project (of sorts):**

  - I learned some new commands for scrolling up and down on a page!
  - And I learned how to copy text from Vim to the clipboard -- something that I consider to be a very basic feature, but it's not at all intuitive with Vim, and it wasn't even mentioned in the intro tutorial. Hmph!

<hr/>

### Day 27: 2018-06-17

No coding today, none at all. I spent Father's Day with my family. We went out for brunch and then I accidentally napped away the rest of the afternoon! I caught up on some chores, then had a quiet evening at home. I could have done some coding instead of any of those things, but it was such a nice, lazy Sunday. I needed the break. (Still, I can make time for coding practice even on Sundays, and I'd like to do so moving forward.)


<hr/>

### Day 28: 2018-06-18

Didn't do much today, since I was busy with meetings and catching up on emails and event planning and other day-to-day stuff that really starts to pile up when I say yes to everything, haha.

**Tree Visualization:**
  - I did indeed go back to the drawing board today, literally! I played around with drawing trees by hand to get a feel for the spacing if the nodes are all the same size.
  - Lesson learned: I really *do* need to know the size of the tree before I can accurately draw it, if the nodes are all the same size. (I still think that *maybe* I can draw it on the fly if I just make the nodes get smaller for each subsequent level.)
  - I felt bad about how much time I spent drawing instead of coding, but I'm still going to count this as "coding time", generally speaking, because a lot of coding is just thinking and planning and reading documentation anyhow! I'm reminding myself that thinking "oh, that doesn't count because I'm not actually writing code" is not a productive way of looking at it.
  - Still *stumped* by trees though. (haha, so punny)
  

<hr/>

### Day 29: 2018-06-19

**Tree Visualization:**
  - More drawing trees, but this time focused on how to programmatically draw them, starting with an example tree.
  - I made some progress ands then got stumped (again) on how to calculate the x-coordinate of a parent node based on its children, especially with including a margin in between each node.

<hr/>

### Day 30: 2018-06-20

**Tree Visualization:**

  - **Goal:** First, draw an example of a binary tree -- just with some parameters, not mapped to an actual tree stored as a data structure yet. And next, animate the drawing step-by-step. Finally, link it to my code to visualize even my *broken* algorithms. Error turned to art.
  
  - I got unstuck and solved my little geometry problem -- it was so simple! To calculate the x coordinate of a parent node, I was calculating the midpoint between its two children, but I forgot to add that value (half the distance) to the x coordinate of the first node. So I was doing `(x2 - x1)/2` when I actually needed `x1 + (x2 - x1)/2` !
  
  - **Loose ends:** My drawings are a mess now, so I kind of want to go back and fix them up. But it's so time-consuming (since I'm such a perfectionist), I know that I probably should leave it be for now.


<hr/>

### Day 31: 2018-06-21

**Tree Visualization -- Finished:**
  - Refactored yesterday's code into a couple different functions, using inputs instead of global variables
  
  - Drew a balanced binary tree based on the size of the tree! Yay!
  
  - Solidified my understanding of how nodes and levels in a tree relate to each other. For any given level of the tree, the number of nodes on that level is `2^(n-1)` where `n` is 1 for the last level of the tree, and `n` increases for each parent level moving upwards to the root.
  
  - The number of nodes doubles for each level when moving from the root down to the leaves (so the number of nodes is cut in half if moving in the other direcion)
  
  - The distance between the nodes follows the exact same pattern as the nodes themselves; at any given level `n`, the distance between each node `(nodeSize + xMargin)` is multiplied by `2^(n-1)` (again, where `n` is 1 for the last level of the tree, increasing for each parent level).
  
  - Created and solved a bug caused by a classic off-by-one error -- there were extra nodes being drawn, because I forgot to subtract the initial node that's drawn before all the others are done in a loop. Oops! Just changed the starting number for the loop iterator. :)
  
**Tree Visualization -- Next:**
  - Animate it! (Challenge: how to step through a *nested* looping action, one step at a time)
  - Try drawing bottom level nodes relative to the width of the canvas, to take up all the available space.



<hr/>

### Day 32: 2018-06-22

**Tree Visualization -- Finished:**

 - [**Gist link with tiny examples**](https://gist.github.com/LearningNerd/b27ace0a2ffdca4d9f1394d2b676ca5e): I experimented with stepping through a nested loop structure, one step at a time based on an external trigger. It's tricky! I added my annotated example code at the end of that file.
 
<hr/>

### Day 33: 2018-06-23

**Tree Visualization -- Finished:**
  - [**Gist link with examples**](https://gist.github.com/LearningNerd/b27ace0a2ffdca4d9f1394d2b676ca5e): I took a closer look at my step-through nested loop example, rewrote it a bunch of times, and fixed the off-by-one errors by cleaning up the logic and reordering things. I think that's the best I can do for now!

<hr/>

### Day 34: 2018-06-24

Feeling really sick today, after two weeks of this on-and-off-again cold that wouldn't really come out but wouldn't go away. So I did a lot of sleeping and lying in bed. It took me all day to convince myself that I'd still enjoy spending an hour on programming. As usual, I'm glad I did!

At first I thought this thread I'm following might be too abstract and undirected to be useful, but tinkering with loops for an hour today has really renewed my appreciation for their subtleties. (My loop-fu has definitely gotten rusty!) 

**Tree Visualization -- Finished:**
  - [**Gist link with examples**](https://gist.github.com/LearningNerd/b27ace0a2ffdca4d9f1394d2b676ca5e): Attempted to rewrite the step-through nested loop as a reusable, higher-order function that can more easily hook into existing code to run it step by step. No luck yet!
  - Returned to my simple nested while loop and experimented with moving around the console.log statements. I confirmed for myself that for each iteration of the outer loop, *both* the outer and inner console.log statements will run, resulting in seeing the same message twice when I logged both the outer and inner indexes.

<hr/>

### Day 35: 2018-06-25

**Tree Visualization -- Finished:**
  - [**Gist link with examples**](https://gist.github.com/LearningNerd/b27ace0a2ffdca4d9f1394d2b676ca5e): Figured out why the inner loop iterates one extra time for my parameterized function: I was evaluating the conditions too soon, that's all! Fixed it up (latest version is at the bottom of the Gist).
  - Fixed up the code so now it works with the tree-drawing function, yay!
  - I realized that my step-through loop template still doesn't match the order of a regular nested loop, now that I've broken it up into three main sections (the start of the outer loop, the inner loop, and the end of the outer loop).
  
**Next:**
  - Experiment with my step-through nested loop template some more, reordering things so the inner index gets reset at the *start* of the next inner iteration.
  - Try to make the step-through function actually do ***one*** step at a time, instead of doing *two* steps on the first iteration of every outer loop.


<hr/>


**Volunteer signup automation -- Next:**
  - Generate the HTML email first, then strip out/replace tags as needed. (I think that'll be cleaner than the quick hack I threw in recently to replace `\n` stuff with a bunch of `<br/>` tags!)
  - Improve timeslot assignment: if all combinations based on the user's choices are already taken, suggest some of the other available slots that match part of the user's criteria. Or at the very least, just suggest some of the open slots.
  - Modify Google Form to remove time slots from available choices once they're taken
  - Dynamic message based on days left until the event ("See you next week" vs "see you this Tues" etc)
  - Maybe: Schedule automatic reminders leading up to the event
  - Research: what's possible with the Gmail API? I'd love to auto-update the spreadsheet when I get replies from the volunteers, instead of manually updating it every time somebody confirms or cancels.


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
  
