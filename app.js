const books = [
  // 2021 (Fiction-English & Urdu)
  {
    title: "The Lincoln Highway",
    author: "Amor Towles",
    genre: "Fiction",
    price: 22.99,
    language: "English",
    publicationYear: 2021,
    format: "Hardcover",
    rating: 4.7,
    description: "A road-trip novel set in 1954, following three young men on an unexpected journey across America."
  },
  {
    title: "Mushaf",
    author: "Nemrah Ahmed",
    genre: "Fiction",
    price: 22.99,
    language: "Urdu",
    publicationYear: 2021,
    format: "Hardcover",
    rating: 4.7,
    description: "A thought-provoking novel about Mehmal Ibraheem, whose life takes a transformative turn after encountering the teachings of the Quran."
  },
  {
    title: "Beautiful World, Where Are You",
    author: "Sally Rooney",
    genre: "Fiction",
    price: 10.99,
    language: "English",
    publicationYear: 2021,
    format: "eBook",
    rating: 4.5,
    description: "A contemplative novel exploring love, friendship, and identity through the intertwined lives of four characters navigating modern relationships."  
  },
  {
    title: "Aazmaish",
    author: "Various Authors",
    genre: "Fiction",
    price: 9.99,
    language: "Urdu",
    publicationYear: 2021,
    format: "eBook",
    rating: 4.4,
    description: "A collection of thought-provoking stories exploring themes of trials, resilience, and personal growth."
  },
  {
    // (Non-Fiction-English & Urdu)
    title: "Empire of Pain",
    author: "Patrick Radden Keefe",
    genre: "Non-Fiction",
    price: 12.99,
    language: "English",
    publicationYear: 2021,
    format: "eBook",
    rating: 4.9,
    description: "A gripping exposé on the Sackler family's role in the opioid crisis, revealing their pursuit of wealth at the cost of public health."  
  },
  {
    title: "Rah-e-Haq",
    author: "Mufti Muhammad Shafi",
    genre: "Non-Fiction",
    price: 12.99,
    language: "Urdu",
    publicationYear: 2021,
    format: "eBook",
    rating: 4.9
  },


  {
    title: "The Code Breaker",
    author: "Walter Isaacson",
    genre: "Non-Fiction",
    price: 24.99,
    language: "English",
    publicationYear: 2021,
    format: "Hardcover",
    rating: 4.7,
    description: "A fascinating biography of Jennifer Doudna and the revolutionary world of gene editing."
  },

  {
    title: "Undlas Main Ajnabi",
    author: "Mustansar Hussain Tarar",
    genre: "Non-Fiction",
    price: 22.99,
    language: "Urdu",
    publicationYear: 2021,
    format: "Hardcover",
    rating: 4.6,
    description: "A captivating Urdu travelogue that takes readers through Spain, blending historical insights with personal observations."  
  },
  {  
    title: "Razorblade Tears",  
    author: "S.A. Cosby",  
    genre: "Mystery",  
    price: 18.99,  
    language: "English",  
    publicationYear: 2021,  
    format: "Hardcover",  
    rating: 4.7,  
    description: "A fast-paced thriller about two fathers seeking justice."  
  },


  // 2022 (English & Urdu)
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    genre: "Fiction",
    price: 20.99,
    language: "English",
    publicationYear: 2022,
    format: "Hardcover",
    rating: 4.8,
    description: "A novel following childhood friends Sadie and Sam as they become successful video game designers, navigating creativity, friendship, and personal growth over decades."  
  },
  {
    title: "Haalim",
    author: "Nemrah Ahmed",
    genre: "Fiction",
    price: 20.99,
    language: "Urdu",
    publicationYear: 2022,
    format: "Hardcover",
    rating: 4.8
  },
  {
    title: "Sea of Tranquility",
    author: "Emily St. John Mandel",
    genre: "Fiction",
    price: 18.99,
    language: "English",
    publicationYear: 2022,
    format: "ebook",
    rating: 4.6,
    description: "A beautifully written speculative fiction novel spanning centuries."
  },
  {
    title: "House Number 12 Block Number 3",
    author: "Sana Balagamwala",
    genre: "Fiction",
    price: 15.99,
    language: "Urdu",
    publicationYear: 2022,
    format: "ebook",
    rating: 4.5,
    description: "A gripping story set in Karachi, exploring themes of mental health and societal taboos."
  },


  {
    title: "The Song of the Cell",
    author: "Siddhartha Mukherjee",
    genre: "Non-Fiction",
    price: 12.99,
    language: "English",
    publicationYear: 2022,
    format: "eBook",
    rating: 4.9,
    description: "An exploration of cell biology, tracing the discovery of cells and their role in medicine, disease, and the future of human health."  
  },
  {
    title: "Zavia",
    author: "Ashfaq Ahmed",
    genre: "Non-Fiction",
    price: 12.99,
    language: "Urdu",
    publicationYear: 2022,
    format: "eBook",
    rating: 4.9,
    description: "A profound collection of Ashfaq Ahmed’s reflections on life, spirituality, and human nature, offering wisdom and introspection."
  },
  {  
    title: "The Maid",  
    author: "Nita Prose",  
    genre: "Mystery",  
    price: 20.99,  
    language: "English",  
    publicationYear: 2022,  
    format: "Hardcover",  
    rating: 4.8,  
    description: "A cozy mystery following a hotel maid caught in a murder investigation."  
  },  
  {
    title: "The Paris Library",  
    author: "Janet Skeslien Charles",  
    genre: "Mystery",  
    price: 19.99,  
    language: "English",  
    publicationYear: 2022,  
    format: "ebook",  
    rating: 4.6,  
    description: "A historical mystery set during WWII."  
  },  


  // 2023 (English & Urdu)
  {
    title: "The Heaven & Earth Grocery Store",
    author: "James McBride",
    genre: "Fiction",
    price: 22.99,
    language: "English",
    publicationYear: 2023,
    format: "Hardcover",
    rating: 4.7,
    description: "A powerful novel set in a 1920s Pennsylvania neighborhood, exploring themes of race, community, and hidden secrets."  
  },

  {
    title: "Tremor",
    author: "Teju Cole",
    genre: "Fiction",
    price: 11.99,
    language: "English",
    publicationYear: 2023,
    format: "eBook",
    rating: 4.6,
    description: "A beautifully written novel exploring art, memory, and global identity."
  },
  {
    title: "Mere Jeene Ki Wajah",
    author: "Tania Hashmi",
    genre: "Fiction",
    price: 9.99,
    language: "Urdu",
    publicationYear: 2023,
    format: "eBook",
    rating: 4.5,
    description: "An emotional story of resilience and self-discovery."
  },

  {
    title: "Pakistan: A Hard Country",
    author: "Anatol Lieven",
    genre: "Non-Fiction",
    price: 13.99,
    language: "Urdu",
    publicationYear: 2023,
    format: "Hardcover",
    rating: 4.8
  },


  {
    title: "The Demon of Unrest",
    author: "Erik Larson",
    genre: "Non-Fiction",
    price: 12.99,
    language: "English",
    publicationYear: 2023,
    format: "eBook",
    rating: 4.9,
    description: "A gripping historical account of the five months between Lincoln’s election and the start of the Civil War, exploring political turmoil and personal struggles."  
  },

  {
    title: "King",
    author: "Jonathan Eig",
    genre: "Non-Fiction",
    price: 24.99,
    language: "English",
    publicationYear: 2023,
    format: "Hardcover",
    rating: 4.7,
    description: "A definitive biography of Martin Luther King Jr."
  },
  {
    title: "Raja Gidh",
    author: "Bano Qudsia",
    genre: "Mystery",
    price: 14.99,
    language: "Urdu",
    publicationYear: 2023,
    format: "Paperback",
    rating: 4.8,
    description: "A philosophical novel exploring human psychology, morality, and the consequences of forbidden desires."  
  },
  {
    title: "Tehzeebi Nargasiyat",
    author: "Mobarak Haider",
    genre: "Non-Fiction",
    price: 22.99,
    language: "Urdu",
    publicationYear: 2023,
    format: "Hardcover",
    rating: 4.4,
    description: "A thought-provoking book exploring cultural narcissism and its impact on society."
  },
  {  
    title: "The House in the Pines",  
    author: "Ana Reyes",  
    genre: "Mystery",  
    price: 17.99,  
    language: "English",  
    publicationYear: 2023,  
    format: "Hardcover",  
    rating: 4.5,  
    description: "A psychological thriller about memory and deception."  
  },
  {  
    title: "The Writing Retreat",  
    author: "Julia Bartz",  
    genre: "Mystery",  
    price: 19.99,  
    language: "English",  
    publicationYear: 2023,  
    format: "ebook",  
    rating: 4.4,  
    description: "A dark mystery set in an exclusive writer’s retreat."  
  },  



  // 2024 (English & Urdu)
  {
    title: "James",
    author: "Percival Everett",
    genre: "Fiction",
    price: 22.99,
    language: "English",
    publicationYear: 2024,
    format: "Hardcover",
    rating: 4.7,
    description: "A retelling of Huckleberry Finn from Jim’s perspective, exploring themes of agency, intelligence, and survival."  
  },
  {
    title: "Mushaf",
    author: "Nemrah Ahmed",
    genre: "Fiction",
    price: 22.99,
    language: "Urdu",
    publicationYear: 2024,
    format: "Hardcover",
    rating: 4.7,
    description: "A thought-provoking novel about Mehmal Ibraheem, whose life transforms after encountering the teachings of the Quran."  
  },
  {
    title: "Martyr!",
    author: "Kaveh Akbar",
    genre: "Non-Fiction",
    price: 12.99,
    language: "English",
    publicationYear: 2024,
    format: "eBook",
    rating: 4.9,
    description: "A literary novel exploring identity, grief, and artistic expression through the journey of Cyrus Shams, an Iranian-American poet seeking meaning in his mother's tragic past."  
  },
  {
    title: "Talism-e-Hoshruba",
    author: "Nemra Ahmed",
    genre: "Fantasy",
    price: 22.99,
    language: "Urdu",
    publicationYear: 2024,
    format: "Hardcover",
    rating: 4.8
  },
  {  
    title: "The Alaska Sanders Affair",  
    author: "Joël Dicker",  
    genre: "Mystery",  
    price: 19.99,  
    language: "English",  
    publicationYear: 2024,  
    format: "Hardcover",  
    rating: 4.6,  
    description: "A gripping detective novel featuring Marcus Goldman."  
  },  
  {  
    title: "The River We Remember",  
    author: "William Kent Krueger",  
    genre: "Mystery",  
    price: 21.99,  
    language: "English",  
    publicationYear: 2024,  
    format: "ebook",  
    rating: 4.7,  
    description: "A small-town murder mystery set in 1958."  
  },  


];

