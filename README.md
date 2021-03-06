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

<hr/>

### Day 36: 2018-06-26

**Tree Visualization -- Finished:**
  - [**Gist link with examples**](https://gist.github.com/LearningNerd/b27ace0a2ffdca4d9f1394d2b676ca5e): Fixed the little bug I noticed yesterday. All I had to do was reset the inner index at the *start* of the outer loop, just like how it works in a normal nested loop. So easy, and yet I didn't see it this entire time! lol
  - Fixed it so that only one step will run at a time (simply by adding one more `return` statement, silly me!)
  - Now checking the inner loop condition (instead of only checking the outer/inner loop toggle), because I found an important new bug: if the last half of the outer loop changes the values used for the inner loop's condition, then the inner loop will still run even when it shouldn't!
  - Linked it back up with my tree-drawing example code, and it works! I even made an animated GIF to celebrate this tiny victory, haha.

<hr/>

### Day 37: 2018-06-27

**Tree Visualization -- Finished:**
  - [**Gist link for tree traversing and generating**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5)
  - Back to the drawing board with tree traversal algorithms, and sketching them out on a blank piece of paper got me unstuck! Finally!
  - I realized an important detail that I hadn't seen in all my previous attempts: I can just *always* push *both* nodes into the stack of next nodes to visit, and *always* set the next current node to the next node in the stack!
  - So far, using 3-level perfect binary trees, it looks like the only difference between *depth-first* and *breadth-first* search is whether I choose the next node FIFO-style or LIFO-style -- as a stack (last-in-first-out) or as a queue (first-in-first-out).

<hr/>

### Day 38: 2018-06-28

**Tree Visualization -- Finished:**
  - [**Gist link for tree traversing and generating**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5)
  - Redid my tree-drawing function to draw it from the top down (instead of bottom up). Had some funny little bugs, then got stuck on some math and took a break.
  - At night I tried again to fix that bug, and my attempts created a whole bunch of other funny little bugs, and then I finally fixed it! Top-down trees are just as easy. (I just need more practice at arithmetic. I didn't even need logarithms, haha)

<hr/>

### Day 39: 2018-06-29

**Tree Visualization -- Finished:**
  - [**Gist link for tree traversing and generating**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5)
  - Wrote a function to generate perfect binary trees of `n` number of levels, one step at a time. Yay!
  
  - I realized that instead of using a nested loop to increment the tree level at each step and using that to determine how many "rows" of nodes to create (or draw), I can just use a single loop if I use the total number of nodes as the looping condition! So much simpler!


<hr/>

### Day 40: 2018-06-30

No coding today. So exhausted after a long day of teaching and talking about code, and then an ordeal with my car. If I could've planned for that inadvance, I would've done some programming practice earlier! Oh well, at least I had a pretty good streak this past week.

<hr/>

### Day 41: 2018-07-01

No coding today either, but there was no good reason for it. I just didn't feel well. I felt pretty depressed, out of nowhere. It had been a good while since I last felt that way, so it sort of took me by surprise. It was as if I had absolutely no energy, and no motivation to do anything other than some comfort-seeking. But the good news is these sorts of days are becoming less and less common for me now, and I'm better at trusting that I'll feel like my normal self again soon.

<hr/>

### Day 42: 2018-07-02

**Tree Visualization -- Finished:**
  - [**Gist link for tree traversing and generating**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5)
  - Combined my single-loop tree-generating function with my previous tree-drawing function, so now I have a function that generates trees and draws each node at the same time!
  - Made a function that generates a tree with x and y coordinates that can be drawn later, to make it easier to test different traversal algorithms.
  - Animated my depth-first tree traversal algorithm and it works like a charm!

**Tree Visualization -- Ideas for later:**
  - Experiment: can I *generate* a tree / draw it on the fly with a depth-first search algorithm?

<hr/>

### Day 43: 2018-07-03

**#TIL:**
  - Trees are great for representing choices/outcomes in a game, and thinking through the consequences of a move (as far ahead as one can) is a mental depth-first traversal! ([source](https://stackoverflow.com/a/37069004))
    
  - "Breadth-first" and "level-order" are two names for the same type of traversal
  - There are 3 subtypes of "depth-first" traversals: preorder, postorder, and inorder ([source](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/))
    - Preorder Traversal (Root-Left-Right)
    - Postorder Traversal (Left-Right-Root)
    - Inorder Traversal (Left-Root-Right)

**Tree Visualization -- Finished:**
  - [**Gist link for tree traversing and generating**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5)
  - Wrote a function that generates random (non-perfect) binary trees of a given number of levels, assigning coordinates as well. This version assigns numerical values in the order that the nodes are created.


<hr/>

### Day 44: 2018-07-04

No coding. Just a little work on other things and then time with family for the holiday. (The day Will Smith saved us from the aliens, of course.) I also made the mistake of starting to play video games again, haha.

But I did read a little bit about binary search trees on my phone in between all the festivities. Just enough to work up an appetite.

**#TIL:**
  - A binary search tree (*ordered* or *sorted* tree) is special kind of binary tree, where the value of every left child node is less than or equal to the value of its parent, and the value of every right child node is more than or equal to the value of its parent. 

<hr/>

### Day 45: 2018-07-05

The main question on my mind right now: how do I create a binary search tree in the first place? Everything I've read online so far talked about how to search through them, insert elements, and just about everything except how to create one. I don't want to just look up the answer though! So I guess I'll tinker with it a bit.

**#TIL:**

By tinkering with an example array and manually turning it into a binary tree, I discovered a few things for myself:

  - A binary search tree looks completely different, depending on the order in which the nodes are inserted and which is set as the root node.
  - Turning a sorted array into a binary search tree, inserting nodes in the same order, creates an entirely useless BST! (I later learned that's what an *unbalanced* tree is.)
  - Creating a BST from a sorted array by starting in the middle is much better. A random, unsorted array is also still usually better than the 100% unbalanced tree example above.
  - I proved to myself that binary search for a sorted array is indeed done in time O( log(n) ) whereas simply looping through the array would take up to time O(n).

Answering my question about binary search in arrays vs binary search trees, via ([source](https://stackoverflow.com/questions/5968937/binary-search-vs-binary-search-tree)):

  - For querying alone, a sorted array with binary search is better than using a binary search tree.
  - "But constructing a sorted tree is a lot faster than constructing a sorted array, when you're adding elements one at a time."
  - Inserting/deleting nodes in a binary search tree is O( log(n) ), while inserting/deleting elements into a sorted array is O(n). 
  - I liked [this blog post](http://blog.lookfar.com/blog/2016/07/28/why-binary-search-trees-matter/) in general, but I think he's flat-out wrong when he said that searching in a binary search tree is faster than searching through an array in general; he never once mentioned binary search through an array! So is this a common misconception?


**Finished:**
  - [**See Gist link for binary search tree stuff**](https://gist.github.com/LearningNerd/daa5a94953627d93a20ea8d540c66918): Wrote a function that creates a binary search tree from an array -- just not the most balanced tree, haha. But it's not the *most* unbalanced it could be.

<hr/>

### Day 46: 2018-07-06

No coding. I had a sleep-deprived, no-breaks work sprint and then I decided to spend my evening playing more video games, haha. The addictive power of gaming is *real!* That's why I took such a long hiatus from it. Oh well. Balanced will be restored soon enough.

<hr/>

### Day 47: 2018-07-07

Super super sleepy today after a long day of teaching and a volunteer / planning meeting. So I'm sort of just spinning my wheels tonight. 

**#TIL:**
  - I realized that my binary tree generating function from the other is flat-out *wrong*, haha. More importantly, I realized why: when inserting new values, it isn't comparing them to *every* parent node. So the "binary search tree condition" isn't holding tree for the tree I generated the other day.
  
  - Not only is my code wrong, but my own drawings on paper were also wrong! I clearly did not understand what a binary search tree *really* is. Just like my code, I was only comparing values to their direct parent, not to every parent of those parents. Oops! Now I'll definitely never forget this one, because I feel pretty sheepish right now, haha.
  

**Finished:**
  - [**See Gist link for binary search tree stuff**](https://gist.github.com/LearningNerd/daa5a94953627d93a20ea8d540c66918): Wrote a function that traverses through a binary search tree to find a given value


<hr/>

### Day 48: 2018-07-08

**Finished:**
  - [**See Gist link for binary search tree stuff**](https://gist.github.com/LearningNerd/daa5a94953627d93a20ea8d540c66918): Wrote a function that inserts a single value into a binary search tree (based on my broken code from the other day... turns out, it wasn't so broken after all!)
  - Used that new function in a loop to fix my previous function -- now I'm successfully generating binary search trees from a given array of values. Yay!


<hr/>

### Day 49: 2018-07-09

**Finished:**
  - Wrote a function that creates *randomly generated* BSTs with a given number of values in a given range. (Only numeric data for now.)
  - Wrote a broken function that generates a random BST and draws it on the fly. (But it's not drawing every node! Some of the coordinates are negative values so they aren't visible on the canvas. Clearly the coordinate generation is broken.)


<hr/>

### Day 50: 2018-07-10

No coding today. I was feeling somewhat discouraged, and staying at home on another hot summer day playing video games was just too enticing! I feel like a teenager again, straight back to the days in high school when I was obsessed with one game or another and I didn't do my homework until the very last minute! It's so fun and so nostalgic. But coding is really fun too, and I miss it already. Whatever I get stuck on, and regardless of how slow progress feels sometimes, I'll keep at it.

<hr/>

### Day 51: 2018-07-11

Worked on fixing my random binary search tree drawing function! (Combining my [**generateRandomBST function**](https://gist.github.com/LearningNerd/daa5a94953627d93a20ea8d540c66918#file-generaterandombst-js) with my [**generateRandomTreeWithCoords function**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5#file-generaterandomtreewithcoords-js)).)

**The problem:** if dynamically generating a tree of *any* number of levels, working from the top down, then there's no way to know up front what the initial x distance between the nodes will be! The distance between nodes depends on the height of the tree.

Possible solutions (so far):
  - Specify the number of levels up front (stop adding nodes when the tree has that many levels)
  - Or a fancier, more flexible solution: redraw all the nodes each time a new node is added

Spent an hour on it, made a little progress, but it's still broken! I'll fix it tomorrow.

<hr/>

### Day 52: 2018-07-12

**Finished:**
  - Wrote a function that returns the height of any given binary tree, perfect or not! ([**See Gist link**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5#file-gettreeheight-js))
  
  - Finally fixed my random binary search tree drawing function! (Combining my [**generateRandomBST function**](https://gist.github.com/LearningNerd/daa5a94953627d93a20ea8d540c66918#file-generaterandombst-js) with my [**generateRandomTreeWithCoords function**](https://gist.github.com/LearningNerd/2526ee9c477977ffcf1d65db05089be5#file-generaterandomtreewithcoords-js)) and now also with my **getTreeHeight** function linked above.)

**Questions:**
  - To find the height of a tree, does it matter how it's traversed? (My gut says "no", if there's no information about the shape of the tree.)
  - Is there a better way to find the height of a tree, without storing the height of *every node* in a temporary data structure?

<hr/>

### Day 53: 2018-07-13

No coding. I spent most of the writing *about* coding and making practice challenges and example code snippets. And then I didn't feel like thinking about code anymore when I got home. 

<hr/>

### Day 54: 2018-07-14

No coding. I had a long, sleep-deprived day of teaching, the rock climbing, falling asleep at the climbing gym for a few minutes, napping a bit, and then playing video games.

<hr/>

### Day 55: 2018-07-15

Third day in a row, no coding. Very social day, with an early morning coffee meeting with an old friend, then a family brunch and a nice nap. Board games with friends all night. Definitely feeling guilty about it at this point. This is the longest streak of no coding practice I've had since I started this experiment. Hard to believe I'm more than halfway to 100 days!

Feeling a bit discouraged now with my own lack of motivation. I find myself thinking things like "Maybe I just don't like coding enough" and "Maybe I'm not cut out for this", but then I remind myself that I've taken *many* breaks -- long breaks! -- from writing any code, and I always come back to it. So I must enjoy it. There's nothing wrong with taking a break for a while.

<hr/>

### Day 56: 2018-07-16

Ready to get back in the habit, after three days off! 

**Finished:**
  - ([See Gist](https://gist.github.com/LearningNerd/daa5a94953627d93a20ea8d540c66918#file-drawtree-2018-07-16-js)) Separated my code into one function that generates a random binary search tree one step per mouse click, which then calls a separate function that draws the given tree -- so the effect is it redraws the tree for each animation frame.

<hr/>

### Day 57: 2018-07-17

**Finished:**
  -  ([See Gist](https://gist.github.com/LearningNerd/daa5a94953627d93a20ea8d540c66918#file-drawtree-2018-07-16-js)) Bug fix: now cycles through color array, so no bug due to an undefined array index
  - Bug fix: using `pixelDensity(1)` trick so that now the entire canvas is cleared on each frame, instead of only the top left quadrant (a bug only on retina displays). I even posted a comment about it [on the pull request for p5js here](https://github.com/processing/p5.js/pull/2852)!
  
  - Now drawing lines connecting the nodes. That was incredibly easy, now that the child node coordinates are based on the coordinates of their parent.
  
  - Now displaying the value of each node, with text size based on node size and number of digits

  - Also displaying the tree as JSON at each step, on the canvas next to the drawing

<hr/>

### Day 58: 2018-07-18

No coding. Well, not for my own projects or for learning new stuff. I did write a bunch of code for tiny example projects to use in my class. It's hard to come up with projects that are interesting, that also don't need a lot of code, that can focus on just *one* new concept. Like arrays without loops, before talking about loops and then looping through arrays.

Anyhow, my mistake today was that I answered emails before doing anything else, and then I got caught up in other work. I know that the only way to get myself to do something is to do it first thing in the morning and give myself permission to not address other things until a designated time. 

Oh, but I did learn a bunch about Vim yesterday and today!

**New Vim stuff:**
  - How to install Vim plugins (manually)
  - How to set up file-specific config stuff (like key bindings fo only one file type)
  - How to automatically run commands usint `autocmd`
  - I tried out three Markdown plugins (better syntax highlighting)
  - I set up [grip, a Github-flavored Markdown previewer](https://github.com/joeyespo/grip) and used the [asyncrun.vim plugin](https://github.com/skywind3000/asyncrun.vim) with `autocmd` to automatically run the Markdown previewe web server window in the background when I open a Markdown file
  - Then I set up an auto-save script so that Vim will save my files every N milliseconds, and since grip watches my files, it'll automatically refresh the page on every save. Yay!
  - Learned a bit about how syntax highlighters work in vim, so I could turn off the Markdown bold/italic delimiters completely. (Fixing a bug where `***bolditalic* onlybold**` breaks everything, even though GitHub converts it to HTML exactly as expected. How annoying!)
  - Spent way too much time customizing the syntax highlighting for Markdown and GitHub-flavored Markdown specifically.
  - Learned how to override highlighting rules and the colors set for each tag, from within my `vimrc` file.
  - Figured out how to open split-panes, open different files, and switch between them
  - Relearned how to search for things within a file

<hr/>


### Day 59: 2018-07-19

**Finished:**

  - ([See Gist](https://gist.github.com/LearningNerd/13dc9e9f920030a37fb1d272628d95b8)) Created three simple recursion examples: generating a sum, generating an array of values, and then using an *immutable* array of values (not so nice with recursion though!)
  
  - Created a first tiny visualization of the steps of my recursive code, first using `setTimeout()` and then instead by pushing values to a queue and then drawing those frames by iterating through the queue on each mouse click.

<hr/>

### Day 60: 2018-07-20


https://gist.github.com/LearningNerd/13dc9e9f920030a37fb1d272628d95b8#file-workinprogress-7-20-js


**Tree Visualization -- Next challenges/questions:**  
  - Test my new drawing code with a recursive Fibonacci sequence generator, visualizing the values and ouput at each step
  - Write a recursive algorithm for breadth- and depth-first search through a binary tree
    - And then visualize it with my new frame-queue-drawing code
  
  - Use the queue structure to draw my random binary tree:
   - Version 1: A queue of objects (takes up a lot of memory though!)
   - Version 2: Use an intermediary function to generate coords/values and push *each node* to the queue individually
 
 - Use this new structure/technique to visualize other algorithms:
    - Depth-first search/traversal
    - Breadth-first search/traversal
    
  - Make a better algorithm for calculating distance between nodes; the nodes don't need to be so far apart as the tree increases in size!


<hr/>

### Day 61: 2018-07-21

No coding today. After teaching my class, I took a nap and woke up just in time to go to this huge street food / night market event, and then I got home just in time to pass out. It was a fun day, but definitely over-scheduled. Oh well!

<hr/>

### Day 62: 2018-07-22

Today I think I feel like taking a break from messing around with trees and recursion. Today I feel like doing something completely different. At least for a little while. I'm pretty sleepy too, but I know I can make time for a little programming practice today. So I was thinking, maybe I can make a game! Tetris has been on my mind for a while now since I was helping one student work towards building it herself. I'm not sure just how much work it would take to finish it, so that might be fun!

[**Project on Glitch (for now)**](https://glitch.com/edit/#!/yay-tetris)

**Tetris features / problems to solve:**

  - Animating blocks to move down the screen
  - Making them stop at the bottom
  - Drawing another block after the previous block has fallen
  - Collision detection
  - Moving blocks left and right on key press
  - Game over when blocks reach the top of the screen
  - Making the blocks into each Tetris shape
  - Randomizing which block is next
  - Rotating the blocks on key press
  - Deleting when a row is completed
  - Tracking the score

**Finished:**
  - Animating a block to move down the screen
  - A tetromino object constructor, with methods for movement
  - A method for checking if the tetromino has reached the bottom
  - Create a new block when the previous block lands
  
<hr/>

### Day 63: 2018-07-23

I'd love to finish Tetris today! Since I worked both days this weekend, I planned for today to be my Sunday. (Update: I only spent an hour or two coding today though.)

**Finished:**
  - Set up a 2D array, tracking which squares in the game grid are occupied.
  - Refactored `isFalling` to `hasRoomBelow`, which checks the `gameGrid` for collisions (instead of checking based on pixel calculations).
  - Refactored the tetrmino's `moveDown` method to switch blocks on/off inside the `gameGrid`.
  
  - Learned how to generate an array with the `Array` constructor, `fill`, and `map`. Found a couple interesting quirks:
  
    - The `Array` constructor will generate an array of the given size, but the elements are "empty" -- they have no value, not even `null` or `undefined`! So weird! And that means you can't iterate over them with `map`. So the solution is to first `fill` them with a value like `null`, and then use `map`.
    - Lesson learned: don't use a nested `fill` -- since arrays are objects, the generated array will be filled with pointers that all point to the *same* array, rather than separate arrays with the same elements.

<hr/>

### Day 64: 2018-07-24

**Finished:**

  - Finally moved this notes file to my computer so I can work on it locally and get more practice using Vim.
  - Also moved my Tetris project code to a local Git repo and started (finally!) writing my code in Vim.
  - Refactored to rename tetrominos' `x` and `y` properties to `row` and `col`.

  - Can now move blocks left and right on key press. (Also fixed it up so key presses draw the next frame, not clicks.)
  - Added a bit of logic to prevent tetrominoes from being moved off screen.
  - Bug fix: the game grid now updates accordingly when blocks are moved left or right. (For now, the game grid is updated *twice* in every tick of the game loop. Will need to clean this up later.)

  - Added game over condition which displays a message on the screen
  - Random pastel colors for each tetromino

<hr/>

### Day 65: 2018-07-25

**Finished:**

  - Completed rows now get deleted and remaining rows are shifted down. (The simple logic here won't hold up with more complex tetromino shapes, though. But it's a start!)
 
  - Created nested arrays of 0s and 1s to represent each tetromino shape, then wrote a function that converts those into a flat array of Square objects with coordinates (starting at 0,0 for the top left square).

<hr/>

### Day 66: 2018-07-26

**Finished:**

  - (Re)learned the very basics of using import/export modules (ES6 syntax) and after quite a few annoying bugs and successfully avoiding a rabbit hole (my global npm packages don't seem to be working), I got this working example: [my ES6 module import/export example code on Gist](https://gist.github.com/LearningNerd/08a5039a7c5cddf7342ecd0a32da94e3).
  
  - Separated code into modules: main file (renamed to `tetris.js`), tetromino constructor, and a module for helper functions.
  
  - Switched to using p5js in ["instance mode"](https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace), which was the only way I could figure out how to use p5js with my own code organized as modules. (My best guess: the difference between global scope and module scope is what's messing this up!)
  
  - To solve scope issues (the Tetromino module can no longer access "global" vars in `tetris.js`), for now I'm just passing the variables for `gameGrid`, `blockSize`, and the p5js instance object all as arguments for the Tetromino constructor. There must be a better way, but this works for now. 


**Resources and notes on ES6 modules:**
  
  - I like [the info in this article](https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7) on using ES6 modules as a "high water mark" for browsers that use modern JS!  
  - I'm still confused about how "default" exports/imports work, but I'll save that for another day.


**Misc stuff to look at later:**
  - Learn more about module scope vs block scope and best practices for how to structure module relationships!
  - [The p5js website has a beginner-friendly intro to test-driven development](https://p5js.org/learn/tdd.html), which I've been wanting to finally start learning.


<hr/>

### Day 67: 2018-07-27

**Finished:**
  - Wrote down a bunch of notes as comments in my code, brainstorming how to refactor into separate components
  - Successfully updated my code with a Square module and changes to the Tetromino model, integrating the code I wrote yesterday to generate an array of Square objects from an array of 1s and 0s representing each tetromino shape.
  - Did a quick test with a new p5js draw function to draw a single tetromino -- it works! (I commented out the old drawing code for now, since I need to reorganize everything and rewrite practically every method.)
  - Created a new branch for the previous version named `single-square-tetris`, so I can easily jump back to my first "finished" version.


<hr/>

### Day 68: 2018-07-28

No coding today. After teaching all afternoon, and being pretty sleep-deprived again, I just didn't feel like it. I'm thinking that as far as habits go, taking a day off once a week is totally fine by me. Or the weekends. Or just treating it like going to the gym: 3 or 4 days a week works great.

<hr/>

### Day 69: 2018-07-29

**Finished:**
  - Refactored Tetris file to break it up into two modules: one with a Tetris constructor, and a separate file for the drawing interface. So I moved all the p5js code there.
  - Now the Tetris constructor has parameters for number of rows and columns, which are defined as constants in the drawing interface file
  - The drawing loop calls `gameLoopTick()` which, for now, does nothing except return an array of squares to be drawn.
  - Gutted the Tetromino module, removing all the movement and collision-detection code and removing all references to p5js or the game grid.

<hr/>

### Day 70: 2018-07-30

**Finished:**
  - Now each new tetromino has a random shape
  
  - Wrote up some notes to try to visualize the code that I'll be writing for this new version, but I was probably just over-thinking it. I wanted to start writing the code to move a tetromino down the screen, but then I ran out of time. And I ran into a bunch of annoying bugs, and realized my local server just wasn't loading the updated files. I could've sworn that Command + the refresh button on the touch bar worked last time, but it didn't this time! (Only using the refresh button in the browser window works for a hard refresh.)

<hr/>

### Day 71: 2018-07-31

**Finished:**
  - Successfully moving a tetromino down the screen on each frame, yay!
  - Added `hasRoomForNextMove` method to Tetris module with downard collision detection. And it works! Phew!

  - Refactoring: now storing `fallenSquares` as an array, separate from the current tatromino object (containing its own squares), instead of keeping track of a merges `squares` object. Overly complicated! Instead, now the Tetris module passes a merged array of all squares to the interface module.
  - Refactoring: now the Tetromino's `move` method returns the entire tetromino object, not just its squares array. Makes more sense.

  - Wrote a new `updateGameGrid` method for the Tetris module, which switches grid spaces on and off based on old and new coordinates of the current tetromino.
  - Refactored `print` method to use a copy of the `gameGrid` (otherwise the console would always show the newest version of the array, or I'd have to pass in a copy of it every time I call the print method, which is annoying... so I'm starting to see the usefulness of not mutating arrays, for sure!)

<hr/>

### Day 72: 2018-08-01

**Finished:**
  - Added left/right collision checking to `hasRoomForNextMove`, which was broken at first. (I forgot that I can't check for *both* sideways and downward collisions at the same time (I don't think); if there isn't room to the side, the tetromino also doesn't move down. That's no good!)

  - Interface now sets the `nextMove` variable and passes it to the Tetris module's `gameLoopTick` method, which passes it along to `hasRoomForNextMove` and the Tetromino module's `move` method.

  - Fixed left/right movement! Current tetromino now moves left or right *only*, without also moving down. And now it moves down on its own every X frames. (Later might change this to every X milliseconds based on timestamp. Not sure which is better.)


<hr/>

### Day 73: 2018-08-02

**Finished:**
  - Yesterday I got it to create a new tetromino when the previous one lands, but now I also got the canvas to draw all the previous squares in addition to the new squares. And I fixed a little bug I had created, where they weren't moving all the way down the screen even though they had room. (Forgot to switch out one argument, oops! Tiny fix!)

  - The game ends now, yay! I added an `isOffScreen` method to the Tetris module. At first I had a couple little bugs, but I fixed them up! Now each new tetromino appears fully on the screen, and the game ends when any of its squares are in the top row. (Probably still needs some tweaking, though.)

- New bug discovered: my collision detection is off in a few important cases! For the "S" shape, only its bottom-most square checks for collisions, so it actually *sinks* into the squares below in certain situations, because one of its squares ignores collisions! My logic was oversimplified. Oops.

<hr/>

### Day 74: 2018-08-03

**Finished:**
  - Completely rewrote the collision detection logic in `hasRoomForNextMove`, which feels super complicated but at least it works now! I'm checking every square against every other square in the tetromino, then removing every square that has a neighbor (below, to the left, or to the right), and finally checking the adjacent `gameGrid` locations for each of the remaining `edgeSquares`.

  - Along the way to rewriting that method, I created all sorts of new little bugs and made some silly mistakes related to array indexes and trying to modify an array in place -- bad, bad, very bad!

  - I discovered a new bug (or re-discovered it?): the game-over condition has false positives, if moving the tetromino left or right while it's still at the top of the screen. Gotta rewrite that one from scratch too, probably!

**#TIL:**
  - I found a very cool little algorithm for filtering an array in place [from this StackOverflow thread](https://stackoverflow.com/questions/37318808/what-is-the-in-place-alternative-to-array-prototype-filter), where you keep track of two indexes to overwrite the elements to remove with elements to keep from further down the array, and then reset the array's length manually at the end to chop off the last half. I didn't even know you could do that! [This thread on "index adjustment" and why it's clunky to change an array in place](https://stackoverflow.com/questions/18305431/how-to-remove-all-odd-numbers-in-an-array-using-javascript/18305442) was interesting.

<hr/>

### Day 75: 2018-08-04

No coding. (Aside from spending all of 2 minutes starting to write notes in here, and then I stopped to play games the rest of the night because I felt pretty burnt out after my class.)

<hr/>

### Day 76: 2018-08-05

No coding. I just didn't feel like it. Taking a nap and finally eating, and then rock climbing, and then going out for food... and then I was too tired to even *think* about working on anything at night. I guess I have it in my head already that it's OK to take a break on weekends, especially since I taught a class both days this weekend (again), and it's pretty exhausting.

<hr/>

### Day 77: 2018-08-06

**Finished:**
  - Rewrote game-over condition: as soon as a new tetromino is created, check if it overlaps any squares on the game grid. Works like a charm!

  - Reimplemented clearing rows and shifting down squares, hurray!

  - Bug or feature? Sometimes a square will be left floating in mid-air, if there was a bigger gap below it. I forgot if the original game did this, and it looks like it does! But I still have this nagging feeling that my implementation is missing something... Oh well, good enough for now.

  - A little refactoring: now reusing `updateGameGrid` after clearing rows and updating the array of squares, instead of creating another method to accomplish the same thing. (Now `updateGameGrid` is called after moving the current tetromino *and* after clearing any rows.)

  - Implemented rotation, woohoo!!! It was easier than I thought -- at least the first step. The last row becomes the first column, and the first row becomes the last column, for each clockwise rotation. Just a couple of nested for loops, incrementing one counter and decrementing the other. What a beautifully simple pattern! Very satisfying to figure out. But...

  - Bug to solve: I don't know why the tetromino moves down the screen when it's rotated. It looks like the coordinates of its squares don't match the game grid anymore. Not sure why. I'll also probably have to rewrite the collision detection *yet again*, because it seems downright impossible to use the current implementation to check for collisions caused by rotations. Eep!


<hr/>

### Day 78: 2018-08-07

**Finished:**

  - Worked it out on paper: I can indeed rotate the tetrominoes using only their coordinates, no need for rotating the shape and then updating their coordinates in two separate steps. Time to try implementing it in code now! I'm excited by just how simple this might be!

  - Implemented new rotation algorithm and added `centerSquare` property, marking the center in the `shapes` templates with the number 2. New algorithm: calculate each square's offset from center square, switch row/column offset and negate one of them, apply new offset to generate new coordinates. So much simpler, no need to rotate the shape template itself!

  - Rewrote collision detection to be *so much simpler!* Now instead of checking the edges of a tetromino, I just changed the `move` method into a `getNewTetromino` method that returns a new tetromino object with the coordinates that result from the proposed move. Then I check if any of those squares overlap or go outside the game grid; if not, I set the current tetromino to that new version!

  - Fixed a tricky bug: I forgot that `[...myArray]` only makes a *shallow* copy of an array, and I'm using nested arrays! So now, instead of making a copy of the game grid and switching off the tetromino's previous coordinates (which also switched them off in the actual grid, oops!), now it's checking for coordinates that overlap but *excluding* any from the previous coordinates. 

<hr/>

### Day 79: 2018-08-08

Since I solved what I thought were the hard problems of Tetris, I'm basically done now! But I'm also nowhere close to done, because there are lots of little details I haven't implemented. I recognize this feeling from every project I've ever done -- the moment when I need to decide: how much is enough? 

Today I discovered there's *a lot* of nuance to the Tetris rotation system, and it varies from game to game. The [Tetris Guideline](http://tetris.wikia.com/wiki/Tetris_Guideline) is the current specification, developed in 2001 to standardize all official Tetris games.

Now that I know this exists, my inner perfectionist wants to keep going until my version matches the official specs. But my original goal here was just to find out how hard it would be to build Tetris, and how long it would take me, and to learn whatever I could from the challenge. Turns out, as with most projects, it took me way longer than I thought it would!

OK, time to decide.

**Final-ish list of features for my good-enough Tetris:**

  - Fix the rotation bug for the O shape -- it doesn't rotate at all!
  - Track number of lines cleared (I don't care about the intricacies of the official scoring system)
  - Use all 7 Tetris shapes
  - Assign a fixed color to each Tetris shape
  - Show a queue of upcoming shapes


**Some misc notes and rabbit holes for another day:**

  - [This StrategyWiki overview of Tetris rotation systems](https://strategywiki.org/wiki/Tetris/Rotation_systems) is fascinating!  

  - So now I know that *wall kicks* are a thing. I might want to try implementing the most simple variation, so the tetromino can be rotated when against the side walls, if there's room.

  - Apparently it's *tetrominos*, no "e"! That's according to The Tetris Company, supposedly. But Wikipedia and other sites write it as "tetrominoes", so I'll stick with that.

  - Officially, there actually is a non-visible portion of the grid ("playfield")! Good to know!

  - Each piece has a specific spawn rule: horizontal, with J/L and T pointing up, and in particular columns!


**Finished:**

  - For the "O" shape, set its `centerSquare` property to `undefined` and updated the `rotate` method to end early and return an uneditied copy of the tetromino in that case, so now the "O" shape literally *does not* rotate.

<hr/>

### Day 80: 2018-08-09

**Finished:**

  - Added score (just the number of lines cleared)
  
  - Refactoring: now `gameLoopTick` returns an object containing the squares to draw, whether the game is over, and the score. Now the interface module handles displaying "game over" and displays the score too.

  - Added all 7 shapes, each with an assigned color. Refactored: Tetris module stores the shape templates and handles randomly generating shapes, passing them to the Tetromino constructor (instead of the Tetromino handling that).

  - Added queue of next tetrominoes! Now the canvas draws the next tetrominoes off to the side, and the playfield is now a subset of the canvas. The Tetris module now stores the queue of next tetrominoes, taking the next one and pushing another to the queue each time a new tetromino is dropped. (I'm not doing that "7 bag" algorithm that the official game uses, so the randomness of the shapes could use some tweaking, but whatever. This is good-enough Tetris.)

  - Added animation! Now the game animates itself! Fixed a couple little bugs: now the piece doesn't move down on every single game loop tick (and for now, game loop ticks are the same as animation frames). Another interesting bug was that at first, the pieces kept repeating their move on every frame until pressing a different button. The fix was simple: use the p5js `keyIsDown` method *inside* the draw loop to update (and reset) on every frame.


**Questions and threads to follow later:**

  - What are the pros and cons of defining local variables within an object constructor, compared to setting them as properties of the object? (Using `let blah` versus `this.blah`)
  - Look into use cases for creating custom events
  

<hr/>

### Day 81: 2018-08-10

**Finished:**

  - Implemented counter-clockwise rotation, following the [Tetris Guideline](http://tetris.wikia.com/wiki/Tetris_Guideline) to map it to the "Z" or "Ctrl" keys.

  - Tetrominoes now spawn horizontally, and in the left/center columns, according to the official guideline.

  - Re-implemented the "soft drop" move: when the user presses the down arrow, the tetromino moves down immediately (potentially on every game loop tick if the key is held)

  - Added "hard drop" move: when user presses Space, immediately move the tetromino as far down as it has room for. My code's a bit messy in my attempt to keep it DRY... something to take another look at later! At first I had a little bug where the tetromino could still be moved after the hard drop, but I fixed it with one tiny change to the logic.

  - To prevent the page from scrolling when pressing the arrow keys, I just used `preventDefault()` with the "keydown" DOM event. For whatever reason, it didn't work with the p5js `keyPressed` method. Right now I'm using the `which` property to get the key codes for the game controls and only disabling those.


<hr/>

### Day 82: 2018-08-11

No coding, totally fine with taking the weekend off.

<hr/>

### Day 83: 2018-08-12

No coding. Nice lazy Sunday.

<hr/>

### Day 84: 2018-08-13

**Finished:**
  - Fixed key-repeat issue. After a bit of a wild goose chase, I finally realized that the official Tetris game has a delay befor repeating a move! The solution ended up being pretty simple: register the initial key press, but then ignore it until reaching the threshhold (some number of milliseconds), and then repeat the move as long as the key is held down.

  - The soft-drop repeats immediately though, no delay. (That's what it seems to do in the official game.)
    
  - I spent *a lot* of time experimenting with it to try to get the right feel for the controls. I'm reasonably happy with it now!

<hr/>

### Day 85: 2018-08-14

**Finished:**
  - Implemented left/right plus soft-drop combined move, so now if you hold down both keys it'll move quickly down and to the side simultaneously. Feels much more intuitive this way!

  - Fixed a tiny edge case: previously, holding left and then also holding down right arrow key would cause the tetromino to still repeat moving to the left, because that was the order of the conditional statements. I'm sure it would rarely happen, but it definitely shouldn't work that way! One small change to fix it: track which key was the most recent one pressed, and only repeat left or right if it's held down *and* the most recently pressed key.



**Updates for later:**

  - Add title and info to the web page (to publish it)
  - Refactoring! The code is still pretty messy.
  - Bundle the JS files and transpile (learn about Webpack etc for this, probably!)
  - Add replay button (so users don't need to refresh the page to play again)
  - Add basic wall kicks (see [bottom of this page on Tetris rotation systems](https://strategywiki.org/wiki/Tetris/Rotation_systems) for reference)
  - Maybe: flesh out the scoring system
  - Maybe: sound effects
  - Maybe: add pause/resume feature

Obviously, the sky's the limit as far as other feature ideas go! Game modes, a multiplayer version, various experimental variations on the game logic, mashups between Tetris and other games... But I need to stop somewhere!

<hr/>

## Archived to-dos for projects on hold

A good percentage of the projects I start will inevitably be abandoned in favor of something new and shiny. But I do often return to those old projects, so here I'll save my old notes for those projects' to-dos.

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
  
