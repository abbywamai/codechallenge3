
// Fetch movie details for a specific movie
fetch(`http://localhost:4000/films/1`)
  .then(res => res.json())
  .then(data => {
    // Destructure the movie data
    const { poster, title, runtime, description, showtime, capacity, tickets_sold } = data;

    // Calculate the available tickets count
    const ticketsAvailable = capacity - tickets_sold;

    console.log(ticketsAvailable);

    // Update HTML elements with movie details
    document.getElementById('poster').src = poster;
    document.getElementById('description').textContent = description;
    document.getElementById('title').textContent = title;
    document.getElementById('showtime').textContent = showtime;
    document.getElementById('runtime').textContent = runtime;
    document.getElementById('tickets').textContent = ticketsAvailable;

    // Add event listener to the "Buy Tickets" button
    document.getElementById('btn').addEventListener("click", function () {
      // Check if tickets are available
      if (ticketsAvailable > 0) {
        // Decrement the available tickets count and update the display
        ticketsAvailable--;
        document.getElementById('tickets').textContent = ticketsAvailable - 1;
        alert(`Ticket bought for ${title}`);
      } else {
        alert('Tickets are sold out.');
      }
    });
  })
  .catch(error => {
    console.log('Error:', error);
  })



    
// Fetch and display movie details for multiple movies
function fetchFilmDetails() {
  const movieDetails = document.getElementById("movieDetails");

  fetch('http://localhost:4000/films')
    .then(response => response.json())
    .then(data => {
      // Generate HTML elements for each movie
      movieDetails.innerHTML = data.map(film => `
        <div>
          <img id="posterimg" src="${film.poster}" alt="${film.title}" />
          <p><strong>${film.title}</strong></p>
          <p><strong>${film.description}</strong></p>
          <p><strong>Showtime: ${film.showtime}</strong></p>
          <p><strong>Runtime: ${film.runtime} minutes</strong></p>
          <p id="ticketsAvailable"><strong>Tickets Available: ${film.capacity - film.tickets_sold}</strong></p>
          <button id="button" type="button" onclick="buyTicket('${film.title}', ${film.capacity - film.tickets_sold})">Buy Tickets</button>
        </div>
      `);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Fetch movie details on page load
fetchFilmDetails();

// Function to buy a ticket
function buyTicket(movieTitle, availableTickets) {
  if (availableTickets > 0) {
    availableTickets--;
    document.getElementById('ticketsAvailable').textContent = `Tickets Available: ${availableTickets} `- 1
    alert(`Ticket bought for ${movieTitle}`);
  } else {
    alert(`Sorry, tickets are sold out for ${movieTitle}`);
  }
}