//  Price Range Filtering  
document.getElementById("recommendationForm").addEventListener("submit", function (event) {  
  event.preventDefault();  

  const selectedRange = document.getElementById("priceRange").value;  
  const priceLimits = selectedRange.split("-");  
  const minPrice = parseFloat(priceLimits[0]);  
  const maxPrice = parseFloat(priceLimits[1]);  

  const genre = document.getElementById("genre").value;  
  const authorInput = document.getElementById("author").value.toLowerCase().trim();  
  const language = document.getElementById("language").value;  
  const pubYear = document.getElementById("pubYear").value;  
  const format = document.getElementById("format").value;  

  const filteredBooks = books.filter(book =>  
    book.price >= minPrice && book.price <= maxPrice &&  
    (!genre || book.genre === genre) &&  
    (!authorInput || book.author.toLowerCase().includes(authorInput)) &&  
    (!language || book.language === language) &&  
    (!pubYear || book.publicationYear == pubYear) &&  
    (!format || book.format === format)  
  );  

  displayRecommendations(filteredBooks);  
});  

// Display Book Recommendations  
function displayRecommendations(results) {  
  const recommendationsDiv = document.getElementById("bookList");  
  recommendationsDiv.innerHTML = "";  

  if (results.length === 0) {  
    recommendationsDiv.innerHTML = "<p>No books match your preferences.</p>";  
    return;  
  }  

  results.forEach(book => {  
    const div = document.createElement("div");  
    div.className = "book";  
    div.innerHTML = `  
      <h3>${book.title}</h3>  
      <p><strong>Author:</strong> ${book.author}</p>  
      <p><strong>Price:</strong> £${book.price.toFixed(2)}</p>  
      <p><strong>Rating:</strong>  ${book.rating}</p>  
      <p><strong>Description:</strong> ${book.description}</p>  
      <button onclick='addToWishlist(${JSON.stringify(book)})'>Add to Wishlist</button>  
    `;  
    recommendationsDiv.appendChild(div);  
  });  
}  
//Wishlist Functions (Local Storage Management)
function getWishlist() {  
  return JSON.parse(localStorage.getItem("wishlist")) || [];  
}  

function saveWishlist(wishlist) {  
  localStorage.setItem("wishlist", JSON.stringify(wishlist));  
}  

function renderWishlist() {  
  const wishlistDiv = document.getElementById("wishlist");  
  const wishlist = getWishlist();  
  wishlistDiv.innerHTML = "";  

  if (wishlist.length === 0) {  
    wishlistDiv.textContent = "Your wishlist is empty.";  
    return;  
  }  

  wishlist.forEach(book => {  
    const item = document.createElement("p");  
    item.textContent = `${book.title} by ${book.author}`;  
    wishlistDiv.appendChild(item);  
  });  
}  

function addToWishlist(book) {  
  const wishlist = getWishlist();  

  // Prevent duplicate entries  
  if (!wishlist.some(b => b.title === book.title)) {  
    wishlist.push(book);  
    saveWishlist(wishlist);  
  }  

  renderWishlist();  
}  

function clearWishlist() {  
  localStorage.removeItem("wishlist");  //Clears wishlist from local storage  
  renderWishlist();  //Refreshes UI to show an empty wishlist  
}  

window.onload = renderWishlist;  

// Attach Clear Wishlist button functionality
document.getElementById("clearWishlist").addEventListener("click", clearWishlist);