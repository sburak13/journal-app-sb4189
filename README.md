# MyCalendarJournal

## Overview

MyCalendarJournal is a calendar-based journaling app developed by Samantha Burak for COMS W3102: Full Stack Web Development. It fulfills the creative, passion-project option (Option 1) for our final project. MyCalendarJournal has a React frontend, a Node/Express backend, and reads and writes to a MongoDB database. The frontend code is deployed on Vercel, while the backend code is deployed on Railway. The frontend components call the Railway-specific URIs to execute the backend queries. 

## Deployment Link
https://journal-app-sb4189-frontend.vercel.app/

## Video Link
https://www.youtube.com/watch?v=E8Bl--lESuo

## Functionality

MyCalendarJournal displays a calendar of all the days in the current month, with the current date bolded in red. The user can switch which month is displayed (from January up to the current month) by toggling the toolbar on the top right of the screen. The user can create a journal entry for the current day by clicking on the cell corresponding to that day. There, they can write a journal entry and choose from a pre-set list of emojis to represent their current mood, before posting the journal entry to the database. On loading the home calendar screen, the app fetches the list of journal entries corresponding to the displayed month from the MongoDB database, and displays the emojis corresponding to those journal entry dates on the screen. Clicking on a cell with an emoji tells the app to fetch the corresponding journal entry content and display it to the user. 

## Code Structure

There are two main subdirectories of this project, frontend and backend. Frontend contains the client-side code, specifically App.js and the components Calendar.js, CalendarDays.js, Entry.js, and Form.js. This subdirectory also contains the corresponding CSS files for those components. Backend hosts the server-side code, and divides the folder into models (containing entry.js), routes (containing entry-routes.js), and the index.js file calling the relevant backend packages (express, mongoose, cors, etc.). 
