# Movie Ticket Booking System
The Movie Ticket Booking System is a web application that allows users to view movie details and purchase tickets. It provides an intuitive user interface to browse movies, check available showtimes, and buy tickets for a selected movie.

# Features
Movie Details: Users can view detailed information about a specific movie, including the movie poster, title, description, showtime, and runtime.

Ticket Availability: The system displays the number of tickets available for each movie, allowing users to know the remaining tickets before making a purchase.

Ticket Purchase: Users can click the "Buy Tickets" button to purchase tickets for a movie. The system will decrement the available tickets count and display the updated availability.

# Installation
To run the Movie Ticket Booking System locally, follow these steps:

Clone the repository: git clone <repository-url>
Navigate to the project directory: cd movie-ticket-booking-system
Open the index.html file in a web browser.
Usage
Launch the application by opening the index.html file in a web browser.
Browse the list of available movies and click on a movie to view its details.
Check the available tickets count for the selected movie.
Click the "Buy Tickets" button to purchase a ticket.
The available tickets count will be updated, reflecting the successful purchase.
Repeat steps 2-5 to browse and purchase tickets for other movies.
API Integration
The Movie Ticket Booking System integrates with a backend API to fetch movie data and update ticket availability. The API endpoints used are:

GET /films: Retrieves the list of available movies with details.
GET /films/{id}: Retrieves detailed information about a specific movie.
POST /films/{id}/buyTicket: Updates the ticket availability when a ticket is purchased.
Note: The API endpoints and their implementation are not included in this code repository. Please refer to the API documentation for more information on setting up and using the backend.

# Technologies Used
The Movie Ticket Booking System is built using the following technologies:

HTML
CSS
JavaScript

# License
This project is licensed under the MIT License.

# Contributing
Contributions are welcome! If you would like to contribute to the Movie Ticket Booking System, please follow these steps:

Fork the repository.
Create a new branch for your feature: git checkout -b feature-name
Make your changes and commit them: git commit -m 'Add some feature'
Push the changes to your forked repository: git push origin feature-name
Submit a pull request detailing your changes.
