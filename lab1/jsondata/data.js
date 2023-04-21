function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.querySelector(".collection");

	// Loop through each item in the collection array
	collection.forEach(function(movie) {
		const listContainer = document.createElement('div'); // Make the `div
		listContainer.classList.add("container");

		const listCover = document.createElement('div'); // Make the `div
		listCover.classList.add("cover");

		const listTitle = document.createElement('div');
		listTitle.classList.add("title");
		listTitle.innerHTML =`
		<h2>${movie.title}</h2>
		`
		const listImage = document.createElement('div');
		listImage.classList.add("image");
		listImage.innerHTML =
		`<img src="${movie.image}"/>`


		listCover.appendChild(listTitle);
		listCover.appendChild(listImage);
		listContainer.appendChild(listCover);
	


		const popup = document.createElement('div'); // Make the `div
		popup.classList.add("popup");
		const popupDiv = document.createElement('div'); // Make the `div
		popupDiv.classList.add("popupDiv");

		const popupImage = document.createElement('div'); // Make the `div
		popupImage.classList.add("popupImage");
		popupImage.innerHTML = 
		`<img src="${movie.image}"/>`

		const content = document.createElement('div'); // Make the `div
		content.classList.add("content");
		content.innerHTML = `
		<h2>${movie.title}</h2>
		<p><strong>Director:</strong> ${movie.director}</p>
		<p><strong>Release Year:</strong> ${movie.release_year}</p>
		<p><strong>Genre:</strong> ${movie.genre.join(', ')}</p>
		<p><strong>Characters:</strong> ${movie.characters.join(', ')}</p>
		<p><strong>Summary:</strong> ${movie.summary}</p>
		<p><strong>Rating:</strong> ${movie.rating}</p>
		<p><strong>Is Musical:</strong> ${movie.is_musical}</p>
	  `;


	  popupDiv.appendChild(popupImage);
	  popupDiv.appendChild(content);
	  popup.appendChild(popupDiv);
	  listContainer.appendChild(popup);

 		collectionList.appendChild(listContainer);
		
		
		// listCover.addEventListener('click', () => {
  		// listMovie.style.opacity = listMovie.style.opacity === '0' ? '1' : '0';
		 

		//   listCover.addEventListener('click', function() {
		// 	listCover.classList.toggle('card-flip');
		//   });

		// const clickableImage = document.querySelector('.clickable-image');
		// const popupContainer = document.querySelector('.popup-container');
		
		listCover.addEventListener('click', () => {
		  popup.style.display = 'block';
		});

		let closeBtn = document.createElement("span");
		closeBtn.innerHTML = "&times;";
		closeBtn.classList.add("close");
		popup.appendChild(closeBtn);
		
		closeBtn.onclick = function() { 
		  popup.style.display = "none";
		}


});
}


// const sortButton = document.querySelector('sort-button');

// sortButton.addEventListener('click', () => {
//   fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//       data.sort((a, b) => a.release_year - b.release_year);
//       // Now your data is sorted by release year
//       console.log(data);
//     });
// });





		// const listMovie = document.createElement('div') // Make the `div
		// listMovie.classList.add("Details");

		// listMovie.innerHTML = movie.fields.Title;
		// listMovie.innerHTML = movie.fields.Director;


// let collection = document.querySelector(".collection")
// .eachPage(
// 	function page(movies, fetchNextPage){
// 		  movies.forEach(
// 			function (movie) {
			
// 				let detail = document.createElement("div");
//         // // add some data specific meta to my new divs for filtering

//  		 	detail.innerHTML = movie.fields.title;
// 			detail.innerHTML = movie.fields.director;

// collectionList.appendChild(listMovie)
// 			}
// 			)
// 		  }
// 		  ;
		  
		  
// Fetch gets your JSON file.
fetch('./data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()); // In reverse order
	// })
	
	

	const genreBtns = document.querySelectorAll('.btn-genre');
    genreBtns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        const genre = event.target.dataset.genre;
        filterData(data, "genre");
      });
    });
  });

// Render your data
function renderData(data) {
  const container = document.querySelector('.container');
  
  data.forEach(movie => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>${movie.summary}</p>
      <ul>
        <li>Director: ${movie.director.join(', ')}</li>
        <li>Release Year: ${movie.release_year}</li>
        <li>Genre: ${movie.genre.join(', ')}</li>
        <li>Rating: ${movie.rating}</li>
      </ul>
    `;
    
    container.appendChild(movieEl);
  });
}

// Filter your data
function filterData(data, genre) {
  const filteredData = data.filter(movie => movie.genre.includes(genre));
  renderData(filteredData);
}



// First, get all the genre buttons
const genreButtons = document.querySelectorAll('.btn-genre');

// Then, loop through each genre button and add a click event listener to it
genreButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the genre value from the button's data-genre attribute
    const genre = button.getAttribute('data-genre');

    // Get all the movie items
    const movieItems = document.querySelectorAll('.container');

    // Loop through each movie item
    movieItems.forEach(function(movie) {
      // Check if the movie's genre array contains the selected genre
      if (movie.dataset.genre.includes(genre)) {
        // Show the movie item
        movie.style.display = 'block';
      } else {
        // Hide the movie item
        movie.style.display = 'none';
      }
    });
  });
});

// Finally, add a click event listener to the "Show All" button to reset the filter
const showAllButton = document.querySelector('.btn-all');
showAllButton.addEventListener('click', function() {
  // Get all the movie items
  const movieItems = document.querySelectorAll('.container');

  // Loop through each movie item and show it
  movieItems.forEach(function(movie) {
    movie.style.display = 'block';
  });
});
















	// document.querySelectorAll(".btn-genre").forEach((btn) => {
	// 	btn.addEventListener("click", function(event){ShowHideFilter(event, "genre")});
	//   });

	//   document.querySelectorAll(".btn-all").forEach((showAllBtn) => {
	// 	showAllBtn.addEventListener("click", function(event){ShowAll(event)});
	//   });


	//   function ShowHideFilter(e, datasetKey) {
	// 	console.log(e.target.dataset["genre"]);
	// 	let listofContainers = document.querySelectorAll("div.container");
	// 	listofContainers.forEach(function SearchFilter(movie) {
	// 	  movie.classList.remove("filter-hide");
	// 	  let movieGenres = movie["genre"].split(",");
	// 	  if (movieGenres.includes(e.target.dataset["genre"])) {
	// 		movie.classList.add("filter-show");
	// 	  } else {
	// 		movie.classList.add("filter-hide");
	// 	  }
		 
	// 	});
	//   }
	  
	//   function ShowAll(e) {
	// 	let listofContainers = document.querySelectorAll("div.container");
	// 	listofContainers.forEach( function ShowAllMovies(movie){
	// 	  movie.classList.remove("filter-hide");
	// 	  movie.classList.add("filter-show");
	// 	});
	//   }
	  
	  

	