# 100daysofcode

Coding for (at least) an hour every day for 100 days!

**Guidelines/Goals:**
  - The real goal here is to make studying a habit (again)!
  - Make something, and/or learn something new (related to comptuer science or programming) every day!
  - ...will add more details here later :) first, coding time!

**Inspiration:**
  - https://github.com/kallaway/100-days-of-code/
  - https://lifehacker.com/281626/jerry-seinfelds-productivity-secret
  - https://www.reddit.com/r/theXeffect/wiki/index
  - https://jenniferdewalt.com/
  - ...plus my own 100 video blogs in 100 days, and 30 days of web dev, and similar experiments

## Project 1: 

A don't-break-the-chain style app to keep track of my progress with the #100DaysOfCode.

***DONE*** -- **First steps:**
  - Set up Firebase
    - Hard-coded rows for 100 days, key in format "2018-05-22"
    - Save data as an object under the key for each day
    - For day's with no progress, key has value of null
  - User login with GitHub (via Firebase)
  - After logging in, display form:
    - Heading: Did you code today?
    - Two buttons: yes or no
    - Three form fields: link to project, link to tweet, notes
  - Save data into Firebase
  
**Second steps:**
  - Generate today's date string ("2018-05-22") dynamically! 
  - Display today's date at the top of the page
  - Pull data for the current day and display it in the form fields (so they're easily editable)
  - Refactor the code!!! (bit by bit... not urgent)
  - Progress page: calendar/grid of progress (with checkmarks or Xs)

**Other feature ideas:**
  - Title of project
  - Short description of project
  - Other notes? (What did I learn that day?)
  - ...an entire blog post related to the project?
  - Video recording of that day's work.
  - Time spent studying that day?
  - Other statistics (lines of code written? etc etc) ... probably not
