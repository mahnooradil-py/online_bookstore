// This is our list of books. Each book has a title, author, genre, price, language, format, and description.
const books = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "fiction",
    price: 20,
    language: "english",
    format: ["paperback"],
    description: "A romantic novel of manners."
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "non-fiction",
    price: 25,
    language: "english",
    format: ["hardback"],
    description: "A brief history of humankind."
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "fantasy",
    price: 15,
    language: "english",
    format: ["ebook"],
    description: "A young wizard's journey."
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "mystery",
    price: 18,
    language: "english",
    format: ["paperback", "ebook"],
    description: "A gripping mystery novel."
  }
];

// This function runs when the "Get Recommendations" button is clicked.
document.getElementById("submit-button").addEventListener("click", function () {
  // Get the user's inputs from the form.
  const genre = document.getElementById("genre").value; // User's preferred genre
  const author = document.getElementById("author").value.toLowerCase(); // User's favourite author (converted to lowercase for easier comparison)
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0; // Minimum price
  const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity; // Maximum price
  const language = document.getElementById("language").value; // User's preferred language

  // Check which formats the user selected.
  const formats = [];
  if (document.getElementById("ebook").checked) {
    formats.push("ebook");
  }
  if (document.getElementById("hardback").checked) {
    formats.push("hardback");
  }
  if (document.getElementById("paperback").checked) {
    formats.push("paperback");
  }

  // Filter the books based on user preferences.
  const filteredBooks = books.filter(function (book) {
    // Check if the book matches the user's preferences.
    return (!genre || book.genre === genre) && // Match genre
      (!author || book.author.toLowerCase().includes(author)) && // Match author (case-insensitive)
      book.price >= minPrice && book.price <= maxPrice && // Match price range
      (!language || book.language === language) && // Match language
      (formats.length === 0 || formats.some(format => book.format.includes(format))); // Match format(s)
  });

  // Show the recommendations to the user.
  displayRecommendations(filteredBooks);
});

// This function displays the filtered books on the page.
function displayRecommendations(filteredBooks) {
  const bookList = document.getElementById("book-list"); // Find the list where we will show the books.
  bookList.innerHTML = ""; // Clear any previous recommendations.

  // If there are matching books, add each one to the list.
  filteredBooks.forEach(function (book) {
    const listItem = document.createElement("li"); // Create a new list item for each book.
    listItem.textContent = `${book.title} by ${book.author} - £${book.price}: ${book.description}`; // Show book details.
    bookList.appendChild(listItem); // Add the list item to the list.
  });

  // If no books matched the user's preferences, show a message.
  if (filteredBooks.length === 0) {
    const noResults = document.createElement("li");
    noResults.textContent = "No books found matching your preferences.";
    bookList.appendChild(noResults);
  }
}