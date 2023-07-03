


fetch(`http://localhost:4000/films/1`)
    // method: "PATCH",
    // header:{
    //     "Content-type":"application/json"
    // },/1
    // body:JSON.stringify(movie)

.then(res => res.json())
  .then(data => {
    const { poster, title, runtime, description, showtime, capacity, tickets_sold,} = data;
 const ticketsAvailable = capacity - tickets_sold
console.log(ticketsAvailable)
   
    // Update HTML elements with movie details
         document.getElementById('poster').src = poster;
     document.getElementById('description').textContent = description;
    document.getElementById('title').textContent = title;
   document.getElementById('showtime').textContent = showtime;
  document.getElementById('runtime').textContent = runtime;
    document.getElementById('tickets').textContent = ticketsAvailable;
//     // document.getElementById('button').addEventListener("click", function() {
//     // const ticketsAvailable = parseInt(document.getElementById('ticketsAvailable').textContent);
//     //   if (ticketsAvailable > 0) {
//     //   document.getElementById('tickets').value = ticketsAvailable - 1;
//     // } else {
//     //   alert('Tickets are sold out.');
//     // }

    document.getElementById('btn').addEventListener("click", function() {
        alert(ticketsAvailable)
        document.getElementById('tickets').textContent = ticketsAvailable-1
        console.log(ticketsAvailable)
       
      });
      
  
  

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
                <img id = "posterimg" src="${film.poster}" alt="${film.title}" />
                <p><strong>${film.title}</strong></p>
                <p><strong>${film.description}</strong></p>
                <p><strong>Showtime: ${film.showtime}</strong></p>
                <p><strong>Runtime: ${film.runtime} minutes</strong></p>
                <p id="Tickets available"><strong>Tickets Available: ${film.capacity - film.tickets_sold}</strong></p>
                <button id="button" type="button">Buy Tickets</button>
              </div>
             
            `).join('');
           
            
            
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
      
      
      
      filmDetails();
      
      function buyTicket(){
        const availableTicketsElement = document.getElementById('Tickets Available')
        let availableTickets = parseInt(availableTicketsElement.textContent)


        if (availableTickets >0){
          availableTickets--;
          availableTicketsElement.textContent= availableTickets;
          console.log(`Ticket bought for ${movie.title}`);
        } else {
          console.log(`Sorry, tickets are sold out for ${movie.title}`)
        }
      }
      buyTicket()

