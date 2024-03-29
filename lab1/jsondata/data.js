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




		document.querySelectorAll(".btn-genre").forEach((btn) => {
			btn.addEventListener("click", function(event){ShowHideFilter(event, "genre")});
		  });
		  
		  document.querySelectorAll(".btn-all").forEach((showAllBtn) => {
			showAllBtn.addEventListener("click", function(event){ShowAll(event)});
		  });
		  
		  
		  function ShowHideFilter(e, datasetKey) {
			console.log(e.target.dataset[datasetKey]);
			let listofContainers = document.querySelectorAll("div.container");
			listofContainers.forEach(function SearchFilter(movie) {
			  movie.classList.remove("filter-hide");
			  let movieGenres = movie.getAttribute("data-genre").split(",");
			  if (movieGenres.includes(e.target.dataset[datasetKey])) {
				movie.classList.add("filter-show");
			  } else {
				movie.classList.add("filter-hide");
			  }
			});
		  }
		  
		  function ShowAll(e) {
			let listofContainers = document.querySelectorAll("div.container");
			listofContainers.forEach( function ShowAllMovies(movie){
			  movie.classList.remove("filter-hide");
			  movie.classList.add("filter-show");
			});
		  };
	



	});
}


		  
// Fetch gets your JSON file.
fetch('./data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()); // In reverse order
	})
	




