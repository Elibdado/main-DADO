let books = [
  //science
{
  title: "Biology ll",
  author: "Henry Cuggar et. al",
  controlNumber: "" ,
  ISBN: "",
  physicalLocation: "PDMHS library",  
  digitalCopy: "",
  keywords: ["life", "organisms", "science", "all"]
},
{
  title: "Physical science",
  author: "Ken Dobson et. al",
  controlNumber: "294",
  ISBN: "",
  physicalLocation: "" ,
  digitalCopy: "PDMHS library",
  keywords: ["Physics", "chemistry","all"]
},
{
  title: "Environmental  science",
  author: "Karen Arms",
  controlNumber: "398",
  ISBN: "",
  physicalLocation: "PDMHS library" ,
  digitalCopy: "",
  keywords: ["Biodiversity", "Ecosystem", "Pollution", "Climate change", "all"]
},
{
  title: "Introduction to earth  science",
  author: "Thompson, Turk",
  controlNumber: "389",
  ISBN: "",
  physicalLocation: "PDMHS library" ,
  digitalCopy: "",
  keywords: ["Biodiversity", "Ecosystem", "Pollution", "Climate change", "all"]
},
// math
{
  title: "Geometry lll",
  author: "Fernando B. Orines et. Al",
  controlNumber: "365" ,
  ISBN: "",
  physicalLocation: "PDMHS library",  
  digitalCopy: "",
  keywords: ["math", "arithmetic", "numbers", "plus", "multiplication", "addition", "subtraction", "division", "all"]
},
{
  title: "Algebra l",
  author: "Larson, Borswell, Stiff",
  controlNumber: "351" ,
  ISBN: "",
  physicalLocation: "PDMHS library",  
  digitalCopy: "",
  keywords: ["math", "arithmetic", "numbers", "plus", "multiplication", "addition", "subtraction", "division", "all"]
},
{
  title: "Mathematics course 1 ",
  author: "",
  controlNumber: "378" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["math", "arithmetic", "numbers", "plus", "multiplication", "addition", "subtraction", "division", "all"]
},
{
  title: " Connected Mathematics 2 ",
  author: "",
  controlNumber: "374" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["math", "arithmetic", "numbers", "plus", "multiplication", "addition", "subtraction", "division", "all"]
},
{
  title: " Core-Plus Mathematics ",
  author: "McGraw Hill",
  controlNumber: "1515" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["math", "arithmetic", "numbers", "plus", "multiplication", "addition", "subtraction", "division", "all"]
},
{
  title: " Geometry ",
  author: "Larson",
  controlNumber: "373" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["math", "arithmetic", "numbers", "plus", "multiplication", "addition", "subtraction", "division", "all"]
},
//english
{
  title: "Communication in the new millenium ",
  author: "J.A Sean Carol and Skinner",
  controlNumber: "00221" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["English", "all"]
},
//
{
  title: "Technology and Livelihood Education lll",
  author: "Rita M. Delos Santos et.al",
  controlNumber: "" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["Tvl", "livelihood", "carpentry", "Technology", "Technical Skills","Vocational Training", "all"]
},
{
  title: "Technology and Livelihood Education",
  author: "Rita M. Delos Santos et.al",
  controlNumber: "" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["Tvl", "livelihood", "carpentry", "Technology", "Technical Skills","Vocational Training", "all"]
},
//filipino
{
  title: "Filipno l sa Bagong Henerasyon ikatlong edisyon",
  author: "Teresita Cruz-Arceo",
  controlNumber: "" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["Filipino", "Dr. Jose Rizal", "", "all"]
},
{
  title: "El Filiustirismo",
  author: "Dr. Jose Rizal binuog ni Lorna T. Reyes",
  controlNumber: "" ,
  ISBN: "",
  physicalLocation: "PDMHS LIBRARY",  
  digitalCopy: "",
  keywords: ["Filipino", "Dr. Jose Rizal", "", "all"]
},
];

