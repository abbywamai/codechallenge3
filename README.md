# codechallenge3

# FLATDANGO Movie Ticket Booking App
FLATDANGO is a movie ticket booking app that allows users to view movie details and buy tickets. This repository contains the front-end code for the FLATDANGO app.

# Features
Displays movie details including title, description, showtime, runtime, and available tickets.
Allows users to buy tickets by clicking the "Buy Tickets" button.
Updates the available tickets count when a ticket is bought.


The app will display movie details fetched from the server.
Click the "Buy Tickets" button to buy a ticket for a movie. The available tickets count will update accordingly.
# Customization
You can customize the movie details displayed in the app by modifying the filmDetails() function in the index.js file. Update the fetch URL or adjust the HTML template according to your server response structure.
Feel free to modify the CSS styles in the style.css file to match your desired design.
# Server Requirements
The FLATDANGO app relies on a server to fetch movie details. The server should provide the movie data in a specific format (an array of film objects) to work correctly. Make sure you have a server set up that can respond to the fetch request made in the filmDetails() function.

License
This project is licensed under the MIT License.

Copyright (c) 2023 ABIGAIL WAMAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

