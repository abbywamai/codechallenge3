


fetch(' http://localhost:4000/films/1')
.then(res => res.json())
 .then(data => {
    const { poster, title, runtime, description, showtime, capacity, tickets_sold,} = data;
const ticketsAvailable = capacity - tickets_sold

   
    // Update HTML elements with movie details
    document.getElementById('poster').src = poster;
    document.getElementById('description').textContent = description;
   document.getElementById('title').textContent = title;
  document.getElementById('showtime').textContent = showtime;
  document.getElementById('runtime').textContent = runtime;
   document.getElementById('tickets').textContent = ticketsAvailable;
//    document.getElementById('button').addEventListener("button", function() {
//     const ticketsAvailable = parseInt(document.getElementById('availableTickets').textContent);
  
//     if (ticketsAvailable >= 0) {
//       document.getElementById('availableTickets').value = ticketsAvailable - 1;
//     } else {
//       alert('Tickets are sold out.');
//     }
//   });
  

  })
  .catch(error => {
    console.log('Error:', error);
  });










        



   

    function filmDetails() {
        const movieDetails = document.getElementById("movieDetails");
      
        fetch('http://localhost:4000/films')
          .then(response => response.json())
          .then(data => {
            movieDetails.innerHTML = data.map(film => `
              <div>
                <img src="${film.poster}" alt="${film.title}" />
                <p><strong>${film.title}</strong></p>
                <p><strong>${film.description}</strong></p>
                <p><strong>Showtime: ${film.showtime}</strong></p>
                <p><strong>Runtime: ${film.runtime} minutes</strong></p>
                <p><strong>Tickets Available: ${film.capacity - film.tickets_sold}</strong></p>
              </div>
            `).join('');
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
 
      filmDetails()
  