document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let lastQuery = document.getElementById('search').value.trim().toLowerCase(); // Trim leading/trailing white spaces

  // If the search bar is empty, do nothing and return
  if (!lastQuery) {
      return;
  }

  let bookResults = searchForBooks(lastQuery);
  });

  function showResult() {
      var dropdown = document.getElementById("bookDropdown");
      var resultDiv = document.getElementById("result");
      var backButton = document.getElementById("backButton");
      var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  
      // Clear the previous result
      resultDiv.innerHTML = "";
  
      if (selectedOption !== "default") {
          var filteredBooks = books.filter(function(book) {
              return book.keywords.includes(selectedOption);
          });
  
          if (filteredBooks.length > 0) {
              resultDiv.innerHTML = "<h2>" + capitalizeFirstLetter(selectedOption) + " Books:</h2>";
              filteredBooks.forEach(function(book) {
                  resultDiv.innerHTML +="<p><strong>Title:</strong> " + book.title + "<br><strong>Author:</strong> " + book.author + "<br><strong>Control Number:</strong>" + book.controlNumber + 
                  "<br><strong>ISBN:</strong> " + book.ISBN + "<br><strong>Location:</strong> " + book.physicalLocation + "<br><strong>DigitalCopy:</strong>" + book.digitalCopy + "</p>";
              });
          } else {
              resultDiv.innerHTML = "<p>No " + selectedOption + " books found.</p>";
          }
  
          // Show back button
          backButton.style.display = "block";
      } else {
          resultDiv.innerHTML = "<p>Please select a valid option.</p>";
          backButton.style.display = "none"; // Hide back button
      }
  }
  
  // Add event listener to the dropdown
  document.getElementById("bookDropdown").addEventListener("change", showResult);
  
  // Add event listener to the back button
  document.getElementById("backButton").addEventListener("click", function() {
      // Go back to homepage (you need to replace this with your homepage URL)
      window.location.href = "index.html";
  });
  
  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function searchForBooks(query) {
      const searchResults = document.getElementById('searchResults');
      const definitionBox = document.getElementById('definition-box');
      searchResults.innerHTML = ''; // Clear previous search results
      definitionBox.innerHTML = ''; // Clear previous definition
    
      const bookResults = books.filter(book => 
          book.title.toLowerCase().includes(query) || 
          (book.keywords && book.keywords.some(keyword => keyword.toLowerCase().includes(query)))
      );
    
      if (bookResults.length > 0) {
          displayResults(bookResults);
      } else {
          searchDefinition(query);
      }
    }

   
    function displayResults(books) {
      const resultsPage = document.getElementById('resultsPage');
      const searchResults = document.getElementById('searchResults');
      const searchInput = document.getElementById('search'); // Assuming 'search' is the id of your search input
    
      searchResults.innerHTML = ''; // Clear any previous results
    
      books.forEach(book => {
          const bookEl = document.createElement('li');
          const bookTitle = document.createElement('a');
          bookTitle.href = '#';
          bookTitle.textContent = book.title;
    
          // Add click event to display bibliographic data for the clicked book
          bookTitle.addEventListener('click', function(event) {
              event.preventDefault(); // Prevent default link behavior
              displayBibliographicDetails(book);
          });
    
          bookEl.appendChild(bookTitle);
          searchResults.appendChild(bookEl);
      });
    
      resultsPage.style.display = 'block';
      searchInput.value = ''; // Clear the search input
    }

    function displayBibliographicDetails(book) {
      const detailsEl = document.createElement('div');
      const biblioGrid = document.createElement('div');
      biblioGrid.id = 'biblioGrid';
    
      biblioGrid.innerHTML =  `
          <div><strong>Title:</strong></div>
          <div>${book.title}</div>
          <div><strong>Author:</strong></div>
          <div>${book.author ? book.author : 'N/A'}</div>
          <div><strong>Control Number:</strong></div>
          <div>${book.controlNumber ? book.controlNumber : 'N/A'}</div>
          <div><strong>ISBN:</strong></div>
          <div>${book.ISBN ? book.ISBN : 'N/A'}</div>
          <div><strong>Physical Location:</strong></div>
          <div>${book.physicalLocation ? book.physicalLocation : 'N/A'}</div>
          <div><strong>Digital Copy:</strong></div>
          <div>${book.digitalCopy ? book.digitalCopy : 'N/A'}</div>
          `;
    
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = ''; // Clear current results
      searchResults.appendChild(detailsEl); // Display the bibliographic details

      detailsEl.appendChild(biblioGrid);
      detailsEl.innerHTML += '<button id="backButton" onclick="backToSearch()">Back</button>';
    }
    
function backToSearch() {
  document.getElementById('resultsPage').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
}

function searchForBooks(query) {
  const searchResults = document.getElementById('searchResults');
  const definitionBox = document.getElementById('definition-box');
  searchResults.innerHTML = ''; // Clear previous search results
  definitionBox.innerHTML = ''; // Clear previous definition

  const bookResults = books.filter(book => 
      book.title.toLowerCase().includes(query) || 
      (book.keywords && book.keywords.some(keyword => keyword.toLowerCase().includes(query)))
  );

  if (bookResults.length > 0) {
      displayResults(bookResults);
  } else {
      searchDefinition(query);
  }
}